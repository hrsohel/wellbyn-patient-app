"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, FileText, MoreHorizontal } from "lucide-react"

export default function PatientAppointment() {
  const [showTimer, setShowTimer] = useState(false)

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Ma</span>
          </div>
          <div>
            <h1 className="font-semibold text-gray-900 text-lg">Mahmudur Rahman</h1>
            <p className="text-sm text-gray-500">Patient ID: P607RB</p>
          </div>
        </div>
        <button className="p-2 text-blue-500 rounded-full hover:bg-gray-100">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" />
          </svg>
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Date & Time */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Date & Time</h2>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">May 16, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">10:30 PM</span>
            </div>
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
              ✓ Complete
            </span>
          </div>
          <button className="w-full flex items-center justify-center gap-2 rounded-md border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-100">
            <MapPin className="w-4 h-4" />
            Check In
          </button>
        </div>

        {/* Visit Reason */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Visit Reason</h3>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm text-gray-700">I need a cleaning</p>
          </div>
        </div>

        {/* Visit Type */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Visit Type</h3>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm text-gray-700">New Patient Visit</p>
          </div>
        </div>

        {/* Insurance */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Insurance</h3>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm text-gray-700">Blusky</p>
          </div>
        </div>

        {/* Documentation */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
          <div className="bg-white p-3 rounded border flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">doc 1.pdf</p>
              <p className="text-xs text-gray-500">20.3MB</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Summary</h3>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm text-gray-700 mb-1">Problem</p>
            <p className="text-sm text-gray-700">• heart</p>
          </div>
        </div>

        {/* Current Medications */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Current Medications</h3>
          <div className="bg-white rounded border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 border-b">
              <span className="text-xs font-medium text-gray-600">Name</span>
              <span className="text-xs font-medium text-gray-600">Frequency</span>
              <span className="text-xs font-medium text-gray-600">Action</span>
            </div>
            {/* Table Rows */}
            <div className="divide-y">
              <div className="grid grid-cols-3 gap-4 p-3 items-center">
                <span className="text-sm text-blue-600">Lisinopril</span>
                <span className="text-sm text-gray-700">Once daily</span>
                <button className="w-6 h-6 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 p-3 items-center">
                <span className="text-sm text-blue-600">Metformin</span>
                <span className="text-sm text-gray-700">Twice daily</span>
                <button className="w-6 h-6 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Prior Diagnoses */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Prior Diagnoses (Optional)</h3>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm text-gray-700">
              Patient's medical history includes previous surgeries, allergies to penicillin, and a family history of
              diabetes. Current concerns involve persistent headaches and occasional dizziness.
            </p>
          </div>
        </div>

        {/* Start Appointment Button */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-base font-medium rounded-md"
          onClick={() => setShowTimer(true)}
        >
          Start Appointment
        </button>
      </div>

      {/* Timer Overlay */}
      {showTimer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 mx-4 w-full max-w-sm">
            {/* Patient Info in Timer */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">Ma</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Mahmudur Rahman</h3>
                <p className="text-sm text-gray-500">Patient ID: P607RB</p>
              </div>
              <button className="p-2 text-blue-500 rounded-full hover:bg-gray-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" />
                </svg>
              </button>
            </div>

            {/* Timer Display */}
            <div className="bg-gray-900 rounded-lg p-6 text-center mb-4">
              <div className="text-white text-3xl font-mono font-bold mb-2">00 : 30 : 56</div>
              <div className="flex justify-center gap-8 text-xs text-gray-400">
                <span>hours</span>
                <span>minute</span>
                <span>second</span>
              </div>
            </div>

            {/* Timer Controls */}
            <div className="flex gap-3">
              <button 
                className="flex-1 rounded-md border border-gray-300 bg-transparent py-2 px-4 text-sm font-medium hover:bg-gray-50"
                onClick={() => setShowTimer(false)}
              >
                View Details
              </button>
              <button 
                className="flex-1 rounded-md bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-600"
                onClick={() => setShowTimer(false)}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}