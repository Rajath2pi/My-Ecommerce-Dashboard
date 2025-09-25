import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const projectionData = [
  { month: 'Jan', projections: 22, actuals: 20 },
  { month: 'Feb', projections: 25, actuals: 23 },
  { month: 'Mar', projections: 26, actuals: 21 },
  { month: 'Apr', projections: 28, actuals: 27 },
  { month: 'May', projections: 20, actuals: 18 },
  { month: 'Jun', projections: 27, actuals: 24 },
];

export default function ProjectionsVsActuals() {
  return (
    <div className="bg-white dark:bg-gray-900 shadow rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Projections vs Actuals</h2>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart
          data={projectionData}
          barSize={20}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="2 2" stroke="#E5E7EB" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
          <Bar dataKey="projections" fill="#A8C5DA" stackId="a" />
          <Bar dataKey="actuals" fill="#E5ECF6" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
