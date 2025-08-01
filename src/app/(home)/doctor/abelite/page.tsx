"use client"

import { useState } from "react";
import Image from "next/image";
import { MapPin, Plus, Trash2 } from "lucide-react";

interface Qualification {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

export default function DoctorProfileForm() {
  const [qualifications, setQualifications] = useState<Qualification[]>([
    {
      id: 1,
      degree: "Doctor of Medicine (M.D.)",
      institution: "University of California, San Francisco",
      year: "2008"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Biology",
      institution: "University of California, San Francisco",
      year: "2008"
    }
  ]);
  
  const [visitType, setVisitType] = useState("new-patient");

  const addQualification = () => {
    setQualifications([
      ...qualifications,
      {
        id: qualifications.length + 1,
        degree: "",
        institution: "",
        year: ""
      }
    ]);
  };

  const removeQualification = (id: number) => {
    setQualifications(qualifications.filter(q => q.id !== id));
  };

  return (
    <div className="max-w-2/3 mx-auto bg-white p-6 space-y-6">
      {/* Profile Photo */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-teal-500 flex items-center justify-center overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Dr. Moule Marek"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">ID</span>
          </div>
        </div>
      </div>

      {/* Name and Disciplines */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            defaultValue="Dr. Moule Marek"
            className="block w-full px-3 py-2 shadow-sm rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="disciplines" className="block text-sm font-medium text-gray-700">
            Disciplines
          </label>
          <input
            id="disciplines"
            type="text"
            defaultValue="Cardiology"
            className="block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue="omahmuturiu@gmail.com"
            className="block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            defaultValue="+1 9999999999"
            className="block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Clinic Name */}
      <div className="space-y-2">
        <label htmlFor="clinic" className="block text-sm font-medium text-gray-700">
          Clinic Name
        </label>
        <input
          id="clinic"
          type="text"
          defaultValue="Sylhet Health Center"
          className="block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Office Location */}
      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Office Location
        </label>
        <textarea
          id="location"
          defaultValue="Calle Ceiba #142, Urb. Alturas de Monte Verde, Trujillo Alto, PR 00976"
          className="block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
          rows={2}
        />
        <div className="flex items-center justify-between text-xs text-blue-600">
          <span>https://maps.app.goo.gl/qywnWNkbzYuMPooP</span>
          <button className="p-1 text-red-500 hover:text-red-700 rounded-md hover:bg-gray-100">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="space-y-2">
        <div className="bg-white rounded-lg shadow-sm  overflow-hidden">
          <div className="p-0">
            <div className="w-full h-32 bg-green-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-red-500" />
              </div>
              {/* Simulated map elements */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="absolute top-4 right-3 w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="absolute bottom-3 left-4 w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <button className="w-full flex items-center justify-center text-blue-600 text-sm hover:text-blue-800 px-3 py-1.5 rounded-md hover:bg-gray-50">
          <Plus className="w-4 h-4 mr-2" />
          Add Another Location
        </button>
      </div>

      {/* Visit Reason */}
      <div className="space-y-2">
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
          Visit Reason
        </label>
        <input
          id="reason"
          type="text"
          defaultValue="I need a cleaning"
          className="block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Visit Type */}
      <div className="space-y-2">
        <label htmlFor="visit-type" className="block text-sm font-medium text-gray-700">
          Visit Type
        </label>
        <select
          value={visitType}
          onChange={(e) => setVisitType(e.target.value)}
          className="block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          <option value="new-patient">New Patient Visit</option>
          <option value="follow-up">Follow-up Visit</option>
          <option value="consultation">Consultation</option>
          <option value="emergency">Emergency Visit</option>
        </select>
      </div>

      {/* Qualification */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">Qualification</label>

        <div className="space-y-3">
          {qualifications.map((qualification) => (
            <div key={qualification.id} className="flex items-start justify-between p-3 shadow-sm rounded-lg">
              <div className="flex-1">
                <div className="font-medium text-sm">{qualification.degree}</div>
                <div className="text-xs text-gray-600">{qualification.institution}</div>
                <div className="text-xs text-gray-600">{qualification.year}</div>
              </div>
              <button
                onClick={() => removeQualification(qualification.id)}
                className="p-1 text-red-500 hover:text-red-700 rounded-md hover:bg-gray-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addQualification}
          className=" flex items-center shadow-sm justify-start text-blue-600 text-sm hover:text-blue-800 px-3 py-1.5 rounded-md hover:bg-gray-50"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </button>
      </div>

      {/* Save Button */}
      <button className="w-full flex items-center justify-center rounded-md bg-[#2E8BC9] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Save Change
      </button>
    </div>
  );
}