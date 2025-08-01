"use client";
import { useState } from "react";
import { MessageSquare, CheckCircle2, XCircle, Download, CheckCircle, Clock, Calendar, MapPin, Eye, User, FileText, DownloadCloud, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("appointment");
  const [noteText, setNoteText] = useState("");
  
  const documents = [
    { name: "Document_Name.jpeg", size: "25kb", status: "downloading" },
    { name: "Document_Name.jpeg", size: "25kb", status: "ready" },
    { name: "Document_Name.jpeg", size: "25kb", status: "ready" },
    { name: "Document_Name.jpeg", size: "25kb", status: "ready" },
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
    addressLine1: "G987654321",
    city: "Manhattan",
    state: "NYC",
    zip: "00976",
    employerName: "Mahmudcompany",
    sex: "Male",
    dateOfBirth: "31/12/2006",
  };

  const caregivers = [
    { id: 1, name: "Jamal" },
    { id: 2, name: "Jony" },
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

  const DataField = ({ label, value }: { label: string; value: string }) => (
    <div className="grid gap-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );

  const InsuranceColumn = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <DataField label="Insurance Name" value={insuranceData.insuranceName} />
        <DataField label="Contract ID" value={insuranceData.contractId} />
        <DataField label="Group Number" value={insuranceData.groupNumber} />
        <DataField label="Expiration Date" value={insuranceData.expirationDate} />
      </div>
      <hr className="border-t border-gray-200" />

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Patient Relationship to Policy Holder</p>
        <p className="font-medium">{insuranceData.patientRelationship}</p>
      </div>
      <hr className="border-t border-gray-200" />

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

      <div className="space-y-4">
        <DataField label="Employer Name" value={insuranceData.employerName} />
        <DataField label="Sex" value={insuranceData.sex} />
        <DataField label="Date of Birth" value={insuranceData.dateOfBirth} />
      </div>
      <hr className="border-t border-gray-200" />

      <div className="space-y-4">
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Insurance Card</p>
          <Link href="#" className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
            <Eye className="w-4 h-4" />
            View Card
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Digital Signature</p>
          <Link href="#" className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
            <Eye className="w-4 h-4" />
            View Signature
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Draw Signature</p>
          <Image
            src="/Group.png?height=100&width=300"
            alt="Drawn Signature"
            width={300}
            height={100}
            className="border border-gray-200 rounded-md"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Section: Patient Profile and Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow p-6">
          {/* Patient Profile */}
          <div className="flex flex-col items-start border-r border-[#DCDCDC] gap-4 pr-5">
            <div className="w-16 h-16 rounded-full bg-[#2E8BC9] flex items-center justify-center text-white text-xl font-semibold">
              Ma
            </div>
            <div className="flex items-center gap-4">
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
            <button className="w-full bg-[#2E8BC9] hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center">
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
          <div className="grid w-3/4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 bg-[#F5F7F9] p-3 rounded-md mb-6">
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
                activeTab === "document" ? "bg-white p-5 shadow-md text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Document
            </button>
            <button
              onClick={() => setActiveTab("medication")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "medication" ? "bg-white p-5 shadow-md text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Medication
            </button>
            <button
              onClick={() => setActiveTab("insurance-info")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "insurance-info" ? "bg-white p-5 shadow-md text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Insurance Info
            </button>
            <button
              onClick={() => setActiveTab("caregiver")}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === "caregiver" ? "bg-white p-5 shadow-md text-gray-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Caregiver
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "appointment" && (
               <div className="flex justify-center py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen max-w-7xl">
      <div className="w-2/3 max-w-[7 00px] bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 space-y-6">
          {/* Doctor Info */}
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg"
              alt="Dr. Moule Marrk"
              width={64}
              height={64}
              className="rounded-full border-2 border-gray-200 w-20 h-20"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Dr. Moule Marrk</h2>
              <p className="text-sm text-gray-500">Cardiology</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Sylhet Health Center</span>
              </div>
            </div>
          </div>

          {/* Last Appointment Time */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Last Appointment Time</p>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>May 16, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>10:30 PM</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-600">
                <CheckCircle className="w-4 h-4" />
                <span>Complete</span>
              </div>
            </div>
          </div>

          {/* Reason for Visit */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Reason for Visit</p>
            <p className="text-sm text-gray-600">Need a cleaning</p>
          </div>

          {/* Visit Type */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Visit Type</p>
            <p className="text-sm text-gray-600">New Patient Visit</p>
          </div>

          {/* Insurance */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Insurance</p>
            <p className="text-sm text-gray-600">Blusky</p>
          </div>

          {/* Vital Signs */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900">Vital Signs</h3>
            <p className="text-sm text-gray-600">Blood Pressure : 130/85 mmHg</p>
            <p className="text-sm text-gray-600">Heart Rate : 88 bpm</p>
            <p className="text-sm text-gray-600">Temperature : 100.20F</p>
          </div>

          {/* SOAP Notes */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">SOAP Notes</h3>

            {/* Subjective */}
            <div className="rounded-md p-3 text-sm text-gray-700">
              <p className="font-semibold mb-1">Subjective</p>
              <p className="shadow-md rounded-md p-2">
                Patient presents for routine annual physical examination. Reports feeling well overall with no acute
                complaints. Denies chest pain, shortness of breath, or palpitations.
              </p>
            </div>

            {/* Objective */}
            <div className=" rounded-md p-3 text-sm text-gray-700">
              <p className="font-semibold mb-1">Objective</p>
              <p className="shadow-md rounded-md p-2">
                Vital signs stable. BP 120/80, HR 72, Temp 98.6°F. Physical examination unremarkable. Heart regular rate
                and rhythm, lungs clear bilaterally.
              </p>
            </div>

            {/* Assessment */}
            <div className=" rounded-md p-3 text-sm text-gray-700">
              <p className="font-semibold mb-1">Assessment</p>
              <p className="shadow-md rounded-md p-2">Healthy adult male for routine preventive care visit.</p>
            </div>

            {/* Plan */}
            <div className=" rounded-md p-3 text-sm text-gray-700">
              <p className="font-semibold mb-1">Plan</p>
              <p className="shadow-md rounded-md p-2">
                Continue current lifestyle habits. Return in 1 year for annual physical. Labs ordered for screening.
              </p>
            </div>
          </div>

          {/* Download Report */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900">Download Report</h3>
            <button className=" flex justify-center items-center py-2 px-4 text-blue-600 border border-blue-600 bg-transparent rounded-md hover:bg-blue-50 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>

          {/* Upcoming */}
          <div className="text-sm text-gray-600">
            Upcoming - <span className="text-blue-600">In 7 days</span>
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="p-6 pt-0">
          <Link href="/patients/edit">
          <button  className="w-full py-2 px-4 bg-[#2E8BC9] hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
            Edit Appointment
          </button>
          </Link>
          
        </div>
      </div>
    </div>
          )}
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
          <div className="flex gap-3">
            <Button variant="outline">Front Of License</Button>
            <Button variant="outline">Back Of License</Button>
          </div>
        </div>
      </div>
    </div>
          )}
        {activeTab === "document" && (
     <div className="w-full max-w-2xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Files/Documents</h2>
        <button  className="text-blue-600 hover:bg-blue-50">
          <DownloadCloud className="w-5 h-5 mr-2" />
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
                <Download className="w-4 h-4 text-blue-600" />
              </div>
            ) : (
              <button   className="text-blue-600 hover:bg-blue-50">
                <Download className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
          )}
 {activeTab === "medication" && (
<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 max-w-2xl mx-auto my-8">
      <div className="flex items-center gap-2 text-lg font-semibold mb-6">
        <FileText className="w-5 h-5" />
        <h2>Medical Information</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-base font-semibold mb-3">Allergies</h3>
        <div className="grid grid-cols-2 text-sm font-medium text-muted-foreground bg-muted/50 p-2 rounded-t-md">
          <div>Name</div>
          <div className="text-right">Severity</div>
        </div>
        <div className="grid grid-cols-2 text-sm p-2 border-b last:border-b-0">
          <div>Penicillin</div>
          <div className="text-right">Moderate</div>
        </div>
        <div className="grid grid-cols-2 text-sm p-2 bg-muted/20 border-b last:border-b-0">
          <div>Penicillin</div>
          <div className="text-right">Moderate</div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-base font-semibold mb-3">Current Medications</h3>
        <div className="grid grid-cols-2 text-sm font-medium text-muted-foreground bg-muted/50 p-2 rounded-t-md">
          <div>Name</div>
          <div className="text-right">Dosage</div>
        </div>
        <div className="grid grid-cols-2 text-sm p-2 border-b last:border-b-0">
          <div>Lisinopril</div>
          <div className="text-right">Once daily</div>
        </div>
        <div className="grid grid-cols-2 text-sm p-2 bg-muted/20 border-b last:border-b-0">
          <div>Metformin</div>
          <div className="text-right">Twice daily</div>
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
 <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Caregiver List</h2>
        <div className="rounded-md overflow-hidden border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-blue-50 text-gray-600 font-medium py-2 px-4 border-b border-gray-200">
            <div>Name</div>
            <div className="text-right">Action</div>
          </div>
          {/* Table Rows */}
          {caregivers.map((caregiver, index) => (
            <div
              key={caregiver.id}
              className={`grid grid-cols-2 items-center py-3 px-4 ${
                index % 2 === 0 ? "bg-blue-50" : "bg-white"
              } border-b border-gray-200 last:border-b-0`}
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
  <div className="flex justify-center py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
    <div className="w-full max-w-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Caregiver Details</h2>
      
      {/* Name Field */}
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          id="name"
          defaultValue="MD Mahmudur Rahman Talukder"
          readOnly
          className="block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Relation Field */}
      <div className="space-y-1">
        <label htmlFor="relation" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Relation
        </label>
        <input 
          id="relation" 
          defaultValue="Brother" 
          readOnly 
          className="block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
        />
      </div>

      {/* Date Of Birth Field */}
      <div className="space-y-1">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Date Of Birth
        </label>
        <input 
          id="dob" 
          defaultValue="2 Feb 1999" 
          readOnly 
          className="block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">26 years old</p>
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          id="email"
          defaultValue="example@email.com"
          readOnly
          className="block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Phone Field */}
      <div className="space-y-1">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Phone
        </label>
        <input 
          id="phone" 
          defaultValue="+1 9999999999" 
          readOnly 
          className="block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
        />
      </div>
    </div>
  </div>
)}

          {/* Other tab contents would go here */}
        </div>
      </div>
    </div>
  );
}