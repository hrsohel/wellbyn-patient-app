"use client"

import { useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

const doctors = [
  { id: "PG0758", name: "Rami Rahman Chowdhury", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "J0KIL2", name: "Tariq Rahman Chowdhury", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "VZW3X4", name: "Maya Rahman Chowdhury", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "D4ESF6", name: "Sami Rahman Chowdhury", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "MJH4O5", name: "Zara Rahman Chowdhury", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "S5TOU1", name: "Nashit Rahman Chowdh...", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "B8C900", name: "Fahim Rahman Chowdh...", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "C7H8I9", name: "Riya Rahman Chowdhury", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "Y5Z6A7", name: "Ayaan Rahman Chowdh...", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "E1F2G3", name: "Hadi Rahman Chowdhury", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "A1B2C3", name: "Sofia Elham Rahman", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "H4I5J6", name: "Lina Rahman Chowdhury", avatar: "/placeholder.svg?height=32&width=32" },
]

const calendarData = {
  "2025-02": {
    1: [{ type: "morning", slots: "10+", color: "blue" }],
    2: [
      { type: "afternoon", slots: "5+", color: "green" },
      { type: "evening", slots: "17+", color: "orange" },
    ],
    3: [{ type: "afternoon", slots: "5+", color: "green" }],
    4: [{ type: "evening", slots: "17+", color: "orange" }],
    5: [
      { type: "morning", slots: "10+", color: "blue" },
      { type: "evening", slots: "17+", color: "orange" },
    ],
    6: [{ type: "evening", slots: "17+", color: "orange" }],
    7: [{ type: "afternoon", slots: "5+", color: "green" }],
    8: [
      { type: "morning", slots: "10+", color: "blue" },
      { type: "afternoon", slots: "5+", color: "green" },
    ],
    9: [
      { type: "afternoon", slots: "5+", color: "green" },
      { type: "morning", slots: "12+", color: "blue" },
    ],
    10: [{ type: "evening", slots: "17+", color: "orange" }],
    11: [
      { type: "evening", slots: "17+", color: "orange" },
      { type: "afternoon", slots: "5+", color: "green" },
      { type: "morning", slots: "10+", color: "blue" },
    ],
    13: [{ type: "evening", slots: "17+", color: "orange" }],
    14: [
      { type: "morning", slots: "10+", color: "blue" },
      { type: "afternoon", slots: "5+", color: "green" },
      { type: "morning", slots: "10+", color: "blue" },
    ],
    15: [
      { type: "morning", slots: "12+", color: "blue" },
      { type: "afternoon", slots: "5+", color: "green" },
    ],
    16: [{ type: "evening", slots: "17+", color: "orange" }],
    17: [
      { type: "morning", slots: "10+", color: "blue" },
      { type: "afternoon", slots: "5+", color: "green" },
    ],
    18: [{ type: "morning", slots: "10+", color: "blue" }],
    19: [{ type: "morning", slots: "10+", color: "blue" }],
    20: [{ type: "afternoon", slots: "5+", color: "green" }],
    21: [{ type: "morning", slots: "10+", color: "blue" }],
    22: [{ type: "evening", slots: "17+", color: "orange" }],
    23: [{ type: "morning", slots: "10+", color: "blue" }],
    24: [{ type: "morning", slots: "10+", color: "blue" }],
    25: [{ type: "evening", slots: "17+", color: "orange" }],
    26: [
      { type: "morning", slots: "17+", color: "orange" },
      { type: "morning", slots: "10+", color: "blue" },
    ],
    27: [{ type: "morning", slots: "10+", color: "blue" }],
    28: [{ type: "morning", slots: "10+", color: "blue" }],
    29: [{ type: "morning", slots: "10+", color: "blue" }],
    30: [{ type: "evening", slots: "17+", color: "orange" }],
  },
}

// Rotated weekdays - changed order
const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function DoctorAppointmentScheduler() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1)) // February 2025

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    // Get the standard first day (0 = Sunday, 1 = Monday, etc.)
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getSlotColor = (type) => {
    switch (type) {
      case "morning":
        return "bg-blue-500"
      case "afternoon":
        return "bg-green-500"
      case "evening":
        return "bg-orange-500"
      default:
        return "bg-gray-400"
    }
  }

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDayIndex = getFirstDayOfMonth(currentDate)
    const totalCells = Math.ceil((daysInMonth + firstDayIndex) / 7) * 7
    const weeks = []

    let dayCounter = 1
    for (let week = 0; week < totalCells / 7; week++) {
      const weekDays = []
      
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        const cellIndex = week * 7 + dayOfWeek
        
        if (cellIndex < firstDayIndex || dayCounter > daysInMonth) {
          weekDays.push(
            <div key={`empty-${cellIndex}`} className="aspect-2/3 border border-gray-200 bg-white"></div>
          )
        } else {
          const day = dayCounter
          const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`
          const dayData = calendarData[dateKey]?.[day] || []

          weekDays.push(
            <div key={day} className={`aspect-2/3 border border-gray-200 p-2 relative bg-white ${day === 17 ? 'bg-blue-500' : ''}`}>
              <div className={`text-xs font-medium mb-1 ${day === 17 ? 'text-white' : 'text-gray-900'}`}>{day}</div>
                              <div className="space-y-0.5">
                {dayData.map((slot, index) => (
                  <div
                    key={index}
                    className="text-xs px-0.5 py-0.5 rounded font-medium"
                    style={{
                      backgroundColor: slot.type === 'morning' ? '#3B82F6' : 
                                       slot.type === 'afternoon' ? '#10B981' : 
                                       slot.type === 'evening' ? '#F59E0B' : '#6B7280',
                      color: 'white'
                    }}
                  >
                    {slot.slots}
                  </div>
                ))}
              </div>
            </div>
          )
          dayCounter++
        }
      }
      
      weeks.push(
        <div key={week} className="grid grid-cols-7">
          {weekDays}
        </div>
      )
    }

    return weeks
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Doctor</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search here ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                selectedDoctor.id === doctor.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
              }`}
              onClick={() => setSelectedDoctor(doctor)}
            >
              <div className="text-xs text-gray-500 w-12 mr-3">{doctor.id}</div>
              <div className="h-8 w-8 mr-3 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-xs font-medium text-gray-600">
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">{doctor.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Doctor Appointment Schedule</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 font-medium">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                  className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                  className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200  w-fit h-fit ">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              {weekDays.map((day) => (
                <div key={day} className="p-3 text-center text-sm font-medium text-gray-700 bg-gray-50 border-r border-gray-200 last:border-r-0 w-24">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex flex-col">{renderCalendarGrid()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}