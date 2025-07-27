"use client"
import { useState } from 'react';

export default function PatientInformationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    sex: 'male',
    maritalStatus: 'single',
    bloodGroup: 'o-positive',
    numChildren: '0',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: 'ca',
    zipCode: '',
    employer: '',
    driverLicense: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-gray-600"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        Patient Information
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Hi! Please share your personal info to verify your identity and stay connected with your healthcare providers.
      </p>

      <form className="grid gap-6">
        {/* Full Name */}
        <div className="grid gap-2">
          <label htmlFor="full-name" className="text-sm font-medium text-gray-700">Full Name</label>
          <input
              id="first-name"
              name="firstName"
              placeholder="First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.firstName}
              onChange={handleChange}
            /><div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            
            <input
              id="middle-name"
              name="middleName"
              placeholder="Middle"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.middleName}
              onChange={handleChange}
            />
            <input
              id="last-name"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Date Of Birth */}
        <div className="grid gap-2">
          <label htmlFor="dob" className="text-sm font-medium text-gray-700">Date Of Birth</label>
          <div className="relative">
            <input
              id="dob"
              name="dob"
              placeholder="mm/dd/yyyy"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
              value={formData.dob}
              onChange={handleChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>

        {/* Sex */}
        <div className="grid gap-2">
          <label htmlFor="sex" className="text-sm font-medium text-gray-700">Sex</label>
          <select
            id="sex"
            name="sex"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Marital Status */}
        <div className="grid gap-2">
          <label htmlFor="marital-status" className="text-sm font-medium text-gray-700">Marital Status</label>
          <select
            id="marital-status"
            name="maritalStatus"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>

        {/* Blood Group */}
        <div className="grid gap-2">
          <label htmlFor="blood-group" className="text-sm font-medium text-gray-700">Blood Group</label>
          <select
            id="blood-group"
            name="bloodGroup"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="o-positive">O+</option>
            <option value="o-negative">O-</option>
            <option value="a-positive">A+</option>
            <option value="a-negative">A-</option>
            <option value="b-positive">B+</option>
            <option value="b-negative">B-</option>
            <option value="ab-positive">AB+</option>
            <option value="ab-negative">AB-</option>
          </select>
        </div>

        {/* Number Of Children */}
        <div className="grid gap-2">
          <label htmlFor="num-children" className="text-sm font-medium text-gray-700">
            Number Of Children <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="num-children"
            name="numChildren"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.numChildren}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="sakib@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 9999999999"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Address Line 1 */}
        <div className="grid gap-2">
          <label htmlFor="address-line1" className="text-sm font-medium text-gray-700">Address Line 1</label>
          <input
            id="address-line1"
            name="addressLine1"
            placeholder="Street address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.addressLine1}
            onChange={handleChange}
          />
        </div>

        {/* Address Line 2 */}
        <div className="grid gap-2">
          <label htmlFor="address-line2" className="text-sm font-medium text-gray-700">
            Address Line 2 <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="address-line2"
            name="addressLine2"
            placeholder="Apartment, suite, unit, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </div>

        {/* City, State, Zip Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="grid gap-2">
            <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
            <input
              id="city"
              name="city"
              placeholder="City"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="state" className="text-sm font-medium text-gray-700">State</label>
            <select
              id="state"
              name="state"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="ca">California</option>
              <option value="ny">New York</option>
              <option value="tx">Texas</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="zip-code" className="text-sm font-medium text-gray-700">Zip Code</label>
            <input
              id="zip-code"
              name="zipCode"
              placeholder="Zip Code"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Employer */}
        <div className="grid gap-2">
          <label htmlFor="employer" className="text-sm font-medium text-gray-700">Employer</label>
          <input
            id="employer"
            name="employer"
            placeholder="Company name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.employer}
            onChange={handleChange}
          />
        </div>

        {/* Driver's License */}
        <div className="grid gap-2">
          <label htmlFor="driver-license" className="text-sm font-medium text-gray-700">Driver's License</label>
          <input
            id="driver-license"
            name="driverLicense"
            placeholder="License number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.driverLicense}
            onChange={handleChange}
          />
        </div>

        {/* Upload Driver's License Images */}
        <div className="grid gap-4">
          <label className="text-sm font-medium text-gray-700">Upload Driver's License Images</label>
          <div className="grid gap-4">
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-blue-200 rounded-lg bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span className="text-sm">
                Upload/capture License <span className="font-medium">Front</span>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-blue-200 rounded-lg bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span className="text-sm">
                Upload/capture License <span className="font-medium">Back</span>
              </span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Information
        </button>
      </form>
    </div>
  );
}