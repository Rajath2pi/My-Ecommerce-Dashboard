import React from 'react';
import Image from 'next/image';
import worldMap from '@/public/world-map.svg'; // Add a light world map SVG to public folder

const locations = [
  { name: 'New York', value: 72 },
  { name: 'San Francisco', value: 39 },
  { name: 'Sydney', value: 25 },
  { name: 'Singapore', value: 61 },
];

export default function RevenueByLocation() {
  return (
    <div className="bg-white dark:bg-gray-900 shadow rounded-2xl p-4 flex flex-col items-center">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Revenue by Location</h2>
      <div className="w-full flex justify-center">
        <Image src={'/images/revenue_location_map.png'} width={200} height={100} alt="World Map" className="opacity-80" />
      </div>
      <div className="space-y-3 w-full">
        {locations.map((loc) => (
          <div key={loc.name}>
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>{loc.name}</span>
              <span>{loc.value}K</span>
            </div>
            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                className="h-1 bg-blue-300 dark:bg-blue-500 rounded-full"
                style={{ width: `${loc.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
