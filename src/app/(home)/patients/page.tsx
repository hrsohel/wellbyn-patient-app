"use client"

import { useState } from "react";
import { Calendar, Clock, Plus, UserCheck, Eye, Stethoscope, Play } from "lucide-react";

interface Appointment {
  id: number;
  patientName: string;
  patientId: string;
  date: string;
  time: string;
  status: "scheduled" | "ready";
  showCheckIn: boolean;
  showPreVisit: boolean;
}

export default function AppointmentScheduler() {
  const [appointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: "Mahmudur Rahman",
      patientId: "P#07#8",
      date: "May 18, 2025",
      time: "10:30 PM",
      status: "scheduled",
      showCheckIn: true,
      showPreVisit: true,
    },
    // ... rest of your appointments data
  ]);

  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedId, setSelectedId] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Tabs */}
        <div className="flex mb-6">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:border-gray-300">
            View As Doctor
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            View As Patients
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-semibold text-gray-900">Appointment</h1>
              <p className="text-sm text-gray-500 mt-1">Total: 1,200</p>
            </div>
            <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </button>
          </div>

          {/* Filters */}
          <div className="p-6 border-b bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Patients Name Select */}
              <div className="relative">
                <select
                  value={selectedPatient}
                  onChange={(e) => setSelectedPatient(e.target.value)}
                  className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Patients Name</option>
                  <option value="mahmudur">Mahmudur Rahman</option>
                  <option value="john">John Doe</option>
                  <option value="jane">Jane Smith</option>
                </select>
              </div>

              {/* Date Select */}
              <div className="relative">
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Date</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="this-week">This Week</option>
                </select>
              </div>

              {/* ID Select */}
              <div className="relative">
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">ID</option>
                  <option value="p0708">P#07#8</option>
                  <option value="p0709">P#07#9</option>
                  <option value="p0710">P#07#10</option>
                </select>
              </div>
            </div>
          </div>

          {/* Appointments Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <div className="p-6">
                    {/* Patient Info */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                        Ma
                      </div>
                      <div className="ml-3 flex-1">
                        <h3 className="font-semibold text-gray-900">{appointment.patientName}</h3>
                        <p className="text-sm text-gray-500">Patient ID: {appointment.patientId}</p>
                      </div>
                      <button className="p-1 text-blue-600 hover:text-blue-700 rounded-md hover:bg-gray-100">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Date & Time */}
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Date & Time</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{appointment.date}</span>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          {appointment.time}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      {appointment.showCheckIn && (
                        <div className="flex gap-2">
                          <button className="flex-1 flex items-center justify-center px-4 py-2 border border-orange-200 text-orange-600 rounded-md hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <UserCheck className="w-4 h-4 mr-2" />
                            Check In
                          </button>
                          <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <Stethoscope className="w-4 h-4 mr-2" />
                            Pre-Visit
                          </button>
                        </div>
                      )}

                      {appointment.showPreVisit && !appointment.showCheckIn && (
                        <div className="flex gap-2">
                          <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </button>
                          <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <Stethoscope className="w-4 h-4 mr-2" />
                            Pre-Visit
                          </button>
                        </div>
                      )}

                      {!appointment.showCheckIn && !appointment.showPreVisit && (
                        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </button>
                      )}

                      <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <Play className="w-4 h-4 mr-2" />
                        Start Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}