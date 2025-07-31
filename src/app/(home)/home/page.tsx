"use client";
import { Calendar, CheckCircle, Clock } from "lucide-react";
import React, { useState } from "react";

const HomePage = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Alice Smith",
      specialty: "Cardiologist",
      location: "New York, NY",
      isFavorite: true,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 2,
      name: "Dr. John Doe",
      specialty: "Dermatologist",
      location: "Los Angeles, CA",
      isFavorite: false,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Dr. Max Garcia",
      specialty: "Pediatrician",
      location: "Chicago, IL",
      isFavorite: false,
      image: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      id: 4,
      name: "Dr. John Cena",
      specialty: "Pediatrician",
      location: "Chicago, IL",
      isFavorite: false,
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  return (
    <>
      <div className="p-6 bg-Surface-Dashboard-dashboard-page h-screen flex flex-col gap-6 mb-10">
        {/* Hey Section */}
        <div className="w-full self-stretch p-3 bg-Surface-warning rounded-lg inline-flex justify-start items-start gap-3 border md:border-0 border-Border-warning">
          <div className="flex-1 inline-flex flex-col justify-center items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
              <div className="self-stretch flex flex-col justify-start items-start gap-[3px]">
                <div className="self-stretch justify-center">
                  <span className="text-Text-primary text-base font-bold  leading-tight tracking-tight">
                    Hey!
                    <br />
                  </span>
                  <span className="text-Text-primary text-base font-medium  leading-tight tracking-tight">
                    Make sure your profile is at least 70% complete before you
                    can book an appointment.
                  </span>
                </div>
              </div>
            </div>
            <div
              data-show-left-icon-2="false"
              data-show-left-icon="false"
              data-state="Default"
              data-style="Outline"
              data-variant="Secondary"
              className="rounded-lg inline-flex justify-start items-center gap-2 overflow-hidden"
            >
              <div className="justify-center text-Text-action text-base font-medium font-['Satoshi'] capitalize leading-tight tracking-tight">
                Start
              </div>
              <div className="w-4 h-4 relative">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3336 8H2.66699"
                    stroke="#2E8BC9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0001 11.3327C10.0001 11.3327 13.3333 8.87775 13.3333 7.99935C13.3333 7.12095 10 4.66602 10 4.66602"
                    stroke="#2E8BC9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Next Appointment */}
        <div className="self-stretch flex justify-center items-center gap-2.5">
          <div className="justify-center text-Text-primary text-xl md:text-2xl font-medium font-['Satoshi'] leading-loose tracking-tight">
            Next Appointment
          </div>
          <div className="flex-1 text-right justify-center text-Text-action text-sm md:text-lg font-medium font-['Satoshi'] leading-normal tracking-tight">
            View all
          </div>
        </div>

    
      {/* Doctor Cards Grid - now 2 columns on md screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="p-3 bg-white rounded-lg shadow-[0px_3px_4px_0px_rgba(26,64,96,0.10)] flex flex-col gap-3"
          >
            {/* Doctor Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  className="w-16 h-16 rounded-[40.50px] object-cover"
                  src={doctor.image}
                  alt={doctor.name}
                />
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-xl font-medium font-['Satoshi'] leading-7 tracking-tight text-gray-900">
                      {doctor.name}
                    </div>
                    <div className="text-base font-medium font-['Satoshi'] leading-tight tracking-tight text-gray-600">
                      {doctor.specialty}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                    <div className="text-base font-medium font-['Satoshi'] leading-tight tracking-tight text-gray-900">
                      {doctor.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-10 p-2 bg-blue-500 rounded-lg shadow-[0px_0px_4px_1px_rgba(228,239,250,1.00)] flex justify-center items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.5C17.5221 2.5 21.9998 6.78341 22 12.0664C22 17.3496 17.5222 21.6338 12 21.6338C11.3507 21.6347 10.7032 21.5738 10.0654 21.4541C9.60664 21.3679 9.37703 21.3252 9.2168 21.3496C9.05654 21.3741 8.82916 21.4947 8.375 21.7363C7.0902 22.4196 5.59215 22.6605 4.15137 22.3926C4.69879 21.7191 5.07229 20.9111 5.2373 20.0449C5.3373 19.5149 5.08986 18.9999 4.71875 18.623C3.03325 16.9115 2 14.6048 2 12.0664C2.00017 6.78341 6.47788 2.5 12 2.5ZM8 11.5C7.44772 11.5 7 11.9477 7 12.5C7 13.0523 7.44772 13.5 8 13.5H8.00879C8.56107 13.5 9.00879 13.0523 9.00879 12.5C9.00879 11.9477 8.56107 11.5 8.00879 11.5H8ZM11.9951 11.5C11.443 11.5002 10.9951 11.9478 10.9951 12.5C10.9951 13.0522 11.443 13.4998 11.9951 13.5H12.0049L12.1064 13.4951C12.6109 13.4441 13.0049 13.0179 13.0049 12.5C13.0049 11.9821 12.6109 11.5559 12.1064 11.5049L12.0049 11.5H11.9951ZM15.9912 11.5C15.4389 11.5 14.9912 11.9477 14.9912 12.5C14.9912 13.0523 15.4389 13.5 15.9912 13.5H16C16.5523 13.5 17 13.0523 17 12.5C17 11.9477 16.5523 11.5 16 11.5H15.9912Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            {/* Date & Time Section */}
            <div className="pt-2">
              <h3 className="text-gray-900 font-medium mb-3">Date & Time</h3>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">May 16, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">10:30 PM</span>
                </div>
                <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33301 9.33398L5.66634 11.6673L12.6663 4.33398" stroke="#237B10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                  <span className="text-green-600 text-sm font-medium">Complete</span>
                </div>
              </div>
            </div>

            {/* Visit Type Section */}
            <div className="w-full pt-2">
              <h3 className="text-gray-900 font-medium mb-2">Visit Type</h3>
              <p className="p-3 rounded-md shadow-md text-gray-600">New Patient Visit</p>
            </div>

            {/* Insurance Section */}
            <div className="w-full pt-2">
              <h3 className="text-gray-900 font-medium mb-2">Insurance</h3>
              <div className="p-3 rounded-md text-gray-600 shadow-md w-full">Blusky</div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col gap-2.5">
              <div className="text-base font-medium  leading-tight tracking-tight text-gray-600">
                Can't make it on this date?
              </div>
              <div className="flex items-center gap-4">
                <div className="px-3.5 py-2 bg-green-50 cursor-pointer rounded-lg shadow-[0px_0px_4px_0px_rgba(5,21,9,0.12)] flex items-center gap-2 group">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:animate-spin"
                  >
                    <path
                      d="M11.3178 13C12.9345 11.9251 14 10.087 14 8C14 4.68629 11.3137 2 8 2C7.54173 2 7.09547 2.05137 6.66667 2.14868M11.3178 13V10.6667M11.3178 13H13.6667M4.66667 3.01037C3.05869 4.08671 2 5.91972 2 8C2 11.3137 4.68629 14 8 14C8.45827 14 8.90453 13.9486 9.33333 13.8513M4.66667 3.01037V5.33333M4.66667 3.01037H2.33333"
                      stroke="#2E8BC9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-base font-medium  capitalize leading-tight tracking-wide text-blue-600 cursor-pointer">
                    Reschedule
                  </div>
                </div>
                <div className="text-base font-medium  leading-tight tracking-tight text-gray-600">
                  OR
                </div>
                <div className="px-3.5 py-2 bg-white rounded-lg shadow-md flex items-center gap-2">
                  <div className="text-base font-medium  capitalize leading-tight tracking-tight text-red-500 cursor-pointer">
                    Cancel
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
 

        {/* Available Doctor */}
        <div className="self-stretch flex justify-center items-center gap-2.5">
          <div className="justify-center text-Text-primary text-xl md:text-2xl font-medium font-['Satoshi'] leading-loose tracking-tight">
            Available Doctor
          </div>
          <div className="flex-1 text-right justify-center text-Text-action text-sm md:text-lg font-medium font-['Satoshi'] leading-normal tracking-tight">
            View all
          </div>
        </div>

   <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 rounded-2xl pb-2">
  {doctors.map((doctor) => (
    <div
      className="w-full p-2 md:p-3 bg-Surface-primary rounded-lg shadow-[0px_3px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-start md:gap-3"
      key={doctor.id}
    >
      {/* Image and Favorite Icon */}
      <div className="relative w-full h-44 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={doctor.image}
          alt={doctor.name}
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
          <h3 className="text-xl md:text-2xl font-medium font-['Satoshi'] leading-loose tracking-tight text-Text-primary">
            {doctor.name}
          </h3>
          <p className="text-sm md:text-base font-medium font-['Satoshi'] leading-tight tracking-tight text-Text-secondary">
            {doctor.specialty}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.4163 2.4668C6.50432 2.4668 3.33301 5.48166 3.33301 9.20071C3.33301 11.3272 4.21842 12.9807 5.98926 14.4576C7.23744 15.4986 8.74959 17.2277 9.65742 18.6294C10.0928 19.3015 10.7086 19.3015 11.1753 18.6294C12.1291 17.2556 13.5953 15.4986 14.8434 14.4576C16.6143 12.9807 17.4997 11.3272 17.4997 9.20071C17.4997 5.48166 14.3283 2.4668 10.4163 2.4668Z"
              stroke="#3D75E6"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
            <path
              d="M8.75 6.63477V9.13477M8.75 9.13477V11.6348M8.75 9.13477H12.0833M12.0833 6.63477V9.13477M12.0833 9.13477V11.6348"
              stroke="#3D75E6"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-lg font-semibold font-['Satoshi'] leading-normal tracking-tight text-Text-primary truncate">
            {doctor.location}
          </span>
        </div>

        {/* Available Times */}
        <div className="flex items-center justify-between">
          <span className="text-base font-medium font-['Satoshi'] leading-tight tracking-tight text-Text-primary">
            3{doctor.availableTimes} available time
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
    </>
  );
};

export default HomePage;
