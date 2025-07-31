import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { pieData, stats } from '../data'

export default function PieChartComponent() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-6">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white rounded-xl shadow-sm">

                <div className="col-span-1 bg-white flex flex-col items-center mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-center">
                        New patients vs Old patients
                    </h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart width={400} height={600}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={150}
                                dataKey="value"
                                label={({ percent }) => percent ? `${(percent * 100).toFixed(0)}%` : ''}
                                labelLine={true}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="bg-blue-50 mt-6 px-4 py-2 rounded-lg w-48 text-sm font-medium text-gray-700">
                        {pieData.map((item, i) => (
                            <div key={i} className="flex justify-between items-center mb-1">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    ></span>
                                    {item.name}
                                </div>
                                <span className="font-semibold">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {stats.map((card, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-start p-4 bg-gray-50 rounded-xl shadow-sm"
                        >
                            <div className="flex gap-3">
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg ${card.iconBg}`}
                                >
                                    {card.icon}
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">
                                        {card.label}
                                    </div>
                                    <div className="text-xl font-semibold">
                                        {card.value}
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`text-sm px-2 py-0.5 rounded-full font-medium ${card.positive
                                    ? "text-green-600 bg-green-100"
                                    : "text-red-600 bg-red-100"
                                    }`}
                            >
                                {card.change}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-start mt-8 bg-white rounded-lg p-2">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Patient Flow</h2>
                    <p className="text-sm text-gray-500">
                        This graph displays the number of Patient in Wellbyn.
                    </p>
                </div>
                <select className="text-sm border rounded-lg px-3 py-1.5 text-gray-700">
                    <option>Yearly</option>
                    <option>Monthly</option>
                </select>
            </div>
        </div>
    )
}
