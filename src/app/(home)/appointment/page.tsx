"use client"
import Image from "next/image";
import { Plus, Calendar, Users, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function AppointmentDashboard() {
  const [activeTab, setActiveTab] = useState("doctor");

  const doctorAppointments = Array(9).fill({
    doctorName: "Dr. Moule Marrk",
    specialty: "Cardiology",
    location: "Sylhet Health Center",
    date: "16 May, 2025",
    totalPatients: 46,
  });

  const patientAppointments = [
    {
      id: 1,
      patientName: "Mahmudur Rahman",
      patientId: "P007RB",
      date: "May 16, 2025",
      time: "10:30 PM",
      hasPreVisit: true,
      canStartAppointment: true,
      checkedIn: false,
    },
    {
      id: 2,
      patientName: "Mahmudur Rahman",
      patientId: "P007RB",
      date: "May 16, 2025",
      time: "10:30 PM",
      hasPreVisit: true,
      canStartAppointment: true,
      checkedIn: false,
    },
    {
      id: 3,
      patientName: "Mahmudur Rahman",
      patientId: "P007RB",
      date: "May 16, 2025",
      time: "10:30 PM",
      hasPreVisit: false,
      canStartAppointment: false,
      checkedIn: false,
    },
    {
      id: 4,
      patientName: "Mahmudur Rahman",
      patientId: "P007RB",
      date: "May 16, 2025",
      time: "10:30 PM",
      hasPreVisit: false,
      canStartAppointment: false,
      checkedIn: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Tabs */}
        <div className="flex gap-1 mb-8">
          <button
            onClick={() => setActiveTab("doctor")}
            className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-md ${
              activeTab === "doctor"
                ? "bg-white text-gray-700"
                : "bg-gray-100 text-gray-500"
            } hover:bg-gray-50`}
          >
            View As Doctor
          </button>
          <button
            onClick={() => setActiveTab("patient")}
            className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-r-md ${
              activeTab === "patient"
                ? "bg-white text-gray-700"
                : "bg-gray-100 text-gray-500"
            } hover:bg-gray-50`}
          >
            View As Patient
          </button>
        </div>

        {/* Common Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Appointment</h1>
            <p className="text-sm text-gray-600 mt-1">Total: 1200</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Plus className="w-4 h-4 mr-2" />
            Add New
          </button>
        </div>

        {activeTab === "doctor" ? (
          <>
            {/* Doctor View Filters */}
            <div className="flex gap-4 mb-8">
              {/* Today Select */}
              <div className="relative w-32">
                <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="this-week">This Week</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Doctor Select */}
              <div className="relative w-48">
                <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select doctor name</option>
                  <option value="dr-marrk">Dr. Moule Marrk</option>
                  <option value="dr-smith">Dr. John Smith</option>
                  <option value="dr-johnson">Dr. Sarah Johnson</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Discipline Select */}
              <div className="relative w-40">
                <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Discipline</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Doctor Appointment Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctorAppointments.map((appointment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
                >
                  {/* Doctor Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/placeholder.svg"
                        alt="Doctor profile"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {appointment.doctorName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {appointment.specialty}
                      </p>
                      <p className="text-sm text-gray-500">
                        {appointment.location}
                      </p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {appointment.date}
                    </span>
                  </div>

                  {/* Total Patients */}
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Total Patients -{" "}
                      <span className="font-medium text-blue-600">
                        {appointment.totalPatients}
                      </span>
                    </span>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Patient View Filters */}
            <div className="flex gap-4 mb-6">
              <select className="w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select Patients Name</option>
                <option value="mahmudur">Mahmudur Rahman</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
              </select>

              <select className="w-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Date</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="this-week">This Week</option>
              </select>

              <select className="w-[100px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">ID</option>
                <option value="p007rb">P007RB</option>
                <option value="p008rc">P008RC</option>
                <option value="p009rd">P009RD</option>
              </select>
            </div>

            {/* Patient Appointment Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {patientAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="p-4">
                    {/* Patient Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                        Ma
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {appointment.patientName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Patient ID: {appointment.patientId}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <span>Date & Time</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-900 mb-4">
                      📅 {appointment.date}
                    </div>

                    {/* Check In Button */}
                    <div className="flex items-center gap-2 mb-4">
                      <button className="px-3 py-1 text-sm border border-orange-200 text-orange-600 rounded-md hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <MapPin className="w-4 h-4 mr-1 inline" />
                        Check In
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        View Details
                      </button>
                      {appointment.hasPreVisit && (
                        <button className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                          Pre-Visit
                        </button>
                      )}
                    </div>

                    {/* Start Appointment Button */}
                    {appointment.canStartAppointment && (
                      <button className="w-full mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Start Appointment
                      </button>
                    )}
                    {!appointment.canStartAppointment && (
                      <button className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}