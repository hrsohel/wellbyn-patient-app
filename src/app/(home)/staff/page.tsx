import { Plus, Download, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";

const staffData = [
  {
    id: "P6Q7R8",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Rami Rahman Chowdhury",
    email: "sarah_illustrates@gmail.com",
    number: "(555) 123-4567",
  },
  {
    id: "J0K1L2",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Tariq Rahman Chowdhury",
    email: "ajay.creative@gmail.com",
    number: "(555) 456-7890",
  },
  {
    id: "V2W3X4",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Maya Rahman Chowdhury",
    email: "stephanie.codes@gmail.com",
    number: "(555) 789-0123",
  },
  {
    id: "D4E5F6",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Sami Rahman Chowdhury",
    email: "michael.dev@icloud.com",
    number: "(555) 012-3456",
  },
  {
    id: "M3N4O5",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Zara Rahman Chowdhury",
    email: "peter_works@outlook.com",
    number: "(555) 345-6780",
  },
  {
    id: "S9T0U1",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Nashit Rahman Chowdhury",
    email: "oliver.uiuxdesign@gmail.com",
    number: "(555) 678-9013",
  },
  {
    id: "B8C9D0",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Fahim Rahman Chowdhury",
    email: "linda_graphics@yahoo.com",
    number: "(555) 901-2346",
  },
  {
    id: "G7H8I9",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Riya Rahman Chowdhury",
    email: "roberto_ux@outlook.com",
    number: "(555) 234-5680",
  },
  {
    id: "Y5Z6A7",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Ayaan Rahman Chowdhury",
    email: "jessica.designs@example.com",
    number: "(555) 567-8903",
  },
  {
    id: "E1F2G3",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Hadi Rahman Chowdhury",
    email: "emily_dev@live.com",
    number: "(555) 890-1236",
  },
  {
    id: "A1B2C3",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Sofia Elham Rahman",
    email: "nina.creates@example.com",
    number: "(555) 123-4570",
  },
  {
    id: "H4I5J6",
    avatar: "/placeholder.svg?height=32&width=32",
    name: "Lina Rahman Chowdhury",
    email: "david_graphics@hotmail.com",
    number: "(555) 456-7893",
  },
];

export default function StaffTable() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 min-h-screen">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 flex flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Staff</h2>
            <p className="text-sm text-gray-500">Manage all the staff</p>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Export Data
            </button>
            <Link href="/staff/info1">
             <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-[#2E8BC9] text-white hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              Add New
            </button>
            </Link>
           
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
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Number
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staffData.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {staff.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 mr-3">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={staff.avatar || "/placeholder.svg"}
                          alt={`${staff.name}'s avatar`}
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <Link href="/staff/info">
                           <button className="p-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50">
                        <SquarePen className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </button>
                      </Link>
                 
                      <button className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
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
  );
}