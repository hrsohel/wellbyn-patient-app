"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

export default function AppointmentReschedule() {
  const [selectedDate, setSelectedDate] = useState(11)
  const [selectedTime, setSelectedTime] = useState("2:25 PM")

  const timeSlots = ["11:45 AM", "2:25 PM", "4:30 AM", "6:20 PM", "10:05 PM", "7:00 AM", "1:55 AM"]

  const calendarDays = [
    { day: "Fr", date: 1 },
    { day: "Sa", date: 2 },
    { day: "Su", date: 3 },
    { day: "Mo", date: 4 },
    { day: "Tu", date: 5 },
    { day: "We", date: 6 },
    { day: "Th", date: 7 },
    { day: "Fr", date: 8 },
    { day: "Sa", date: 9 },
    { day: "Su", date: 10 },
    { day: "Mo", date: 11 },
    { day: "Tu", date: 12 },
  ]

  return (
    <div className="max-w-2/4 mx-auto bg-white min-h-screen p-4">
      {/* Patient Section */}
      <div className="mb-6">
        <h2 className="text-gray-600 text-sm mb-3">Patients</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-medium">Ma</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Mahmudur Rahman</h3>
              <p className="text-sm text-gray-500">Patient ID: P002704</p>
            </div>
          </div>
          <button className="p-2 text-blue-500 rounded-full hover:bg-gray-100">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Doctor Section */}
      <div className="mb-8">
        <h2 className="text-gray-600 text-sm mb-3">Doctor</h2>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {/* Placeholder for doctor image */}
            <span className="text-gray-600">DM</span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Dr. Moule Marrk</h3>
            <p className="text-sm text-gray-500">Cardiologist</p>
            <p className="text-sm text-gray-500">@ Sylhet Health Center</p>
          </div>
        </div>
      </div>

      {/* Date Selection */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Select your date</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ChevronLeft className="w-4 h-4" />
              <span>Feb 2025</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {calendarDays.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-500 mb-1">{day.day}</div>
                <button
                  onClick={() => setSelectedDate(day.date)}
                  className={`w-14 h-6 text-sm rounded-md transition-colors ${
                    selectedDate === day.date ? "bg-[#2E8BC9] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {day.date}
                </button>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-5 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  selectedTime === time 
                    ? "bg-[#2E8BC9] text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reschedule Button */}
      <button className="w-full bg-[#2E8BC9] hover:bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center">
        <span className="mr-2">🔄</span>
        Reschedule
      </button>
    </div>
  )
}