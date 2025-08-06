"use client"
import { useState } from 'react';
import { Eye, Plus, PencilLine, Download } from 'lucide-react';
import Link from 'next/link';

interface Doctor {
  id: string;
  name: string;
  avatar: string;
  contact: {
    email: string;
    phone: string;
  };
  appointments: number;
  patients: number;
}

export default function DoctorsPage() {
  const [doctors] = useState<Doctor[]>([
    {
      id: "P6Q7R8",
      name: "Rami Rahman Chowdhury",
      avatar: "/placeholder.svg?height=32&width=32",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      appointments: 15,
      patients: 15,
    },
     {
      id: "P6Q7R81",
      name: "Rami Rahman Chowdhury",
      avatar: "/placeholder.svg?height=32&width=32",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      appointments: 15,
      patients: 15,
    },
    // ... rest of the doctors data
  ]);

  return (
    <div className="min-h-screen bg-gray-100   sm:p-6 md:p-8">     {/* Header Section */}
        <div className="flex bg-white p-6 rounded-lg shadow-sm flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
            <p className="text-sm text-gray-500">Oversee all the doctors.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center rounded-md shadow-md bg-transparent px-4 py-2 text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </button>
                   <Link href="/doctor/abelite">
            <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#2E8BC9] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </button></Link>
          </div>
        </div>
      <div className="bg-white rounded-lg shadow-sm ">
   

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Appointments
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patients
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {doctor.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={doctor.avatar || "/placeholder.svg"}
                          alt={doctor.name}
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{doctor.contact.email}</div>
                    <div className="text-sm text-gray-500">{doctor.contact.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doctor.appointments}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doctor.patients}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                     <Link href="/doctor/appointments">
                    <button className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </button>  </Link>
                      <button className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <PencilLine className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}