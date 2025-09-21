"use client"
import { useState } from "react";
import SideBar from "../components/sidebar";
import Image from "next/image";
import NotificationComponent from "../components/notification";
import { Menu } from "lucide-react";
import { useParams } from "next/navigation";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [notificationBar, toggleNotificationBar] = useState(true)

    return (
        <>
            <div className="flex h-screen bg-gray-50">
                {/* Sidebar */}
                <aside
                    className={` dark:bg-black fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col 
                    transform md:translate-x-0 transition-transform duration-300 z-50 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } border-r border-gray-700`}
                >
                    <div className="p-6 text-xl flex items-center">
                        <Image src={"/images/profile-image.png"} alt="profile-icon" className="mr-5 rounded-full" width={30} height={30} />
                        ByeWind
                        <button className="md:hidden ml-10" onClick={() => setSidebarOpen(false)}>
                            ✕
                        </button>
                    </div>
                    <SideBar />

                </aside>
                {/* Main Content */}
                <main className="flex-1 p-4 md:p-6 space-y-6 overflow-y-scroll scrollbar-hide w-full dark:bg-black  border-r border-gray-500">

                    {/* Navigation */}
                    {/* Header */}
                    {/* light mode */}
                    <div className="flex justify-between w-full">
                        <div className="flex justify-start sm:space-x-5 space-x-3">

                            {/* burger */}
                            <Menu className="h-5 w-5 cursor-pointer md:hidden" onClick={() => setSidebarOpen(true)} />

                            <Image src={"/icons/vector.png"} alt="icon-set" onClick={() => setSidebarOpen(true)} className="w-5 h-5 py-0.5 dark:hidden cursor-pointer" width={20} height={"10"} />
                            <Image src={"/icons/star.png"} alt="icon-set" className="w-5 h-5  dark:hidden cursor-pointer" width={20} height={"20"} />
                            <p className="text-sm dark:hidden p-0"><span className="text-gray-400 cursor-pointer">Dashboards / </span>Default</p>
                            {/* Dark mode */}
                            <Image src={"/icons/d-Notebook.png"} alt="icon-set" onClick={() => setSidebarOpen(true)} className="w-5 h-5 py-0.5 hidden dark:block cursor-pointer" width={20} height={"10"} />
                            <Image src={"/icons/d-star.png"} alt="icon-set" className="w-5 h-5 hidden dark:block cursor-pointer" width={20} height={"20"} />
                            <p className="text-sm hidden dark:block p-0"><span className="text-gray-400 cursor-pointer">Dashboards / </span>Default</p>
                        </div>
                        <div className="flex md:space-x-5 space-x-2">
                            <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-800 py-1 rounded-md xs:hidden cursor-pointer">
                                <Image src={"/icons/search-icon.png"} alt="icon-set" className="w-5 h-5 p-0.5  dark:hidden cursor-pointer" width={20} height={"20"} />
                                <input className="text-sm pl-2 sm:pr-16 pr-5 text-gray-400 dark:hidden w-3/4 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent" placeholder="Search" />
                                <Image src={"/icons/Text.png"} alt="icon-set" className="w-5 h-5 py-1 dark:hidden cursor-pointer" width={20} height={"20"} />
                                {/* Dark mode */}
                                <Image src={"/icons/d-search-icon.png"} alt="icon-set" className="w-5 h-5 p-1 hidden dark:block cursor-pointer" width={20} height={"20"} />
                                <input className="text-sm pl-2 sm:pr-16 pr-5 text-gray-400 hidden dark:block w-3/4 bg-transparent placeholder-gray-600 focus:outline-none focus:ring-0 focus:border-transparent" placeholder="Search" />
                                <Image src={"/icons/d-text.png"} alt="icon-set" className="w-5 h-5 py-1 hidden dark:block cursor-pointer" width={20} height={"20"} />
                            </div>
                            <Image src={"/icons/Button.png"} alt="icon-set" className="w-7 h-7 dark:hidden cursor-pointer" width={20} height={"20"} />
                            <Image src={"/icons/timmer.png"} alt="icon-set" className="w-6 h-6 dark:hidden cursor-pointer" width={20} height={"20"} />
                            <Image src={"/icons/bell.png"} alt="icon-set" className="w-6 h-6 dark:hidden cursor-pointer" width={20} height={"20"} />
                            <Image src={"/icons/vector.png"} alt="icon-set" onClick={() => toggleNotificationBar(true)} className="w-6 h-6 py-0.5 dark:hidden cursor-pointer" width={20} height={"20"} />
                            {/* Dark mode */}
                            <Image src={"/icons/d-Button.png"} alt="icon-set" className="w-7 h-7 hidden dark:block cursor-pointer" width={20} height={"20"} />
                            <Image src={"/icons/d-timmer.png"} alt="icon-set" className="w-6 h-6 hidden dark:block cursor-pointer" width={20} height={"20"} />
                            <Image src={"/icons/d-bell.png"} alt="icon-set" className="w-6 h-6 hidden dark:block" width={20} height={"20"} />
                            <Image src={"/icons/d-Notebook.png"} alt="icon-set" onClick={() => toggleNotificationBar(true)} className="w-6 h-6 py-0.5 hidden dark:block cursor-pointer" width={20} height={"20"} />
                        </div>
                    </div>

                    {children}
                </main>
                <aside className="hidden xl:block w-70 bg-white shadow-lg p-4 space-y-6 h-screen overflow-y-auto scrollbar-hide dark:bg-black dark:text-white">
                    <NotificationComponent />
                </aside>
                {/* <aside className={`fixed right-0 top-0 w-70 bg-white shadow-lg p-4 space-y-6 h-screen overflow-y-auto 
                        scrollbar-hide dark:bg-black dark:text-white transform transition-transform duration-300 ease-in-out 
                        ${notificationBar ? "xs:translate-x-0" : "xs:translate-x-full"
                    }`}
                >
                    <div className="dark:text-white">
                        <div className="text-lg font-semibold mb-2">Notifications
                            <span><button className="md:hidden ml-10" onClick={() => toggleNotificationBar(false)}>
                                ✕
                            </button></span></div>
                        <NotificationComponent />
                    </div>
                </aside> */}
                {/* </div> */}
            </div>
        </>
    )
}