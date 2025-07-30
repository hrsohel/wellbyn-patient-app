"use client"

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function CheckInForm() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [healthChanges, setHealthChanges] = useState("no");
  const [changesDetails, setChangesDetails] = useState("");
  const [takingMeds, setTakingMeds] = useState("no");

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const symptoms = [
    "Bleeding gums",
    "Loose teeth",
    "Tooth sensitivity",
    "Jaw pain or clicking"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Check In Information Card */}
      <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium text-gray-700">Check In Information</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Doctor Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4">Doctor</h3>
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-medium">
                  MM
                </div>
                <div>
                  <p className="font-medium text-gray-900">Dr. Moule Manix</p>
                  <p className="text-sm text-gray-600">Cardiology</p>
                  <p className="text-sm text-gray-500">• Sylfat Health Center</p>
                </div>
              </div>
            </div>

            {/* Patient Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4">Patients</h3>
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  Ma
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Mahmudur Rahman</p>
                  <p className="text-sm text-gray-500">Patient ID: P#2789</p>
                </div>
                <MessageCircle className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Questionnaire */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="space-y-8">
            {/* Question 1 */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Are you currently experiencing any of the following?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {symptoms.map((symptom) => (
                  <div key={symptom} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={symptom.replace(/\s+/g, "-").toLowerCase()}
                      checked={selectedSymptoms.includes(symptom)}
                      onChange={() => toggleSymptom(symptom)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={symptom.replace(/\s+/g, "-").toLowerCase()}
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      {symptom}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Have you had any changes in your oral health since your last visit?
              </h3>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="changes-yes"
                    name="health-changes"
                    value="yes"
                    checked={healthChanges === "yes"}
                    onChange={() => setHealthChanges("yes")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="changes-yes" className="text-sm text-gray-700 cursor-pointer">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="changes-no"
                    name="health-changes"
                    value="no"
                    checked={healthChanges === "no"}
                    onChange={() => setHealthChanges("no")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="changes-no" className="text-sm text-gray-700 cursor-pointer">
                    No
                  </label>
                </div>
              </div>
              {healthChanges === "yes" && (
                <div className="mt-3">
                  <label htmlFor="changes-details" className="text-sm text-gray-600">
                    what?
                  </label>
                  <input
                    type="text"
                    id="changes-details"
                    value={changesDetails}
                    onChange={(e) => setChangesDetails(e.target.value)}
                    className="mt-1 block w-full max-w-md rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Are you currently taking any dental-related medications or antibiotics?
              </h3>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="medications-yes"
                    name="taking-meds"
                    value="yes"
                    checked={takingMeds === "yes"}
                    onChange={() => setTakingMeds("yes")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="medications-yes" className="text-sm text-gray-700 cursor-pointer">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="medications-no"
                    name="taking-meds"
                    value="no"
                    checked={takingMeds === "no"}
                    onChange={() => setTakingMeds("no")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="medications-no" className="text-sm text-gray-700 cursor-pointer">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}