import Image from "next/image"
import { Calendar, Users, Eye, Edit, Search, TrendingUp, User, Mail, Phone } from "lucide-react"

const appointmentsData = [
  {
    id: "P60768",
    patientName: "Rani Rahman",
    initial: "R",
    contact: "sarah_illustrates@gmail.com\n(555) 123-4567",
    gender: "Male",
    lastVisit: "04-30-2026",
    status: "In Care",
  },
  {
    id: "JOKIL2",
    patientName: "Tariq Rahman",
    initial: "T",
    contact: "sarah_illustrates@gmail.com\n(555) 123-4567",
    gender: "Male",
    lastVisit: "03-15-2027",
    status: "Recovered",
  },
  {
    id: "V2W3X4",
    patientName: "Maya Rahman",
    initial: "M",
    contact: "sarah_illustrates@gmail.com\n(555) 123-4567",
    gender: "Male",
    lastVisit: "01-01-2028",
    status: "In Care",
  },
  {
    id: "DEF5G8",
    patientName: "Sami Rahman",
    initial: "S",
    contact: "sarah_illustrates@gmail.com\n(555) 123-4567",
    gender: "Female",
    lastVisit: "06-14-2027",
    status: "Recovered",
  },
  {
    id: "M3N4O5",
    patientName: "Zara Rahman",
    initial: "Z",
    contact: "sarah_illustrates@gmail.com\n(555) 123-4567",
    gender: "Male",
    lastVisit: "10-10-2025",
    status: "In Care",
  },
  {
    id: "S9T0U1",
    patientName: "Nashit Rahman",
    initial: "N",
    contact: "sarah_illustrates@gmail.com\n(555) 123-4567",
    gender: "Female",
    lastVisit: "02-20-2027",
    status: "In Care",
  },
  {
    id: "B8C9D0",
    patientName: "Fahim Rahman",
    initial: "F",
    contact: "sarah_illustrates@gmail.com\n(555) 123-4567",
    gender: "Female",
    lastVisit: "09-10-2028",
    status: "Recovered",
  },
  {
    id: "G7H8I9",
    patientName: "Riya Rahman",
    initial: "R",
    contact: "sarah_illustrates@gmail.com\n(555) 123-4567",
    gender: "Male",
    lastVisit: "11-22-2025",
    status: "Recovered",
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}

    <div className="w-full mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Doctor Profile Section */}
            <div className="flex-1 lg:w-1/2">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Dr. Mahmudur Rahman</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span className="font-medium">Doctor ID :</span>
                      <span>PGD7RB</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="font-medium">Email :</span>
                      <span>omahmuduhr@gmail.com</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">Mobile :</span>
                      <span>+8801770504877</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-2 rounded-md text-sm font-medium inline-flex items-center transition-colors">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            
            {/* Appointments Section */}
            <div className="flex-1 lg:w-1/2">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Appointments</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-sm text-gray-600 mb-1">Today</div>
                  <div className="text-2xl font-bold text-gray-900">10</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <User className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="text-sm text-gray-600 mb-1">Total Patient</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-2xl font-bold text-gray-900">7</div>
                    <div className="text-xs text-green-600 font-medium">+18%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


        {/* Appointments Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Appointment</h3>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="pl-10 w-64 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <select
                  defaultValue="all"
                  className="w-32 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="in-care">In Care</option>
                  <option value="recovered">Recovered</option>
                </select>
                <select
                  defaultValue="today"
                  className="w-24 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patients Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gender
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Visit
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointmentsData.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {appointment.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-sm">
                            {appointment.initial}
                          </div>
                          <span className="text-sm text-gray-900">{appointment.patientName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {appointment.contact.split("\n").map((line, index) => (
                            <div key={index} className={index === 0 ? "text-blue-600" : "text-gray-600"}>
                              {line}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {appointment.gender}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {appointment.lastVisit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            appointment.status === "In Care"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <Edit className="h-4 w-4" />
                          </button>
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
    </div>
  )
}