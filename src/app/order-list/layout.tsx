"use client"
import { useState } from "react";
import SideBar from "../components/sidebar";
import Image from "next/image";
import NotificationComponent from "../components/notification";
import { Menu } from "lucide-react";
import { useParams } from "next/navigation";

export default function OrderListLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [notificationBar, toggleNotificationBar] = useState(true)

    return (
        <>
            <div className="flex h-screen bg-gray-50">
                {/* Main Content */}
                <main className="flex-1 p-4 md:p-6 space-y-6 overflow-y-scroll scrollbar-hide w-full dark:bg-black">
                    {children}
                </main>
            </div>
        </>
    )
}