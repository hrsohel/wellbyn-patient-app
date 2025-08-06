"use client"
import { useState } from 'react';
import { Stethoscope, Mail, Phone, Edit, CalendarDays, Clock, Plus, X, Info, CheckCircle2, XCircle, Eye } from 'lucide-react';
import Link from 'next/link';

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('appointment');
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
     { start: "6:20 PM", end: "10:05 PM" }, { start: "6:20 PM", end: "10:05 PM" }, { start: "6:20 PM", end: "10:05 PM" },
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
       <div className="grid bg-white grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Profile Card */}
        <div className="   p-6 lg:col-span-2">
        <div className="w-24 h-24 md:w-20 md:h-20 rounded-full overflow-hidden bg-teal-500 flex-shrink-0">
              <img
                src="/placeholder.svg"
                alt="Dr. Mahmudur Rahman"
                className="w-full h-full object-cover"
              />
            </div>  <div  className="flex pt-2 border-r flex-col md:flex-row items-center md:items-start gap-6">
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl md:text-2xl text-[#3D3D3D] font-bold mb-4">Dr. Mahmudur Rahman</h1>
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
              <button className="mt-6 shadow-md flex gap-2 items-center justify-center md:justify-start text-[#2E8BC9] hover:text-blue-800 hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.38246 2.58997C9.87926 2.05173 10.1277 1.78261 10.3916 1.62563C11.0285 1.24685 11.8127 1.23507 12.4603 1.59455C12.7286 1.74354 12.9846 2.00509 13.4967 2.52818C14.0087 3.05127 14.2648 3.31282 14.4106 3.58696C14.7625 4.24842 14.751 5.04953 14.3802 5.70014C14.2265 5.96978 13.9631 6.22353 13.4362 6.73101L7.16706 12.7692C6.16858 13.7309 5.66933 14.2118 5.04537 14.4555C4.42141 14.6992 3.73546 14.6813 2.36357 14.6454L2.17692 14.6405C1.75927 14.6296 1.55044 14.6241 1.42906 14.4863C1.30766 14.3486 1.32424 14.1359 1.35738 13.7105L1.37538 13.4795C1.46867 12.282 1.51531 11.6833 1.74914 11.1451C1.98296 10.6069 2.38629 10.17 3.19295 9.29601L9.38246 2.58997Z" stroke="#2E8BC9" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M8.66667 2.66699L13.3333 7.33366" stroke="#2E8BC9" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M9.33333 14.667H14.6667" stroke="#2E8BC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-white rounded-lg  p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">Appointments</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Today Appointments */}
            <div className="text-start shadow-sm  p-2 rounded-md">
              <div className="mb-3">
               <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="48" height="48" rx="6" fill="#F0F5FE"/>
<path d="M28 14.5V18.5M20 14.5V18.5" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 16.5H23C19.2288 16.5 17.3431 16.5 16.1716 17.6716C15 18.8431 15 20.7288 15 24.5V26.5C15 30.2712 15 32.1569 16.1716 33.3284C17.3431 34.5 19.2288 34.5 23 34.5H25C28.7712 34.5 30.6569 34.5 31.8284 33.3284C33 32.1569 33 30.2712 33 26.5V24.5C33 20.7288 33 18.8431 31.8284 17.6716C30.6569 16.5 28.7712 16.5 25 16.5Z" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 22.5H33" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 26.5H28M20 26.5H20.009M25 30.5H20M28 30.5H27.991" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Today</h3>
              <p className="text-3xl font-bold text-gray-900">10</p>
            </div>

            {/* Total Appointments */}
        <div className="text-start shadow-sm  p-2 rounded-md">
              <div className="mb-3">
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="48" height="48" rx="6" fill="#F0F5FE"/>
<path d="M28 14.5V18.5M20 14.5V18.5" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 16.5H23C19.2288 16.5 17.3431 16.5 16.1716 17.6716C15 18.8431 15 20.7288 15 24.5V26.5C15 30.2712 15 32.1569 16.1716 33.3284C17.3431 34.5 19.2288 34.5 23 34.5H25C28.7712 34.5 30.6569 34.5 31.8284 33.3284C33 32.1569 33 30.2712 33 26.5V24.5C33 20.7288 33 18.8431 31.8284 17.6716C30.6569 16.5 28.7712 16.5 25 16.5Z" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 22.5H33" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 26.5H28M20 26.5H20.009M25 30.5H20M28 30.5H27.991" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total</h3>
              <div className="flex items-center justify-between  gap-2">
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
          <div className="flex space-x-1 rounded-lg bg-gray-100 p-3 max-w-md">
            <button
              onClick={() => setActiveTab('appointment')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'appointment' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'}`}
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
            <div className="w-full flex justify-center gap-8">
              {/* Left Column: Availability Table */}
              <div className="w-3/4 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 p-4 font-medium text-gray-700 ">
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
              <div className="space-y-2 w-1/4 p-4  rounded-lg bg-[#F5F7F9]">
                <h4 className="text-sm ">Available Slot </h4>
                <div>Sunday</div>
                <div className="grid grid-cols-2 gap-4 border-t border-[#DCDCDC]">
                  <div className='pt-2'>
                    <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Time
                    </label>
                    <div className="relative">
                      <input
                        id="start-time"
                        type="text"
                        placeholder="4:30 AM"
                        className="block w-full pl-8 pr-8 py-2 bg-white rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                
                     
                     <span className="absolute right-[15px] top-[16px] -translate-y-1/2 w-4 h-4 rounded-lg  text-white"> 

<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#2E8BC9"/>
<path d="M12.5 9V13L14.5 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </span>
                    </div>
                  </div>
                  <div className='pt-2'>
                    <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 mb-1">
                      End Time
                    </label>
                    <div className="relative">
                      <input
                        id="end-time"
                        type="text"
                        placeholder="4:30 PM"
                        className="block w-full pl-8 pr-8 py-2 bg-white rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                       
                     <span className="absolute right-[15px] top-[16px] -translate-y-1/2 w-4 h-4 rounded-lg  text-white"> 

<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#2E8BC9"/>
<path d="M12.5 9V13L14.5 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {availableSlotsSunday.map((slot, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <button className="flex-1  flex justify-between items-center px-4 py-2 shadow-md rounded-md bg-white hover:bg-gray-50">
                        {slot.start} <X className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="flex-1  flex justify-between items-center px-4 py-2 shadow-md rounded-md bg-white hover:bg-gray-50">
                        {slot.end} <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  ))}
                 <button className=" flex items-center shadow-md bg-white text-[#3D3D3D] hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New
                </button> </div>

              

                <button className="w-full bg-[#2E8BC9] hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md">
                  Save Change
                </button>
              </div>
            </div>
          </div>
        )}
          {activeTab === "appointment" && (
            <div> <div className="flex items-center w-full gap-4">
  {/* Patients/Doctors Select */}
  <div className="relative w-1/2">
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
  <div className="relative w-1/2">
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
    className="px-3 w-30 py-2 text-sm font-medium text-[#2B4DCA]   rounded-md  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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