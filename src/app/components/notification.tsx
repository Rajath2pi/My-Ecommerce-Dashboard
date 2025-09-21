import Image from "next/image"

export default function NotificationComponent() {

    return (
        <>
            <div className="dark:text-white">
                <div className="text-lg font-semibold mb-2">Notifications</div>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-white">
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/icons/bug.png"} alt="" className="w-8 h-8 m-2 p-2 rounded-md bg-[#E3F5FF]" width={15} height={3} />
                            {"You have a bug that needs to be fixed.".slice(0, 25) + "..."}<br></br>59 minutes ago
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/icons/User.png"} alt="" className="w-8 h-8 m-2 p-2 rounded-md bg-[#E3F5FF]" width={15} height={3} />
                            {"New user registered.".slice(0, 25) + "..."}<br></br>12 hours ago
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/icons/bug.png"} alt="" className="w-8 h-8 m-2 p-2 rounded-md bg-[#E3F5FF]" width={15} height={3} />
                            {"You have a bug that needs to be fixed.".slice(0, 25) + "..."}<br></br>59 minutes ago
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/icons/network.png"} alt="" className="w-8 h-8 m-2 p-2 rounded-md bg-[#E3F5FF]" width={15} height={3} />
                            {"Andi Lane subscribed to you.".slice(0, 25) + "..."}<br></br>Today, 11:59 AM
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="text-lg font-semibold mb-2">Activities</div>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-white">
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-1.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            {"You have a bug that needs to be fixed.".slice(0, 25) + "..."}<br></br>Just now
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-2.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            {"Released a new version".slice(0, 25) + "..."}<br></br>59 minutes ago
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-3.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            {"Submitted a bug.".slice(0, 25) + "..."}<br></br>12 hours ago
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-4.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            {"Modified A data in Page X.".slice(0, 25) + "..."}<br></br>Today, 11:59 AM
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-1.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            {"Deleted a page in Project X".slice(0, 25) + "..."}<br></br>Today, 11:59 AM
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="text-lg font-semibold mb-2">Contacts</div>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-white">
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-1.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            <span className="my-auto">Drew Cano</span>
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-2.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            <span className="my-auto">Orlando Diggs</span>
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-3.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            <span className="my-auto">Kate Morrison</span>
                        </a>
                    </li>
                    <li className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                        <a className="inline-flex">
                            <Image src={"/images/dp-4.png"} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                            <span className="my-auto">Andi Lane</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}