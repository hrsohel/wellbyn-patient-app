import { Search, Heart, Clock, Check } from "lucide-react"
import Image from "next/image"

interface Doctor {
  id: number
  name: string
  specialization: string
  organization: string
  image: string
  timesAvailable: number
  isFavorite: boolean
  isVerified?: boolean
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Leo Marwick",
    specialization: "Heart Health Expert",
    organization: "Riverbend Health",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    timesAvailable: 3,
    isFavorite: true,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    organization: "Harmony Health",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    timesAvailable: 3,
    isFavorite: true,
    isVerified: true,
  },
  // Add more doctors as needed
]

export default function DoctorSearch() {
  const favoriteCount = doctors.filter((doctor) => doctor.isFavorite).length

  return (
    <div className="mx-auto p-3 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for a doctor by name or designation..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 h-12"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-6 mb-6">
        <button className="text-gray-900 border-b-2 border-gray-900 rounded-none px-0 pb-2 font-medium text-sm">
          All
        </button>
        <button className="text-gray-500 hover:text-gray-900 rounded-none px-0 pb-2 font-medium text-sm">
          Favorite ({favoriteCount})
        </button>
      </div>

      {/* Available Doctor Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Available Doctor</h2>
      </div>

      {/* Doctor Grid - Using your exact card styling */}
      <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 rounded-2xl pb-2">
        {doctors.map((doctor) => (
          <div
            className="w-full p-2 md:p-3 bg-white rounded-lg shadow-[0px_3px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-start md:gap-3"
            key={doctor.id}
          >
            {/* Image and Favorite Icon */}
            <div className="relative w-full h-44 rounded-lg overflow-hidden">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={320}
                height={176}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Favorite Icon */}
              <div className="absolute top-2 right-2 cursor-pointer p-1 z-10">
                {doctor.isFavorite ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.92153 12.4469C1.84853 9.09692 3.10353 4.93192 6.62053 3.79992C8.47054 3.20292 10.7535 3.70092 12.0505 5.48992C13.2735 3.63492 15.6225 3.20692 17.4705 3.79992C20.9865 4.93192 22.2485 9.09692 21.1765 12.4469C19.5065 17.7569 13.6795 20.5229 12.0505 20.5229C10.4225 20.5229 4.64753 17.8189 2.92153 12.4469Z"
                      fill="#E63D75"
                      stroke="#E63D75"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.7881 7.56445C16.9951 7.68845 17.7501 8.64545 17.7051 9.98645"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.72134 12.4469C2.64834 9.09692 3.90334 4.93192 7.42034 3.79992C9.27034 3.20292 11.5533 3.70092 12.8503 5.48992C14.0733 3.63492 16.4223 3.20692 18.2703 3.79992C21.7863 4.93192 23.0483 9.09692 21.9763 12.4469C20.3063 17.7569 14.4793 20.5229 12.8503 20.5229C11.2223 20.5229 5.44734 17.8189 3.72134 12.4469Z"
                      stroke="#3D3D3D"
                      strokeWidth="2.16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5889 7.56445C17.7959 7.68845 18.5509 8.64545 18.5059 9.98645"
                      stroke="#3D3D3D"
                      strokeWidth="2.16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Doctor Info */}
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-xl md:text-2xl font-medium font-['Satoshi'] leading-loose tracking-tight text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-sm md:text-base font-medium font-['Satoshi'] leading-tight tracking-tight text-gray-600">
                  {doctor.specialization}
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.4163 1.66602C6.50432 1.66602 3.33301 4.68087 3.33301 8.39993C3.33301 10.5264 4.21842 12.1799 5.98926 13.6568C7.23744 14.6978 8.74959 16.4269 9.65742 17.8286C10.0928 18.5007 10.7086 18.5007 11.1753 17.8286C12.1291 16.4548 13.5953 14.6978 14.8434 13.6568C16.6143 12.1799 17.4997 10.5264 17.4997 8.39993C17.4997 4.68087 14.3283 1.66602 10.4163 1.66602Z"
                    stroke="#3D75E6"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.75 5.83398V8.33398M8.75 8.33398V10.834M8.75 8.33398H12.0833M12.0833 5.83398V8.33398M12.0833 8.33398V10.834"
                    stroke="#3D75E6"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-lg font-semibold font-['Satoshi'] leading-normal tracking-tight text-gray-900 truncate">
                  {doctor.organization}
                </span>
              </div>

              {/* Available Times */}
              <div className="flex items-center justify-between">
                <span className="text-base font-medium font-['Satoshi'] leading-tight tracking-tight text-gray-900">
                  {doctor.timesAvailable} available time
                </span>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.62912 4.55078H7.76107C5.30583 4.55078 4.07822 4.55078 3.31548 5.28301C2.55273 6.01525 2.55273 7.19376 2.55273 9.55078V12.8841C2.55273 15.2411 2.55273 16.4196 3.31548 17.1519C4.07822 17.8841 5.30583 17.8841 7.76107 17.8841H11.2666C13.7218 17.8841 14.9494 17.8841 15.7122 17.1519C16.2063 16.6774 16.3803 16.0157 16.4416 14.9674"
                    stroke="#3D3D3D"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.2721 6.63346V4.01142C14.2721 3.84871 14.4095 3.7168 14.579 3.7168C14.6603 3.7168 14.7384 3.74784 14.796 3.80309L18.7394 7.58884C18.936 7.77748 19.0463 8.03335 19.0463 8.30013C19.0463 8.56691 18.936 8.82278 18.7394 9.01142L14.796 12.7971C14.7384 12.8525 14.6603 12.8835 14.579 12.8835C14.4095 12.8835 14.2721 12.7515 14.2721 12.5888V9.9668H11.7296C8.19564 9.9668 6.89355 12.8835 6.89355 12.8835V10.8001C6.89355 8.49895 8.83676 6.63346 11.2338 6.63346H14.2721Z"
                    stroke="#3D3D3D"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}