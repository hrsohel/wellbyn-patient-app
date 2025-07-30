"use client";

import { useState } from "react";
import { ChevronDown, Search, Eye, Pencil } from "lucide-react";
import Link from "next/link";

export default function PatientsDashboard() {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isVisitTypeOpen, setIsVisitTypeOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

const patients = [
    {
      id: "P6Q7R8",
      initial: "R",
      name: "Rami Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "04-30-2026",
      status: "In Care",
    },
    {
      id: "J0K1L2",
      initial: "T",
      name: "Tariq Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "03-15-2027",
      status: "Recovered",
    },
    {
      id: "V2W3X4",
      initial: "M",
      name: "Maya Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "01-01-2028",
      status: "In Care",
    },
    {
      id: "D4E5F6",
      initial: "S",
      name: "Sami Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "08-14-2027",
      status: "Recovered",
    },
    {
      id: "M3N4O5",
      initial: "Z",
      name: "Zara Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "10-10-2025",
      status: "In Care",
    },
    {
      id: "S9T0U1",
      initial: "N",
      name: "Nashit Rah...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "02-20-2027",
      status: "In Care",
    },
    {
      id: "B8C9D0",
      initial: "F",
      name: "Fahim Rah...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "09-10-2028",
      status: "Recovered",
    },
    {
      id: "G7H8I9",
      initial: "R",
      name: "Riya Rahma...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "11-22-2025",
      status: "Recovered",
    },
    {
      id: "Y5Z6A7",
      initial: "A",
      name: "Ayaan Rah...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "12-05-2026",
      status: "In Care",
    },
    {
      id: "E1F2G3",
      initial: "H",
      name: "Hadi Rahma...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "06-30-2026",
      status: "In Care",
    },
    {
      id: "A1B2C3",
      initial: "S",
      name: "Sofia Elham...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "05-25-2026",
      status: "In Care",
    },
    {
      id: "H4I5J6",
      initial: "L",
      name: "Lina Rahma...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "03-12-2025",
      status: "In Care",
    },
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-4 rounded-lg  bg-white p-4 shadow-sm md:p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="grid gap-1">
            <h1 className="text-2xl font-semibold">Patients</h1>
            <p className="text-sm text-gray-500">Manage all the patients</p>
          </div>
          <button className="rounded-md text-[#2E8BC9] shadow-md px-4 py-2 text-sm font-medium hover:bg-gray-50">
            Export Data
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {/* Gender Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsGenderOpen(!isGenderOpen)}
              className="flex items-center gap-2 rounded-md shadow-md bg-white px-3 py-2 text-sm hover:bg-gray-50"
            >
              Gender <ChevronDown className="h-4 w-4" />
            </button>
            {isGenderOpen && (
              <div className="absolute z-10 mt-1 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
                <div className="py-1">
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Male</button>
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Female</button>
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Other</button>
                </div>
              </div>
            )}
          </div>

          {/* Visit Type Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsVisitTypeOpen(!isVisitTypeOpen)}
              className="flex items-center gap-2 rounded-md shadow-md bg-white px-3 py-2 text-sm hover:bg-gray-50"
            >
              Visit Type <ChevronDown className="h-4 w-4" />
            </button>
            {isVisitTypeOpen && (
              <div className="absolute z-10 mt-1 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
                <div className="py-1">
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">New Patient</button>
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Follow-up</button>
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Emergency</button>
                </div>
              </div>
            )}
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className="flex items-center gap-2 rounded-md shadow-md bg-white px-3 py-2 text-sm hover:bg-gray-50"
            >
              Status <ChevronDown className="h-4 w-4" />
            </button>
            {isStatusOpen && (
              <div className="absolute z-10 mt-1 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
                <div className="py-1">
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">In Care</button>
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Recovered</button>
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Discharged</button>
                </div>
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 rounded-md shadow-md bg-white px-3 py-2 text-sm hover:bg-gray-50"
            >
              Sort by <ChevronDown className="h-4 w-4" />
            </button>
            {isSortOpen && (
              <div className="absolute z-10 mt-1 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
                <div className="py-1">
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Name</button>
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Last Visit</button>
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">ID</button>
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative flex-1  min-w-[200px] max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Look for patient name"
              className="w-full shadow-md rounded-md py-2 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full overflow-hidden rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Patients Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Last Visit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{patient.id}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-500">
                          {patient.initial}
                        </div>
                        {patient.name}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <div className="flex flex-col">
                        <span>{patient.contact.email}</span>
                        <span className="text-xs text-gray-400">{patient.contact.phone}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{patient.gender}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{patient.lastVisit}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold leading-5 ${
                          patient.status === "In Care"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                     <Link href="/patients/appointment" className="rounded-md p-1 text-gray-400 hover:text-gray-500">
  <Eye className="h-4 w-4" />
  <span className="sr-only">View</span>
</Link>
                        <Link href="/patients/edit" className="rounded-md p-1 text-gray-400 hover:text-gray-500">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4249 8.60509L21.4149 7.6151C22.2351 6.79497 23.5648 6.79497 24.3849 7.6151C25.205 8.43524 25.205 9.76493 24.3849 10.5851L23.3949 11.5751M20.4249 8.60509L13.7656 15.2644C13.2581 15.772 12.898 16.4078 12.724 17.1041L12 20L14.8959 19.276C15.5922 19.102 16.228 18.7419 16.7356 18.2344L23.3949 11.5751M20.4249 8.60509L23.3949 11.5751" stroke="#2B4DCA" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M22.9999 17.5C22.9999 20.7875 22.9999 22.4312 22.092 23.5376C21.9258 23.7401 21.7401 23.9258 21.5375 24.092C20.4312 25 18.7874 25 15.4999 25H15C11.2288 25 9.34316 25 8.17159 23.8284C7.00003 22.6569 7 20.7712 7 17V16.5C7 13.2125 7 11.5688 7.90794 10.4624C8.07417 10.2599 8.2599 10.0742 8.46244 9.90794C9.56879 9 11.2125 9 14.5 9" stroke="#2B4DCA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                          <span className="sr-only">Edit</span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}