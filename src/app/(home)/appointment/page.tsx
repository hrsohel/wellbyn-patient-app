"use client"
<<<<<<< HEAD
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
=======

import { useState } from "react"
import { Calendar, Clock, MapPin, FileText, User, CheckCircle } from "lucide-react"
import Image from "next/image"

interface DoctorAppointmentCardProps {
  doctorName: string;
  specialty: string;
  healthCenter: string;
  lastAppointmentDate: string;
  lastAppointmentTime: string;
  appointmentStatus: "Complete" | "Pending" | "Cancelled";
  upcomingFollowUp: string | null;
}

function DoctorAppointmentCard({
  doctorName,
  specialty,
  healthCenter,
  lastAppointmentDate,
  lastAppointmentTime,
  appointmentStatus,
  upcomingFollowUp,
}: DoctorAppointmentCardProps) {
  return (
    <div className="w-full  max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-4 grid  gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt={`${doctorName} avatar`}
              width={56}
              height={56}
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium">
              {doctorName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="grid gap-0.5">
            <h3 className="font-semibold text-lg">{doctorName}</h3>
            <p className="text-sm text-gray-500">{specialty}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{healthCenter}</span>
            </div>
          </div>
        </div>
        <div className="grid gap-2 text-sm">
          <p className="font-medium">Last Appointment Time</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>{lastAppointmentDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>{lastAppointmentTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span>{appointmentStatus}</span>
          </div>
        </div>
        <div className="grid gap-2 text-sm">
          <p className="font-medium">Upcoming Follow Up</p>
          {upcomingFollowUp ? (
            <span className="text-blue-600">{upcomingFollowUp}</span>
          ) : (
            <span className="text-gray-500">No follow up required</span>
          )}
        </div>
        <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors">
          View Details
        </button>
      </div>
    </div>
  )
}

export default function AppointmentDashboard() {
  const [activeTab, setActiveTab] = useState("upcoming")
  
  const appointments = [
    {
      doctorName: "Dr. Moule Marrk",
      specialty: "Cardiology",
      healthCenter: "Sylhet Health Center",
      lastAppointmentDate: "May 16, 2025",
      lastAppointmentTime: "10:30 PM",
      appointmentStatus: "Complete",
      upcomingFollowUp: "In 7 days",
    },
    {
      doctorName: "Dr. Moule Marrk",
      specialty: "Cardiology",
      healthCenter: "Sylhet Health Center",
      lastAppointmentDate: "May 16, 2025",
      lastAppointmentTime: "10:30 PM",
      appointmentStatus: "Complete",
      upcomingFollowUp: null,
    },
     {
      doctorName: "Dr. Moule Marrk",
      specialty: "Cardiology",
      healthCenter: "Sylhet Health Center",
      lastAppointmentDate: "May 16, 2025",
      lastAppointmentTime: "10:30 PM",
      appointmentStatus: "Complete",
      upcomingFollowUp: null,
    },
     {
      doctorName: "Dr. Moule Marrk",
      specialty: "Cardiology",
      healthCenter: "Sylhet Health Center",
      lastAppointmentDate: "May 16, 2025",
      lastAppointmentTime: "10:30 PM",
      appointmentStatus: "Complete",
      upcomingFollowUp: null,
    },
    
  ]

  const renderAppointmentCard = (appointment: any) => (
    <div key={appointment.doctorName + appointment.lastAppointmentDate} className="bg-white shadow-sm border border-gray-200 rounded-lg">
     
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/doc.jpg"
                alt="img"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base">{appointment.doctorName}</h3>
              <p className="text-sm text-gray-600">{appointment.specialty}</p>
              <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                <MapPin className="h-3 w-3" />
                <span>{appointment.healthCenter}</span>
              </div>
            </div>
          </div>
          <button className="text-white px-4 py-2 text-sm rounded-md flex items-center">
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2903_18021)">
                <rect x="4" y="1.5" width="40" height="40" rx="8" fill="#2E8BC9"/>
                <path d="M24 11.5C29.5221 11.5 33.9998 15.7834 34 21.0664C34 26.3496 29.5222 30.6338 24 30.6338C23.3507 30.6347 22.7032 30.5738 22.0654 30.4541C21.6066 30.3679 21.377 30.3252 21.2168 30.3496C21.0565 30.3741 20.8292 30.4947 20.375 30.7363C19.0902 31.4196 17.5922 31.6605 16.1514 31.3926C16.6988 30.7191 17.0723 29.9111 17.2373 29.0449C17.3373 28.5149 17.0899 27.9999 16.7188 27.623C15.0332 25.9115 14 23.6048 14 21.0664C14.0002 15.7834 18.4779 11.5 24 11.5ZM20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5H20.0088C20.5611 22.5 21.0088 22.0523 21.0088 21.5C21.0088 20.9477 20.5611 20.5 20.0088 20.5H20ZM23.9951 20.5C23.443 20.5002 22.9951 20.9478 22.9951 21.5C22.9951 22.0522 23.443 22.4998 23.9951 22.5H24.0049L24.1064 22.4951C24.6109 22.4441 25.0049 22.0179 25.0049 21.5C25.0049 20.9821 24.6109 20.5559 24.1064 20.5049L24.0049 20.5H23.9951ZM27.9912 20.5C27.4389 20.5 26.9912 20.9477 26.9912 21.5C26.9912 22.0523 27.4389 22.5 27.9912 22.5H28C28.5523 22.5 29 22.0523 29 21.5C29 20.9477 28.5523 20.5 28 20.5H27.9912Z" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d_2903_18021" x="0" y="0.5" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="3"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.25098 0 0 0 0 0.376471 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2903_18021"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2903_18021" result="shape"/>
                </filter>
              </defs>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Date & Time</p>
            <div className="space-y-1 flex w-full justify-between items-center">
              <div className="flex items-center space-x-2 text-sm text-gray-900">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{appointment.lastAppointmentDate}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-900">
                <Clock className="h-4 w-4 text-gray-400" />
                <span>{appointment.lastAppointmentTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-600">Confirmed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Visit Reason</p>
          <p className="text-sm text-gray-900 shadow-md p-2 rounded-md">I need a cleaning</p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Visit Type</p>
          <p className="text-sm text-gray-900 shadow-md p-2 rounded-md">New Patient Visit</p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Insurance</p>
          <p className="text-sm text-gray-900 shadow-md p-2 rounded-md">Blusky</p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Documentation</p>
          <div className="flex items-center space-x-2 shadow-md p-2 rounded-md">
            <FileText className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-900">doc 1.pdf</span>
            <span className="text-sm text-gray-500">20.4kb</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Summary</p>
          <div className="text-sm text-gray-900 shadow-md p-2 rounded-md">
            <div>Problem</div>
            <div>• head</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Current Medications</p>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
              <div className="grid grid-cols-3 gap-4">
                <span className="text-xs font-medium text-gray-700">Name</span>
                <span className="text-xs font-medium text-gray-700">Frequency</span>
                <span className="text-xs font-medium text-gray-700">Action</span>
              </div>
            </div>
            <div className="px-3 py-2 border-b border-gray-200">
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm text-gray-900">Lisinopril</span>
                <span className="text-sm text-gray-600">Once daily</span>
                <button className="w-5 h-5 p-0 text-blue-500 hover:bg-blue-50 rounded">
                  R
                </button>
              </div>
            </div>
            <div className="px-3 py-2">
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm text-gray-900">Metformin</span>
                <span className="text-sm text-gray-600">Twice daily</span>
                <button className="w-5 h-5 p-0 text-blue-500 hover:bg-blue-50 rounded">
                  R
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-1">Prior Diagnoses (Optional)</p>
          <p className="text-sm text-gray-600 leading-relaxed shadow-md p-2 rounded-md">
            Patient's medical history includes previous surgeries, allergies to penicillin, and a family
            history of diabetes. Current concerns involve persistent headaches and occasional dizziness.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Can't make it on this date?</p>
            <div className="flex items-center space-x-2">
              <button className="text-blue-600 border border-blue-300 hover:bg-blue-50 bg-transparent px-3 py-1 rounded-md text-sm">
                Reschedule
              </button>
              <span className="text-sm text-gray-400">OR</span>
              <button className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-md text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="">
        <div className="text-gray-900 border-b-2 border-[#DCDCDC] rounded-none px-0 font-medium text-sm">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`py-2 px-4 text-sm font-medium transition-colors ${
              activeTab === "upcoming" ? "text-[#2E8BC9] border-b-2 border-[#2E8BC9]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Upcoming (4)
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`py-2 px-4 text-sm font-medium transition-colors ${
              activeTab === "completed" ? "text-[#2E8BC9] border-b-2 border-[#2E8BC9]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Completed (4)
          </button>
          <button
            onClick={() => setActiveTab("canceled")}
            className={`py-2 px-4 text-sm font-medium transition-colors ${
              activeTab === "canceled" ? "text-[#2E8BC9] border-b-2 border-[#2E8BC9]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Canceled (10)
          </button>
        </div>
        <div className="p-4">
          <h1>Upcoming Appointments</h1>
        </div>
   
        {activeTab === "upcoming" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          
            {appointments.map(renderAppointmentCard)}
          </div>
        )}

        {activeTab === "completed" && (
          <div className="mt-6 grid grid-cols-3">
            {appointments.map(appointment => (
              <DoctorAppointmentCard
                key={appointment.doctorName + appointment.lastAppointmentDate}
                {...appointment}
              />
            ))}
          </div>
        )}

        {activeTab === "canceled" && (
          <div className="flex items-center justify-center h-32 text-gray-500 mt-6">
            <p>Canceled appointments view</p>
          </div>
        )}
      </div>
    </div>
  )
>>>>>>> developed_by_HR
}