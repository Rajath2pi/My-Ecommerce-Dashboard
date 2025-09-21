"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Menu } from "lucide-react";
import { Fragment } from "react";

import Image from "next/image";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";
import ProjectionsVsActuals from "@/components/bar-graph";
import RevenueByLocation from "@/components/revenue-locations";
import SideBar from "../components/sidebar";
import DonutChart from "@/components/pi-chart";
import NotificationComponent from "../components/notification";

const revenueData = [
    { name: "Jan", current: 10, previous: 12 },
    { name: "Feb", current: 15, previous: 18 },
    { name: "Mar", current: 20, previous: 19 },
    { name: "Apr", current: 18, previous: 22 },
    { name: "May", current: 25, previous: 26 },
    { name: "Jun", current: 30, previous: 28 },
];

const salesData = [
    { name: "Direct", value: 500 },
    { name: "Affiliate", value: 150 },
    { name: "Sponsored", value: 100 },
    { name: "Email", value: 50 },
];

const COLORS = ["#6366F1", "#22C55E", "#F59E0B", "#EF4444"];

export default function Dashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const chartData = [75, 15, 10]; // Example data: 75% positive, 15% negative, 10% neutral
    const total = chartData.reduce((sum, val) => sum + val, 0);
    const positivePercentage = (chartData[0] / total) * 100;

    return (

        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold dark:text-white">eCommerce</h1>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    {[
                        { title: "Customers", value: "3,781", change: "+11.01%", bgL: "bg-[#E3F5FF]", bgD: "bg-[#E3F5FF]" },
                        { title: "Orders", value: "1,219", change: "-0.33%", bgL: "bg-gray-200", bgD: "bg-gray-800" },
                        { title: "Revenue", value: "$695", change: "+15.03%", bgL: "bg-gray-200", bgD: "bg-gray-800" },
                        { title: "Growth", value: "30.1%", change: "+6.08%", bgL: "bg-[#E3F5FF]", bgD: "bg-[#E3F5FF]" },
                    ].map((stat) => (
                        <Card key={stat.title} className={stat.bgL + " dark:" + stat.bgD + " max-h-28"}>
                            <CardContent className="dark:hidden">
                                <div className={"text-md font-bold text-sm dark:text-black"}>{stat.title}</div>
                                <div className="text-xl md:flex justify-between ">
                                    <span className="font-bold dark:text-black">
                                        {stat.value}
                                    </span>
                                    <span className={`text-sm my-2 flex justify-center dark:text-black`}>
                                        {stat.change}
                                        <Image src={"/icons/" + (stat.change.includes('-') ? "ecom-arrow-1.png" : "ecom-arrow-2.png")} alt="ecom-arrow" className="w-3 h-3 m-1" width={5} height={5} />
                                    </span>
                                </div>
                            </CardContent>
                            <CardContent className="hidden dark:block">
                                <div className={`text-md font-bold text-sm ${stat.bgD === "bg-[#E3F5FF]" ? "text-black" : "dark:text-white"}`}>{stat.title}</div>
                                <div className="text-xl md:flex justify-between ">
                                    <span className={`font-bold ${stat.bgD === "bg-[#E3F5FF]" ? "text-black" : "dark:text-white"}`}>
                                        {stat.value}
                                    </span>
                                    <span className={`text-sm my-2 flex justify-center ${stat.bgD === "bg-[#E3F5FF]" ? "text-black" : "dark:text-white"}`}>
                                        {stat.change}
                                        <Image src={"/icons/" + (stat.change.includes('-') ? "ecom-arrow-1.png" : "ecom-arrow-2.png")} alt="ecom-arrow" className="w-3 h-3 m-1" width={5} height={5} />
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <ProjectionsVsActuals />
            </div>


            {/* Charts & Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <Card className="lg:col-span-2 bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                        <div className="text-lg font-semibold mb-4">Revenue</div>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="80%">
                                <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="current" stroke="#6366F1" strokeWidth={2} />
                                    <Line type="monotone" dataKey="previous" stroke="#94A3B8" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Revenue by Location */}
                <RevenueByLocation />
            </div>

            {/* Product Table + Sales Pie */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Product Table */}
                <Card className="lg:col-span-2 overflow-x-scroll md:overflow-hidden bg-white dark:bg-gray-800">
                    <CardContent className="p-2">
                        <div className="text-lg font-semibold mb-4">Top Selling Products</div>
                        <table className="w-full text-left dark:text-gray-200 min-w-[500px]">
                            <thead className="dark:text-gray-500">
                                <tr>
                                    <th className="pb-2">Name</th>
                                    <th className="pb-2">Price</th>
                                    <th className="pb-2">Quantity</th>
                                    <th className="pb-2">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="border-t border-gray-500 leading-10">
                                <tr><td>ASOS Ridley High Waist</td><td>$79.49</td><td>82</td><td>$6,518.18</td></tr>
                                <tr><td>Marco Lightweight Shirt</td><td>$128.50</td><td>37</td><td>$4,754.50</td></tr>
                                <tr><td>Half Sleeve Shirt</td><td>$39.99</td><td>64</td><td>$2,559.36</td></tr>
                                <tr><td>Lightweight Jacket</td><td>$20.00</td><td>184</td><td>$3,680.00</td></tr>
                                <tr><td>Marco Shoes</td><td>$79.49</td><td>64</td><td>$1,965.81</td></tr>
                            </tbody>
                        </table>
                    </CardContent>
                </Card>

                {/* Sales Pie */}
                <Card>
                    <CardContent className="">
                        <div className="text-lg font-semibold mb-4">Total Sales</div>
                        {/* <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={salesData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        dataKey="value"
                                        label
                                    >
                                        {salesData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer> */}
                        <div className="text-white">
                            <DonutChart data={chartData} />
                        </div>
                        <ul className="leading-10 p-5">
                            <li className="flex justify-between"><span>Direct</span> <span>$300.56</span></li>
                            <li className="flex justify-between"><span>Affilliate</span> <span>$135.56</span></li>
                            <li className="flex justify-between"><span>Sponsored</span> <span>$154.56</span></li>
                            <li className="flex justify-between"><span>E-mail</span> <span>$48.56</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
