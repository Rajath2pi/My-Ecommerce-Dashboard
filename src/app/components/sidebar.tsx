import Image from "next/image";

export default function SideBar() {

    return (
        <>
            {/* Sidebar */}
            <nav className="flex-1 space-y-2 p-4 overflow-y-auto scrollbar-hide">
                <div className="font-semibold text-gray-500 ">Favorites<span className="pl-10 text-gray-400">  Recently</span></div>
                <ul>
                    <li className="block rounded-xl hover:bg-gray-100 p-2  hover:dark:bg-gray-700">Overview</li>
                    <li className="block rounded-xl hover:bg-gray-100 p-2  hover:dark:bg-gray-700">Projects</li>
                </ul>
                <div className="font-semibold text-gray-700 dark:text-white">Dashboards</div>
                <ul>
                    <li className="rounded-xl bg-gray-100 hover:bg-gray-100 dark:bg-gray-700 p-2">
                        <a className="inline-flex justify-center  ">
                            <Image src={"/icons/arrow-1.png"} alt="" className="m-2" width={5} height={5} />
                            <Image src={"/icons/ChartPieSlice.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                            <Image src={"/icons/d-default.png"} alt="" className="mr-2 dark:block hidden" width={20} height={8} />
                            Default
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex ">
                            <Image src={"/icons/arrow-1.png"} alt="" className="m-2" width={5} height={5} />
                            <Image src={"/icons/eCommerce.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                            <Image src={"/icons/d-ecommerce.png"} alt="" className="mr-2 hidden dark:block" width={20} height={8} />
                            eCommerce
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex ">
                            <Image src={"/icons/arrow-1.png"} alt="" className="m-2" width={5} height={5} />
                            <Image src={"/icons/folder.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                            <Image src={"/icons/d-folder.png"} alt="" className="mr-2 hidden dark:block" width={20} height={8} />
                            Projects
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex ">
                            <Image src={"/icons/arrow-1.png"} alt="" className="m-2" width={5} height={5} />
                            <Image src={"/icons/BookOpen.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                            <Image src={"/icons/d-openbook.png"} alt="" className="mr-2 hidden dark:block" width={20} height={8} />
                            Online Courses
                        </a>
                    </li>

                    <div className="pt-4 font-semibold text-gray-700 dark:text-white">Pages</div>
                    <ul>
                        <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2 ">
                            <a className="inline-flex justify-center">
                                <Image src={"/icons/arrow-down.png"} alt="" className="m-2" width={8} height={5} />
                                <Image src={"/icons/user-profile.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                                <Image src={"/icons/d-use-profile.png"} alt="" className="mr-2 hidden dark:block" width={20} height={8} />
                                User Profile
                            </a>
                        </li>

                        <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2 ">
                            <a className="inline-flex ml-12">
                                Overview
                            </a>
                        </li>
                        <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2 ">
                            <a className="inline-flex ml-12">
                                Projects
                            </a>
                        </li>
                        <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2 ">
                            <a className="inline-flex ml-12">
                                Campaigns
                            </a>
                        </li>
                        <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2 ">
                            <a className="inline-flex ml-12">
                                Documents
                            </a>
                        </li>
                        <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2 ">
                            <a className="inline-flex ml-12">
                                Flowers
                            </a>
                        </li>
                    </ul>

                    <li className="rounded-xl hover:bg-gray-100 p-2 hover:dark:bg-gray-700 ">
                        <a className="inline-flex">
                            <Image src={"/icons/arrow-1.png"} alt="" className="m-2" width={5} height={5} />
                            <Image src={"/icons/phonebook.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                            <Image src={"/icons/d-phone-book.png"} alt="" className="mr-2 my-1 hidden dark:block" width={20} height={8} />
                            Accounts
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 p-2 hover:dark:bg-gray-700 ">
                        <a className="inline-flex">
                            <Image src={"/icons/arrow-1.png"} alt="" className="m-2" width={5} height={5} />
                            <Image src={"/icons/group.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                            <Image src={"/icons/d-group.png"} alt="" className="mr-2 my-1 hidden dark:block" width={20} height={8} />
                            Corporate
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 p-2 hover:dark:bg-gray-700 ">
                        <a className="inline-flex">
                            <Image src={"/icons/arrow-1.png"} alt="" className="m-2" width={5} height={5} />
                            <Image src={"/icons/Notebook.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                            <Image src={"/icons/d-Notebook.png"} alt="" className="mr-2 my-1 hidden dark:block" width={20} height={8} />
                            Blog
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 p-2 hover:dark:bg-gray-700 ">
                        <a className="inline-flex">
                            <Image src={"/icons/arrow-1.png"} alt="" className="m-2" width={5} height={5} />
                            <Image src={"/icons/chat.png"} alt="" className="mr-2 dark:hidden" width={20} height={8} />
                            <Image src={"/icons/d-chat.png"} alt="" className="mr-2 my-1 hidden dark:block" width={20} height={8} />
                            Social
                        </a>
                    </li>
                </ul>
            </nav>
        </>


    )
}