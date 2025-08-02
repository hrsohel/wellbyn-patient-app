"use client"
import { useState } from 'react';
import { Stethoscope, Mail, Phone, Edit, CalendarDays, Clock, Plus, X, Info, CheckCircle2, XCircle, Eye } from 'lucide-react';
import Link from 'next/link';

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('availability');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const availabilityData = [
    { day: "Sunday", start: "11:45 AM", end: "4:30 PM" },
    { day: "Monday", start: "Not Selected", end: "Not Selected" },
    // ... rest of the days
  ];
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

  const availableSlotsSunday = [
    { start: "11:45 AM", end: "4:30 PM" },
    { start: "6:20 PM", end: "10:05 PM" },
    // ... rest of the slots
  ];
 const appointments = [
    {
      id: 1,
      time: "16 May, 2025 || 10:30 PM",
      doctor: "Dr. Moule Markk",
      status: "Upcoming",
      isHighlighted: true,
    },
    {
      id: 2,
      time: "16 May, 2025 || 10:30 PM",
      doctor: "Dr. Moule Markk",
      status: "Next Follow Up In 7 Days",
      isHighlighted: false,
    },
    {
      id: 3,
      time: "16 May, 2025 || 10:30 PM",
      doctor: "Dr. Moule Markk",
      status: "Complete",
      isHighlighted: false,
    },
    {
      id: 4,
      time: "16 May, 2025 || 10:30 PM",
      doctor: "Dr. Moule Markk",
      status: "Complete",
      isHighlighted: false,
    },
    {
      id: 5,
      time: "16 May, 2025 || 10:30 PM",
      doctor: "Dr. Moule Markk",
      status: "Canceled",
      isHighlighted: false,
    },
  ];

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-orange-100 text-orange-600";
      case "Next Follow Up In 7 Days":
        return "bg-blue-100 text-blue-600";
      case "Complete":
        return "bg-green-100 text-green-600";
      case "Canceled":
        return "bg-red-100 text-red-600";
      default:
        return "";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Complete":
        return <CheckCircle2 className="w-4 h-4 mr-1" />;
      case "Canceled":
        return <XCircle className="w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };
  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Top Section: Profile and Appointments */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 md:w-20 md:h-20 rounded-full overflow-hidden bg-teal-500 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
                alt="Dr. Mahmudur Rahman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold mb-4">Dr. Mahmudur Rahman</h1>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Stethoscope className="w-4 h-4 text-gray-500" />
                  <span>Doctor ID : P6Q7R8</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>Email : omahmuudur9@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>Mobile : +8801770504877</span>
                </div>
              </div>
              <button className="mt-6 flex items-center justify-center md:justify-start text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">Appointments</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Today Appointments */}
            <div className="text-center">
              <div className="mb-3">
                <CalendarDays className="w-8 h-8 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Today</h3>
              <p className="text-3xl font-bold text-gray-900">10</p>
            </div>

            {/* Total Appointments */}
            <div className="text-center">
              <div className="mb-3">
                <CalendarDays className="w-8 h-8 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total</h3>
              <div className="flex items-center justify-center gap-2">
                <p className="text-3xl font-bold text-gray-900">7</p>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
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
              onClick={() => setActiveTab('appointment')}
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
          {activeTab === "appointment" && (
            <div> <div className="flex items-center gap-4">
  {/* Patients/Doctors Select */}
  <div className="relative w-32">
    <select 
      defaultValue="patients"
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
    >
      <option value="patients">Patients</option>
      <option value="doctors">Doctors</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  </div>

  {/* Status Select */}
  <div className="relative w-32">
    <select 
      defaultValue="upcoming"
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
    >
      <option value="upcoming">Upcoming</option>
      <option value="completed">Completed</option>
      <option value="cancelled">Cancelled</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  </div>

  {/* Clear Filter Button */}
  <button 
    className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  >
    Clear filter
  </button>
</div>   <div className="mt-6 space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`grid grid-cols-1 md:grid-cols-4 items-center gap-4 p-4 rounded-lg shadow-sm ${
                    appointment.isHighlighted ? "border-l-4 border-[#2E8BC9] bg-blue-50" : "bg-white border-l-4 border-[#DCDCDC]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Appointment Time</span>
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Doctor</span>
                    <span className="font-medium">{appointment.doctor}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Status</span>
                    <div className="flex flex-1/3"><span
                      className={`flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(
                        appointment.status,
                      )}`}
                    >
                      {getStatusIcon(appointment.status)}
                      {appointment.status}
                    </span></div>
                    
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-sm text-gray-500 ">Action</span>
                    <Link href="/patients/details" className="text-blue-500 hover:underline font-medium">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div></div>
        
          )}
 {activeTab === "all-patients" && (
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
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-[#2E8BC9]">
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
<path d="M20.4249 8.60509L21.4149 7.6151C22.2351 6.79497 23.5648 6.79497 24.3849 7.6151C25.205 8.43524 25.205 9.76493 24.3849 10.5851L23.3949 11.5751M20.4249 8.60509L13.7656 15.2644C13.2581 15.772 12.898 16.4078 12.724 17.1041L12 20L14.8959 19.276C15.5922 19.102 16.228 18.7419 16.7356 18.2344L23.3949 11.5751M20.4249 8.60509L23.3949 11.5751" stroke="#2B4DCA" strokeWidth="1.5" stroke-linejoin="round"/>
<path d="M22.9999 17.5C22.9999 20.7875 22.9999 22.4312 22.092 23.5376C21.9258 23.7401 21.7401 23.9258 21.5375 24.092C20.4312 25 18.7874 25 15.4999 25H15C11.2288 25 9.34316 25 8.17159 23.8284C7.00003 22.6569 7 20.7712 7 17V16.5C7 13.2125 7 11.5688 7.90794 10.4624C8.07417 10.2599 8.2599 10.0742 8.46244 9.90794C9.56879 9 11.2125 9 14.5 9" stroke="#2B4DCA" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
          )}

   

      </div>
    </div>
  );
}