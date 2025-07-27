"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import AppointmentStatusChart from "./DonutChart";

export default function Dashboard() {
  const [stats] = useState([
    {
      title: "Today's Appointments",
      value: "10",
      percentage: "+12%",
      isPositive: true,
      icon: CalendarDaysIcon,
    },
    {
      title: "Avg. Appointment Duration",
      value: "3h 20m",
      percentage: "-13%",
      isPositive: false,
      icon: ClockIcon,
    },
    {
      title: "Missed Appointments",
      value: "7",
      percentage: "+5%",
      isPositive: true,
      icon: XCircleIcon,
    },
    {
      title: "Time Saved with AI",
      value: "20m",
      percentage: "+110%",
      isPositive: true,
      icon: BrainIcon,
    },
  ]);

  const [appointments] = useState([
    {
      name: "Mahmud Rahman Talukder",
      email: "mahmud.uiuxdesign@gamil.com",
      gender: "Male",
      reason: "Fever",
      lastVisit: "07-01-2024",
    },
    {
      name: "Mahmud",
      email: "mahmud.uiuxdesign@gamil.com",
      gender: "Female",
      reason: "Cholera",
      lastVisit: "07-01-2024",
    },
    {
      name: "Mahmud",
      email: "mahmud.uiuxdesign@gamil.com",
      gender: "Female",
      reason: "Jaundice",
      lastVisit: "07-01-2024",
    },
    {
      name: "Mahmud",
      email: "mahmud.uiuxdesign@gamil.com",
      gender: "Male",
      reason: "Typhoid",
      lastVisit: "07-01-2024",
    },
  ]);

  const [activities] = useState([
    {
      name: "Emma Wilson",
      time: "09:00 PM",
      doctor: "Dr. Moule Marrk",
      status: "check-in",
    },
    {
      name: "Emma Wilson",
      time: "09:00 PM",
      doctor: "Dr. Moule Marrk",
      status: "details",
    },
    {
      name: "Emma Wilson",
      time: "09:00 PM",
      doctor: "Dr. Moule Marrk",
      status: "details",
    },
  ]);

  const [peakHoursData] = useState([
    { name: "10 AM", appointments: 17 },
    { name: "11 AM", appointments: 21 },
    { name: "12 PM", appointments: 30 },
    { name: "1 PM", appointments: 14 },
    { name: "2 PM", appointments: 12 },
    { name: "3 PM", appointments: 9 },
    { name: "4 PM", appointments: 25 },
    { name: "5 PM", appointments: 5 },
    { name: "6 PM", appointments: 2 },
    { name: "7 PM", appointments: 1 },
  ]);

  const [appointmentStatusData] = useState([
    { name: "New", value: 40 },
    { name: "Completed", value: 75 },
    { name: "Canceled", value: 10 },
  ]);

  const PIE_COLORS = ["#3B82F6", "#BFDBFE", "#60A5FA"];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.isPositive ? "text-green-500" : "text-red-500"} flex items-center`}>
                {stat.isPositive ? (
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                )}
                {stat.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Appointments Table */}
        <div className="bg-white rounded-lg border shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">Appointments</h2>
            <button className="text-sm text-blue-600 hover:underline">View all</button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patients Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gender
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Visit Reason
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Visit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">
                            {appointment.name.charAt(0)}
                          </div>
                          <div className="ml-2 font-medium">{appointment.name}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {appointment.email}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {appointment.gender}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {appointment.reason}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {appointment.lastVisit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Today's Activity */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">Today's Activity</h2>
            <button className="text-sm text-blue-600 hover:underline">View all</button>
          </div>
          <div className="p-6 space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-3 border-b last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{activity.name}</p>
                  <p className="text-sm text-gray-500">
                    {activity.time} - {activity.doctor}
                  </p>
                </div>
                {activity.status === "check-in" ? (
                  <button className="px-3 py-1 text-sm border border-yellow-200 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200">
                    Check In
                  </button>
                ) : (
                  <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
                    Details
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hours Chart */}
        <div className="bg-white rounded-lg border shadow-sm lg:col-span-2">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Peak Hours</h2>
            <p className="text-sm text-gray-500 mt-1">
              This graph displays the number of appointment peak hour.
            </p>
          </div>
          <div className="p-6">
            <div className="h-[300px] relative">
              <ResponsiveContainer width="100%" height="100%" className="absolute inset-0">
                <BarChart data={peakHoursData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Bar dataKey="appointments" fill="#2E8BC9" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
  <AppointmentStatusChart/>
        {/* Appointment Status Pie Chart */}


      </div>
    </div>
  );
}

// Icon Components
function CalendarDaysIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function XCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}