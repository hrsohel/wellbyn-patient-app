import { Camera } from "lucide-react"
import Image from "next/image"
export default function StaffInfoForm() {
  return (
    <div className="flex justify-center   bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Staff Info</h2>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div className="flex flex-col items-start">
      <div className="relative w-32 h-32 mb-4">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-200">
          <Image 
            src="/maleDoctor.png" 
            className="object-cover w-full h-full" 
            width={128} 
            height={128} 
            alt="Staff Avatar" 
          />
        </div>
        <button
          type="button"
          className="absolute bottom-1 right-1 rounded-full w-8 h-8 border-2 border-white bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center shadow-md transition-colors duration-200"
          aria-label="Change avatar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-4">Click the camera icon to change photo</p>
    </div>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Dr. Moule Marrk"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="omahmudur9@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 9999999999"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Temporary Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="ksdjfb83974"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#2E8BC9] text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Staff
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}