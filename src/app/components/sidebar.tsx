
"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { usePathname } from "next/navigation";


export default function SideBar() {

    
    // Track open submenus: key is `${menuIndex}_${subIndex}`
    const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({});
    const currentPath = usePathname();

    const sidebar = [
        {
            menuName: "Dashboards", subMenu: [
                { subMenuName: "Default", icon: "/icons/ChartPieSlice.png", dIcon: "/icons/d-default.png", options: ["Campaigns", "Documents", "Flowers"] },
                { subMenuName: "eCommerce", icon: "/icons/eCommerce.png", dIcon: "/icons/d-ecommerce.png", options: ["Overview", "Projects",] },
                { subMenuName: "Projects", icon: "/icons/folder.png", dIcon: "/icons/d-folder.png", options: ["Overview", "Projects",] },
                { subMenuName: "Online Courses", icon: "/icons/BookOpen.png", dIcon: "/icons/d-openbook.png", options: ['chapter-1', 'chapter-2', 'chapter-3'] }
            ]
        },
        {
            menuName: "Pages", subMenu: [
                {
                    subMenuName: "User Profile", icon: "/icons/user-profile.png", dIcon: "/icons/d-use-profile.png", options: [
                        "Overview", "Projects"
                    ]
                },
                {
                    subMenuName: "Accounts", icon: "/icons/phonebook.png", dIcon: "/icons/d-phone-book.png", options: [
                        "Campaigns", "Documents", "Flowers"
                    ]
                },
                {
                    subMenuName: "Corporate", icon: "/icons/group.png", dIcon: "/icons/d-group.png", options: [
                        "Overview", "Projects",
                    ]
                },
                {
                    subMenuName: "Blog", icon: "/icons/Notebook.png", dIcon: "/icons/d-Notebook.png", options: [
                        "Blog-1", "Blog-2", "Blog-3"
                    ]
                },
                {
                    subMenuName: "Social", icon: "/icons/chat.png", dIcon: "/icons/d-chat.png", options: [
                        "News feed", "Advertisements", "Stocks", "Media", "Posts"
                    ]
                }
            ]
        }
    ]


    const handleSubToggle = (menuIdx: number, subIdx: number) => {
        const key = `${menuIdx}_${subIdx}`;
        setOpenSubs((prev) => ({ [key]: !prev[key] }));
    };


    return (
        <>
            {/* Sidebar */}
            <nav className="flex-1 space-y-2 p-4 overflow-y-auto scrollbar-hide">
                <div className="font-semibold text-gray-500 ">Favorites<span className="pl-10 text-gray-400">  Recently</span></div>
                <Link href="/" className={`block rounded-xl hover:bg-gray-100 p-2 hover:dark:bg-gray-700 cursor-pointer ${currentPath === '/' ? "bg-gray-100 p-2 dark:bg-gray-700": ""}`}>Home</Link>
                <Link href="/order-list" className={`block rounded-xl hover:bg-gray-100 p-2 hover:dark:bg-gray-700 cursor-pointer ${currentPath === '/order-list' ? "bg-gray-100 p-2 dark:bg-gray-700": ""}`}>Order-list</Link>
                {sidebar.map((sideBarOption, menuIdx) => (
                    <div key={"menu_" + menuIdx} className="pt-4 font-semibold text-gray-700 dark:text-white">{sideBarOption.menuName}
                        <ul>
                            {sideBarOption.subMenu.map((sub, subIdx) => {
                                const subKey = `${menuIdx}_${subIdx}`;
                                const isOpen = openSubs[subKey];
                                return (
                                    <li key={"sub_" + subIdx} className="rounded-xl p-2 ">
                                        <div
                                            className={`inline-flex items-center w-full cursor-pointer ${isOpen ? "bg-gray-100 dark:bg-gray-700" : ""} hover:bg-gray-100 hover:dark:bg-gray-700 rounded-xl px-2 py-1`}
                                            onClick={() => handleSubToggle(menuIdx, subIdx)}
                                        >
                                            <Image src={"/icons/arrow-down.png"} alt="" className={`m-2 transition-transform ${isOpen ? "rotate-180" : ""}`} width={8} height={5} />
                                            <Image src={sub.icon} alt="" className="mr-2 dark:hidden" width={20} height={20} />
                                            <Image src={sub.dIcon} alt="" className="mr-2 hidden dark:block" width={20} height={20} />
                                            {sub.subMenuName}
                                        </div>
                                        {isOpen && sub.options && sub.options.length > 0 &&  (
                                            <ul>
                                                {sub.options.map((op, ref) => (
                                                    <li key={"option_" + ref} className="cursor-pointer rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2 ">
                                                        <a className="inline-flex ml-12">
                                                            {op}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav >
        </>


    )
}