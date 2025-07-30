"use client"
import { useState } from 'react';
import { Stethoscope, Mail, Phone, Edit, CalendarDays, Clock, Plus, X, Info } from 'lucide-react';

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('availability');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const availabilityData = [
    { day: "Sunday", start: "11:45 AM", end: "4:30 PM" },
    { day: "Monday", start: "Not Selected", end: "Not Selected" },
    // ... rest of the days
  ];

  const availableSlotsSunday = [
    { start: "11:45 AM", end: "4:30 PM" },
    { start: "6:20 PM", end: "10:05 PM" },
    // ... rest of the slots
  ];

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Top Section: Profile and Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200">
            <img
              src="/placeholder.svg?height=128&width=128"
              alt="Dr. Mahmudur Rahman"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-600">
              DR
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold mb-2">Dr. Mahmudur Rahman</h1>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Stethoscope className="w-4 h-4 text-gray-500" />
                <span>Doctor ID : P6Q7R8</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>Email : omahmuudur9@gmail.com</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>Mobile : +8801770504877</span>
              </p>
            </div>
            <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1.5 rounded-md">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </button>
          </div>
        </div>

        {/* Appointment Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center">
            <div className="pb-2">
              <CalendarDays className="w-8 h-8 text-blue-500 mx-auto" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Today</h3>
              <p className="text-4xl font-bold mt-2">10</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center">
            <div className="pb-2">
              <CalendarDays className="w-8 h-8 text-blue-500 mx-auto" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Total</h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <p className="text-4xl font-bold">7</p>
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Tabs and Availability Management */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Tabs */}
        <div className="flex mb-6">
          <div className="flex space-x-1 rounded-lg bg-gray-100 p-1 max-w-md">
            <button
              onClick={() => setActiveTab('all-appointment')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'all-appointment' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'}`}
            >
              All Appointment
            </button>
            <button
              onClick={() => setActiveTab('all-patients')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'all-patients' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'}`}
            >
              All Patients
            </button>
            <button
              onClick={() => setActiveTab('availability')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'availability' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'}`}
            >
              Availability
            </button>
          </div>
        </div>

        {activeTab === 'availability' && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Manage Availability</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Availability Table */}
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 p-4 font-medium text-gray-700 border-b">
                  <div>Day</div>
                  <div>Start</div>
                  <div>End</div>
                </div>
                {availabilityData.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 p-4 text-sm ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } ${index === 0 ? "font-semibold text-gray-800" : ""}`}
                  >
                    <div>{item.day}</div>
                    <div>{item.start}</div>
                    <div>{item.end}</div>
                  </div>
                ))}
              </div>

              {/* Right Column: Available Slot Management */}
              <div className="space-y-6 p-4 border rounded-lg bg-white">
                <h4 className="text-lg font-semibold">Available Slot Sunday</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Time
                    </label>
                    <div className="relative">
                      <input
                        id="start-time"
                        type="text"
                        placeholder="4:30 AM"
                        className="block w-full pl-8 pr-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                      <Clock className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Info className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 mb-1">
                      End Time
                    </label>
                    <div className="relative">
                      <input
                        id="end-time"
                        type="text"
                        placeholder="4:30 PM"
                        className="block w-full pl-8 pr-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                      <Clock className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Info className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {availableSlotsSunday.map((slot, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <button className="flex-1 flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50">
                        {slot.start} <X className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="flex-1 flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50">
                        {slot.end} <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New
                </button>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm">
                  Save Change
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}