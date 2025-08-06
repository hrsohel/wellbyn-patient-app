"use client";

import { useState } from "react";
import { MessageSquare, CheckCircle2, XCircle, Settings, DownloadCloud, FileText, Download, User, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("appointment");
  const [noteText, setNoteText] = useState("");

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
  const documents = [
    { name: "Document_Name.jpeg", size: "25kb", status: "downloading" },
    { name: "Document_Name.jpeg", size: "25kb", status: "ready" },
    { name: "Document_Name.jpeg", size: "25kb", status: "ready" },
    { name: "Document_Name.jpeg", size: "25kb", status: "ready" },
  ]

  const insuranceData = {
    insuranceName: "Bluesky",
    contractId: "G987654321",
    groupNumber: "H123456789",
    expirationDate: "31/12/2025",
    patientRelationship: "Father",
    firstName: "Kamal",
    middleName: "Ahmed",
    lastName: "Dane",
    patientContractId: "G987654321",
    addressLine1: "G987654321", // This appears to be a placeholder for an actual address line in the image
    city: "Manhattan",
    state: "NYC",
    zip: "00976",
    employerName: "Mahmudcompany",
    sex: "Male",
    dateOfBirth: "31/12/2006",
  }

  // Reusable component for displaying a data field
  const DataField = ({ label, value }: { label: string; value: string }) => (
    <div className="grid gap-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )

  // Component to render a single column of insurance information
  const InsuranceColumn = () => (
    <div className="space-y-6">
      {/* Insurance Details Section */}
      <div className="space-y-4">
        <DataField label="Insurance Name" value={insuranceData.insuranceName} />
        <DataField label="Contract ID" value={insuranceData.contractId} />
        <DataField label="Group Number" value={insuranceData.groupNumber} />
        <DataField label="Expiration Date" value={insuranceData.expirationDate} />
      </div>
      <hr className="border-t border-gray-200" />

      {/* Patient Relationship Section */}
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Patient Relationship to Policy Holder</p>
        <p className="font-medium">{insuranceData.patientRelationship}</p>
      </div>
      <hr className="border-t border-gray-200" />

      {/* Patient Details Section */}
      <div className="grid grid-cols-3 gap-4">
        <DataField label="First Name" value={insuranceData.firstName} />
        <DataField label="Middle Name" value={insuranceData.middleName} />
        <DataField label="Last Name" value={insuranceData.lastName} />
      </div>
      <div className="space-y-4 mt-4">
        <DataField label="Contract ID" value={insuranceData.patientContractId} />
        <DataField label="Address Line 1" value={insuranceData.addressLine1} />
        <div className="grid grid-cols-3 gap-4">
          <DataField label="City" value={insuranceData.city} />
          <DataField label="State" value={insuranceData.state} />
          <DataField label="ZIP" value={insuranceData.zip} />
        </div>
      </div>
      <hr className="border-t border-gray-200" />

      {/* Employment and Personal Info Section */}
      <div className="space-y-4">
        <DataField label="Employer Name" value={insuranceData.employerName} />
        <DataField label="Sex" value={insuranceData.sex} />
        <DataField label="Date of Birth" value={insuranceData.dateOfBirth} />
      </div>
      <hr className="border-t border-gray-200" />

      {/* Documents and Signature Section */}
      <div className="space-y-4">
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Insurance Card</p>
          <Link href="#" className="flex w-[100px] px-1 py-2 shadow-md rounded-md items-center gap-1 text-[#2E8BC9] hover:underline text-sm">
            <Eye className="w-4 h-4" />
            View Card
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Digital Signature</p>
          <Link href="#" className="flex w-1/3 px-4 py-2 rounded-md items-center gap-1 shadow-md text-[#2E8BC9] hover:underline text-sm">
            <Eye className="w-4 h-4" />
            View Signature
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Draw Signature</p>
          <svg width="440" height="125" viewBox="0 0 440 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3492_30332)">
<rect x="4" y="1" width="432" height="117" rx="8" fill="white"/>
</g>
<path d="M92.1631 85.1554C93.1604 80.9655 94.4768 72.5043 98.795 59.7176C101.043 53.0623 104.11 47.7815 105.292 40.5375C106.064 35.8096 106.454 62.5229 107.282 64.3282C107.712 65.2661 108.439 66.1336 109.107 65.9979C115.691 64.6603 112.428 51.6908 114.098 46.5643C115.659 41.7753 120.077 36.6146 121.737 32.5469C123.079 41.8903 124.395 70.3506 126.066 74.2825C126.4 75.192 126.729 76.0879 127.068 77.0109" stroke="#292929" stroke-width="3" stroke-linecap="round"/>
<path d="M143.209 59.8076C143.982 59.4204 144.87 59.0647 145.836 58.7439C145.909 57.1503 146.397 55.5262 147.024 55.7444C147.81 56.0181 149.002 56.7065 149.81 57.6992C150.364 58.3806 150.737 59.2054 150.674 60.1379C150.48 62.9757 151.182 66.7633 150.675 70.3064C150.266 73.1638 149.071 75.8623 145.986 77.7751C144.301 78.8203 141.648 78.9568 139.843 78.6664C137.031 78.214 134.403 77.6043 133.545 75.4811C133.052 74.2594 132.702 72.4005 133.221 70.9564C135.066 65.8254 138.883 61.9755 143.209 59.8076Z" fill="white"/>
<path d="M161.973 57.1018C157.355 56.1969 148.031 57.3914 143.209 59.8076C138.883 61.9755 135.066 65.8254 133.221 70.9564C132.702 72.4005 133.052 74.2594 133.545 75.4811C134.403 77.6043 137.031 78.214 139.843 78.6664C141.648 78.9568 144.301 78.8203 145.986 77.7751C152.895 73.4905 150.325 65.2643 150.674 60.1379C150.83 57.8471 148.35 56.2059 147.024 55.7444C146.256 55.4774 145.697 57.9705 145.852 59.7895C146.488 67.2807 151.661 71.5627 154.977 74.1372C155.979 74.5942 156.966 74.8928 157.969 75.3453C158.971 75.7978 159.958 76.395 161.973 77.9153" stroke="#292929" stroke-width="3" stroke-linecap="round"/>
<path d="M170.948 29.9551C167.298 33.8554 165.961 40.4885 165.134 46.6738C164.509 51.3443 163.967 72.3061 164.795 77.7855C165.594 83.0784 167.617 68.2882 170.27 63.3065C171.969 60.1156 174.269 58.0172 175.919 56.6598C176.968 55.7969 179.544 56.1982 181.06 56.7955C183.754 57.8569 183.912 64.8947 183.912 71.0935C183.912 72.2156 183.912 69.2293 184.077 67.243C184.242 65.2566 184.571 64.3608 184.91 63.4377" stroke="#292929" stroke-width="3" stroke-linecap="round"/>
<path d="M215.332 69.731C215.762 64.2084 215.047 58.6516 213.984 54.972C213.041 57.4212 212.107 62.4575 213.342 68.2921C213.851 70.6947 215.183 71.639 215.332 69.731Z" fill="white"/>
<path d="M193.885 53.4828C194.543 59.5006 195.88 67.3102 195.715 74.1018C195.603 78.746 196.199 58.0256 199.191 54.252C200.087 53.1214 201.504 51.9987 203.664 51.3834C205.823 50.768 208.785 50.768 210.64 51.2159C212.494 51.6639 213.153 52.5598 213.492 53.4692C214.811 57.0078 215.825 63.3919 215.332 69.731C215.183 71.639 213.851 70.6947 213.342 68.2921C212.032 62.1035 213.163 56.813 214.155 54.5552C214.654 53.4203 215.805 52.596 217.466 52.1345C219.126 51.6729 221.43 51.6729 223.275 52.1209C225.12 52.5688 226.436 53.4647 227.279 54.8221C228.79 63.6995 229.448 73.6719 230.445 77.2872C230.785 78.812 230.785 79.7079 230.785 80.6309" stroke="#292929" stroke-width="3" stroke-linecap="round"/>
<path d="M236.769 52.5774C236.769 57.9889 238.743 65.8076 240.753 71.4136C241.13 72.4651 241.416 73.3728 243.231 73.8343C245.046 74.2959 248.337 74.2959 250.361 73.2507C252.386 72.2055 253.044 70.1151 253.383 65.3053C253.722 60.4956 253.722 53.0299 253.722 45.3379" stroke="#292929" stroke-width="3" stroke-linecap="round"/>
<path d="M281.646 20C281.646 33.8003 282.304 53.1388 284.299 60.3964C285.758 65.7061 285.635 69.7625 285.141 70.8212C283.497 74.3486 278.674 62.8578 275.508 58.7765C273.735 56.4921 271.025 54.3966 267.38 53.0392C265.471 52.3284 263.076 52.5777 261.561 53.0257C259.059 53.7648 258.379 56.1884 257.881 58.4417C256.455 64.8844 263.675 70.3507 267.998 73.0836C272.674 76.0395 281.586 74.2962 290.756 71.2963C292.925 70.0882 295.229 68.5951 297.896 67.2286C300.564 65.8622 303.526 64.6677 306.578 63.437" stroke="#292929" stroke-width="3" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_3492_30332" x="0" y="0" width="440" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.25098 0 0 0 0 0.376471 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3492_30332"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3492_30332" result="shape"/>
</filter>
</defs>
</svg>

        </div>
      </div>
    </div>
  )

  const caregivers = [
    { id: 1, name: "Jamal" },
    { id: 2, name: "Jony" },
  ]
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Section: Patient Profile and Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow p-6 ">
          {/* Patient Profile */}
          <div className="flex flex-col items-start border-r border-[#DCDCDC] gap-4 pr-5">
             <div className="w-16 h-16 rounded-full bg-[#2E8BC9] flex items-center justify-center text-white text-xl font-semibold">
                Ma
              </div> <div className="flex items-center gap-4 ">
            
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">Mahmudur Rahman</h2>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    In Care
                  </span>
                </div>
                <p className="text-sm text-gray-500">Patient ID: P6Q7R8</p>
              </div>
            </div>
            <button className="w-full  bg-[#2E8BC9] hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center">
      
              Send Message
            </button>
          </div>

          {/* Notes Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Notes</h3>
            <p className="text-sm text-gray-500">
              Feel free to add a private note for this patient. Only you will be able to view it.
            </p>
            <textarea
              placeholder="Type your note..."
              className="min-h-[100px] w-full p-2 shadow-md bg-[#F5F7F9] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
          </div>
        </div>

        {/* Bottom Section: Tabbed Interface */}
        <div className="w-full bg-white rounded-lg shadow p-6">
          {/* Tabs */}
          <div className="grid w-3/4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 bg-[#F5F7F9] p-3  rounded-md mb-6">
            <button
              onClick={() => setActiveTab("appointment")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "appointment" ? "bg-white shadow-md p-5 text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Appointment
            </button>
            <button
              onClick={() => setActiveTab("patients-info")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "patients-info" ? "bg-white shadow-md p-5 text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Patients Info
            </button>
            <button
              onClick={() => setActiveTab("document")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "document" ? "bg-white shadow-md p-5 text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Document
            </button>
            <button
              onClick={() => setActiveTab("medication")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "medication" ? "bg-white shadow-md p-5 text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Medication
            </button>
            <button
              onClick={() => setActiveTab("insurance-info")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "insurance-info" ? "bg-white shadow-md p-5 text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Insurance Info
            </button>
            <button
              onClick={() => setActiveTab("caregiver")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "caregiver" ? "bg-white shadow-md p-5 text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Caregiver Details
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "appointment" && (
            <div className="mt-6 space-y-4">
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
            </div>
          )}
          {/* Other tab contents would go here */}
         
          {activeTab === "patients-info" && (
           <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
        <Settings className="w-5 h-5" />
        <span>Patient Information</span>
      </div>

      <div className="space-y-8">
        {/* Personal Information Section */}
        <div className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">mahmud.uiuxdesign@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mobile</p>
              <p className="font-medium">(555) 456-7890</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date of Birth</p>
              <p className="font-medium">10-10-2009</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Age</p>
              <p className="font-medium">23</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gender</p>
              <p className="font-medium">Male</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Blood Group</p>
              <p className="font-medium">O+</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Marital Status</p>
              <p className="font-medium">Singel</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Number of children</p>
              <p className="font-medium">-</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Address Line 1</p>
              <p className="font-medium">1234 Elm Street</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Address Line 2</p>
              <p className="font-medium">Apt 101</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">City</p>
              <p className="font-medium">San Juan</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">State</p>
              <p className="font-medium">Puerto Rico</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">ZIP</p>
              <p className="font-medium">00901</p>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="pb-6">
          <h2 className="text-xl font-semibold mb-4">Additional info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Employer</p>
              <p className="font-medium">N/A</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last 4 digits of SSN</p>
              <p className="font-medium">5241</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Driver&apos;s License</p>
              <p className="font-medium">56170</p>
            </div>
          </div>
        </div>

        {/* Upload Driver's License Images */}
        <div className="pt-4">
          <p className="text-sm text-muted-foreground mb-3">Upload Driver&apos;s License Images</p>
          <div className="flex gap-3 items-center">
            <Button variant="outline" className="flex gap-2 items-center border-none shadow-md">
              
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3627 7.36301C14.5654 7.64721 14.6667 7.78934 14.6667 7.99967C14.6667 8.21001 14.5654 8.35214 14.3627 8.63634C13.452 9.91341 11.1262 12.6663 8.00004 12.6663C4.87389 12.6663 2.54811 9.91341 1.6374 8.63634C1.43471 8.35214 1.33337 8.21001 1.33337 7.99967C1.33337 7.78934 1.43471 7.64721 1.6374 7.36301C2.54811 6.08597 4.87389 3.33301 8.00004 3.33301C11.1262 3.33301 13.452 6.08597 14.3627 7.36301Z" stroke="#2E8BC9" stroke-width="1.5"/>
<path d="M10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10C9.1046 10 10 9.1046 10 8Z" stroke="#2E8BC9" stroke-width="1.5"/>
</svg>
Front Of License</Button>
            <Button className="flex gap-2 items-center border-none shadow-md" variant="outline"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3627 7.36301C14.5654 7.64721 14.6667 7.78934 14.6667 7.99967C14.6667 8.21001 14.5654 8.35214 14.3627 8.63634C13.452 9.91341 11.1262 12.6663 8.00004 12.6663C4.87389 12.6663 2.54811 9.91341 1.6374 8.63634C1.43471 8.35214 1.33337 8.21001 1.33337 7.99967C1.33337 7.78934 1.43471 7.64721 1.6374 7.36301C2.54811 6.08597 4.87389 3.33301 8.00004 3.33301C11.1262 3.33301 13.452 6.08597 14.3627 7.36301Z" stroke="#2E8BC9" stroke-width="1.5"/>
<path d="M10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10C9.1046 10 10 9.1046 10 8Z" stroke="#2E8BC9" stroke-width="1.5"/>
</svg>
Back Of License</Button>
          </div>
        </div>
      </div>
    </div>
          )}
        {activeTab === "document" && (
     <div className="w-full max-w-2xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Files/Documents</h2>
        <button  className="text-[#2E8BC9] flex items-center gap-2 hover:bg-blue-50">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25" stroke="#2E8BC9" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16 18C16.5898 18.6068 18.1597 21 19 21C19.8403 21 21.4102 18.6068 22 18M19 20V13" stroke="#2E8BC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          Download all
        </button>
      </div>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                <p className="text-xs text-gray-500">{doc.size}</p>
              </div>
            </div>
            {doc.status === "downloading" ? (
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-blue-200 border-t-blue-600 animate-spin" />
                <Download className="w-4 h-4 text-[#2E8BC9]" />
              </div>
            ) : (
              <button  className="text-[#2E8BC9] hover:bg-blue-50">
                <Download className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
          )}
 {activeTab === "medication" && (
<div className="rounded-lg  bg-card text-card-foreground shadow-sm p-6 max-w-2xl mx-auto my-8">
      <div className="flex items-center gap-2 text-lg font-semibold mb-6">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9V7.81818C19 6.12494 19 5.27832 18.7478 4.60214C18.3424 3.5151 17.4849 2.65765 16.3979 2.2522C15.7217 2 14.8751 2 13.1818 2C10.2186 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375C3 7.73706 3 9.21865 3 12.1818V14.7273C3 17.7966 3 19.3313 3.79783 20.3971C4.02643 20.7025 4.29752 20.9736 4.60289 21.2022C5.66867 22 7.20336 22 10.2727 22H11C12.1698 22 14.5 22 14.5 22" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 14.3333H11.8403C12.5019 14.3333 12.8326 14.3333 13.0985 14.5076C13.3643 14.6818 13.5122 14.9956 13.8081 15.6232L15.4 19L17.6 12L19.1919 15.3768C19.4878 16.0044 19.6357 16.3182 19.9015 16.4924C20.1674 16.6667 20.4981 16.6667 21.1597 16.6667H22" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667H7.44444C7.9611 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45577 9.45576 8.00652 9.60988 7.43137C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <h2>Medical Information</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-base  font-semibold mb-3">Allergies</h3>
        <div className="shadow-md rounded-md">
        <div className="grid  grid-cols-4 bg-[#EDF4FA] text-sm font-medium text-muted-foreground bg-muted/50 p-2 rounded-t-md">
          <div>Name</div>
          <div className="text-right">Severity</div>
        </div>
        <div className="grid grid-cols-4 text-sm p-2 ">
          <div>Penicillin</div>
          <div className="text-right">Moderate</div>
        </div>
        <div className="grid grid-cols-4 bg-[#EDF4FA] text-sm p-2 bg-muted/20 ">
          <div>Penicillin</div>
          <div className="text-right">Moderate</div>
        </div>
      </div></div>

      <div className="mb-6">
        <h3 className="text-base font-semibold mb-3">Current Medications</h3>
            <div className="shadow-md rounded-md">
        <div className="grid grid-cols-4 bg-[#EDF4FA] text-sm font-medium text-muted-foreground bg-muted/50 p-2 rounded-t-md">
          <div>Name</div>
          <div className="text-right">Dosage</div>
        </div>
        <div className="grid grid-cols-4 text-sm p-2 ">
          <div>Lisinopril</div>
          <div className="text-right">Once daily</div>
        </div>
        <div className="grid grid-cols-4 bg-[#EDF4FA] text-sm p-2 bg-muted/20 ">
          <div>Metformin</div>
          <div className="text-right">Twice daily</div>
        </div>
      </div>
</div>
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-3">Existing Conditions</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Diabetes</li>
          <li>Hypertension</li>
          <li>Anxiety</li>
          <li>Depression</li>
          <li>Asthma</li>
          <li>None</li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold mb-3">Lifestyle Factors</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Smoking</li>
          <li>Former Smoker</li>
          <li>Alcohol</li>
        </ul>
      </div>
    </div>
 )}
     
      {activeTab === "insurance-info" && (
<div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <User className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Insurance Information</h2>
        </div>

        {/* Two-column layout for insurance details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <InsuranceColumn />
          <InsuranceColumn /> {/* Duplicate column to match the image */}
        </div>
      </div>
    </div>

      )}
       {activeTab === "caregiver" && (
 <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md p-2 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Caregiver List</h2>
        <div className="rounded-md overflow-hidden ">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-[#EDF4FA] text-gray-600 font-medium py-2 px-4 border-b border-gray-200">
            <div>Name</div>
            <div className="text-right">Action</div>
          </div>
          {/* Table Rows */}
          {caregivers.map((caregiver, index) => (
            <div
              key={caregiver.id}
              className={`grid grid-cols-2 items-center py-3 px-4 ${
                index % 2 === 0 ? "bg-white" : "bg-[#EDF4FA]"
              } `}
            >
              <div>{caregiver.name}</div>
              <div className="flex justify-end">
                <button  onClick={() => setActiveTab("caregiver_details")} className="text-gray-500 hover:text-gray-700" aria-label={`View details for ${caregiver.name}`}>
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
       )}
         {activeTab === "caregiver_details" && (
       <div className="flex justify-center py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
  <div className="w-full max-w-md space-y-6">
    <div className=" p-6 rounded-lg ">

      
      {/* Name Field */}
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          defaultValue="MD Mahmudur Rahman Talukder"
          readOnly
          className="w-full px-3 py-2 shadow-md rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Relation Field */}
      <div className="mb-5">
        <label htmlFor="relation" className="block text-sm font-medium text-gray-700 mb-1">
          Relation
        </label>
        <input
          id="relation"
          defaultValue="Brother"
          readOnly
          className="w-full px-3 py-2 shadow-md rounded-md bg-white   text-gray-700"
        />
      </div>

      {/* Date Of Birth Field */}
      <div className="mb-5">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
          Date Of Birth
        </label>
        <input
          id="dob"
          defaultValue="2 Feb 1999"
          readOnly
          className="w-full px-3 py-2  shadow-md rounded-md bg-white text-gray-700 mb-1"
        />
        <p className="text-xs text-gray-500">26 years old</p>
      </div>

      {/* Email Field */}
      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          defaultValue="example@email.com"
          readOnly
          className="w-full px-3 py-2 shadow-md rounded-md bg-white text-gray-700"
        />
      </div>

      {/* Phone Field */}
      <div className="mb-5">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          id="phone"
          defaultValue="+1 9999999999"
          readOnly
          className="w-full px-3 py-2 shadow-md rounded-md bg-white text-gray-700"
        />
      </div>

      {/* Optional Edit Button if needed later */}
      {/* <div className="flex justify-end mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Edit Details
        </button>
      </div> */}
    </div>
  </div>
</div>
            )}
        </div>
      </div>
    </div>
  );
}