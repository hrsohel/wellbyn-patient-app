import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { barData } from '../data'

export default function BarChartComponent() {
    return (
        <div>
            <div className="w-full h-[500px] bg-white rounded-b-md">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend
                            verticalAlign="top"
                            align="center"
                            iconType="circle"
                            wrapperStyle={{ paddingTop: 10 }}
                        />
                        <Bar dataKey="newUser" name="New User" fill="#3498db" radius={[4, 4, 0, 0]} barSize={25} />
                        <Bar dataKey="oldUser" name="Old User" fill="#195A8A" radius={[4, 4, 0, 0]} barSize={25} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
