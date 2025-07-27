"use client"

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
}