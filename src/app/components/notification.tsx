import Image from "next/image"

export default function NotificationComponent() {

    const notifications = [
        { notificationType: "You have a bug that needs to be fixed.", icon: "/icons/bug.png", time: "59 minutes ago" },
        { notificationType: "New user registered.", icon: "/icons/User.png", time: "12 hours ago" },
        { notificationType: "You have a bug that needs to be fixed.", icon: "/icons/bug.png", time: "18 minutes ago" },
        { notificationType: "Andi Lane subscribed to you.", icon: "/icons/network.png", time: "Today, 11:59 AM" }
    ]

    const activities = [
        { activitiesType: "Released a new version", icon: "/images/dp-1.png", time: "59 minutes ago" },
        { activitiesType: "Submitted a bug.", icon: "/images/dp-2.png", time: "12 hours ago" },
        { activitiesType: "Modified A data in Page X.", icon: "/images/dp-3.png", time: "18 minutes ago" },
        { activitiesType: "Deleted a page in Project X", icon: "/images/dp-3.png", time: "Today, 11:59 AM" }
    ]

    const contact = [
        { contactName: "Gurucharan", icon: "/images/dp-1.png" },
        { contactName: "Shailesh", icon: "/images/dp-2.png" },
        { contactName: "Sharath", icon: "/images/dp-3.png" },
        { contactName: "Vaibhav", icon: "/images/dp-4.png" },
    ]
    return (
        <>
            <div className="dark:text-white">
                <div className="text-lg font-semibold mb-2">Notifications</div>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-white">
                    {notifications.map((not, index) => (
                        <li key={"notification_"+index} className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                            <a className="inline-flex">
                                <Image src={not.icon} alt="" className="w-8 h-8 m-2 p-2 rounded-md bg-[#E3F5FF]" width={15} height={3} />
                                {not.notificationType.slice(0, 25) + "..."}<br></br>{not.time}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="text-lg font-semibold mb-2">Activities</div>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-white">
                    {activities.map((act, ind) =>
                        <li key={"activity_"+ind} className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                            <a className="inline-flex">
                                <Image src={act.icon} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                                {act.activitiesType.slice(0, 25) + "..."}<br></br>{act.time}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <div className="text-lg font-semibold mb-2">Contacts</div>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-white">
                    {contact.map((con, ind) => (
                        <li key={"contact_"+ind} className="rounded-xl hover:bg-gray-100 hover:dark:bg-gray-700 p-2">
                            <a className="inline-flex">
                                <Image src={con.icon} alt="" className="w-8 h-8 m-2 rounded-full bg-[#E3F5FF]" width={15} height={3} />
                                <span className="my-auto">{con.contactName}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}