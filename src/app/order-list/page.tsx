"use client"
import Image from "next/image"
import MyRadioButton from "../components/radio-button"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

interface Order {
    id: string;
    user: string;
    avatar: string;
    project: string;
    address: string;
    date: string;
    status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

const orders: Order[] = [
    {
        id: "#CM9801",
        user: "Natali Craig",
        avatar: "https://i.pravatar.cc/150?img=1",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Progress",
    },
    {
        id: "#CM9802",
        user: "Kate Morrison",
        avatar: "https://i.pravatar.cc/150?img=2",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
    },
    {
        id: "#CM9803",
        user: "Drew Cano",
        avatar: "https://i.pravatar.cc/150?img=3",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
    },
    {
        id: "#CM9804",
        user: "Orlando Diggs",
        avatar: "https://i.pravatar.cc/150?img=4",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
    },
    {
        id: "#CM9805",
        user: "Andi Lane",
        avatar: "https://i.pravatar.cc/150?img=5",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
    },
];

export default function OrderList() {

    const [selected, setSelected] = useState<string[]>([]);

    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
    const [filterStatus, setFilterStatus] = useState<Order["status"] | "All">("All");
    const [searchTerm, setSearchTerm] = useState("");


    const [filterOpen, setFilterOpen] = useState(false);


    const toggleSelect = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        );
    };

    const getStatusColor = (status: Order["status"]) => {
        switch (status) {
            case "In Progress":
                return "text-blue-400";
            case "Complete":
                return "text-green-400";
            case "Pending":
                return "text-yellow-400";
            case "Approved":
                return "text-purple-400";
            case "Rejected":
                return "text-gray-400";
        }
    };



    const handleFilterChange = (status: Order["status"] | "All") => {
        setFilterStatus(status);
        setFilterOpen(false);
    };
    
    const handleSortToggle = () => {
        setSortOrder((prev) => (prev === "asc" ? "desc" : prev === "desc" ? null : "asc"));
    };

    const filteredOrders = useMemo(() => {
        return orders
            .filter((order) => {
                const matchesSearch =
                    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    order.address.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesStatus =
                    filterStatus === "All" || order.status === filterStatus;
                return matchesSearch && matchesStatus;
            })
            .sort((a, b) => {
                const valA = a["user"];
                const valB = b["user"];

                if (typeof valA === "string" && typeof valB === "string") {
                    return sortOrder === "asc"
                        ? valA.localeCompare(valB)
                        : valB.localeCompare(valA);
                }
                return 0;
            });
    }, [searchTerm, filterStatus, "user", sortOrder]);

    return (
        <>
            <h1>Order List</h1>
            <div className="flex justify-between dark:bg-gray-800 p-2 bg-gray-200 rounded-md relative">
                <div className="flex justify-between items-center space-x-6 pl-6 dark:pl-0">
                    {/* Add */}
                    <Image src={"/icons/add.png"} alt="add" className="w-4 h-4 dark:hidden" width={20} height={20} />
                    <Image src={"/icons/d-add-icon.png"} alt="add" className="w-4 h-4 hidden dark:block" width={20} height={20} />

                    {/* Filter */}
                    <div className="relative">
                        <Image
                            src={"/icons/filter.png"}
                            alt="filter"
                            className="w-6 h-4 dark:hidden cursor-pointer"
                            width={20}
                            height={20}
                            onClick={() => setFilterOpen((prev) => !prev)}
                        />
                        <Image
                            src={"/icons/d-filter.png"}
                            alt="filter"
                            className="w-6 h-4 hidden dark:block cursor-pointer"
                            width={20}
                            height={20}
                            onClick={() => setFilterOpen((prev) => !prev)}
                        />
                        {filterOpen && (
                            <div className="absolute left-0 mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10">
                                {["All", "In Progress", "Complete", "Pending", "Approved", "Rejected"].map((status) => (
                                    <div
                                        key={status}
                                        className="px-4 py-2 hover:bg-gray-100 hover:dark:bg-gray-800 cursor-pointer"
                                        onClick={() => handleFilterChange(status as Order["status"] | "All")}
                                    >
                                        {status}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sort */}
                    <Image
                        src={"/icons/sort.png"}
                        alt="sort"
                        className="w-4 h-4 dark:hidden cursor-pointer"
                        width={20}
                        height={20}
                        onClick={handleSortToggle}
                    />
                    <Image
                        src={"/icons/d-sort.png"}
                        alt="sort"
                        className="w-4 h-4 hidden dark:block cursor-pointer"
                        width={20}
                        height={20}
                        onClick={handleSortToggle}
                    />
                </div>

                {/* Search */}
                <div className="flex items-center space-x-2 border-2 border-solid dark:border-gray-600 border-gray-300 rounded-md p-1">
                    <Image
                        src={"/icons/search-icon.png"}
                        alt=""
                        className="w-5 h-5 dark:hidden"
                        width={20}
                        height={20}
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent placeholder-gray-400 p-0 m-0 focus:outline-none focus:ring-0 focus:border-transparent"
                    />
                </div>
            </div>
            <div className="min-h-screen p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-left text-gray-400 border-b-2 border-gray-300">
                            <tr>
                                <th className="px-4">
                                    <input type="checkbox" className="accent-black dark:accent-[#C6C7F8]" />
                                </th>
                                <th className="px-4">Order ID</th>
                                <th className="px-4">User</th>
                                <th className="px-4">Project</th>
                                <th className="px-4">Address</th>
                                <th className="px-4">Date</th>
                                <th className="px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-400">
                            {filteredOrders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors leading-4"
                                >
                                    <td className="px-4">
                                        <input
                                            type="checkbox"
                                            className="accent-black dark:accent-[#C6C7F8]"
                                            checked={selected.includes(order.id)}
                                            onChange={() => toggleSelect(order.id)}
                                        />
                                    </td>
                                    <td className="px-4">{order.id}</td>
                                    <td className="px-4 flex items-center gap-3">
                                        <img
                                            src={order.avatar}
                                            alt={order.user}
                                            className="w-8 h-8 my-2 rounded-full object-cover"
                                        />
                                        {order.user}
                                    </td>
                                    <td className="px-4">{order.project}</td>
                                    <td className="px-4">{order.address}</td>
                                    <td className="px-4">{order.date}</td>
                                    <td className={`px-4 font-medium ${getStatusColor(order.status)}`}>
                                        ● {order.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-end gap-2 mt-4">
                    <button className="p-2 rounded-lg dark:bg-black hover:dark:bg-neutral-700 hover:bg-gray-200">
                        <ChevronLeft size={18} />
                    </button>
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={`px-3 py-1 rounded-lg ${page === 1
                                ? "dark:bg-neutral-700 bg-gray-200 dark:text-white"
                                : "dark:bg-black hover:dark:bg-neutral-700 hover:bg-gray-200"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="p-2 rounded-lg hover:dark:bg-neutral-700 hover:bg-gray-200">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </>
    )
}