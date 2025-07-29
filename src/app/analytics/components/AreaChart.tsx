import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { data } from '../data'

export default function AreaChartComponent() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto mt-8">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Appointment</h2>
                    <p className="text-sm text-gray-500">
                        This graph displays the number of appointment in Wellbyn.
                    </p>
                </div>
                <select className="border rounded px-2 py-1 text-sm text-gray-700">
                    <option>Weekly</option>
                    <option>Monthly</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 400]} tickFormatter={(val) => `${val}%`} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3B82F6"
                        fillOpacity={1}
                        fill="url(#colorBlue)"
                        dot={{ r: 4, stroke: "#3B82F6", strokeWidth: 2, fill: "white" }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
