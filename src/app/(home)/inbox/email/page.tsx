"use client"

import { useState } from "react"
import { Star, Mail, MessageSquare, Phone, Search } from "lucide-react"
import Link from "next/link"

interface EmailItemProps {
  id: number
  sender: string
  subject: string
  time: string
  starred: boolean
}

const EmailItem = ({ sender, subject, time, starred }: EmailItemProps) => {
  const [isStarred, setIsStarred] = useState(starred)

  const toggleStar = () => {
    setIsStarred(!isStarred)
  }

  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
      <button onClick={toggleStar} className="focus:outline-none">
        <Star
          className={`h-5 w-5 ${isStarred ? "fill-yellow-400 text-yellow-400" : "text-gray-400 dark:text-gray-600"}`}
        />
      </button>
      <div className="flex-1 grid gap-1">
        <div className="font-medium">{sender}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{subject}</div>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{time}</div>
    </div>
  )
}

const EmailList = () => {
  const emails = [
    {
      id: 1,
      sender: "Nelson lane",
      subject: "Lorem ipsum perspiciatis unde omnis iste natus",
      time: "12:30 PM",
      starred: false,
    },
    {
      id: 2,
      sender: "Nelson lane",
      subject: "Lorem ipsum perspiciatis unde omnis iste natus",
      time: "12:30 PM",
      starred: true,
    },
    // ... (rest of the email data remains the same)
    {
      id: 20,
      sender: "Nelson lane",
      subject: "Lorem ipsum perspiciatis unde omnis iste natus",
      time: "12:30 PM",
      starred: false,
    },
  ]

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
        {emails.map((email) => (
          <EmailItem key={email.id} {...email} />
        ))}
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="w-64 border-r bg-white p-4 dark:bg-gray-900 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Inbox</h2>
      
      {/* Navigation */}
      <nav className="space-y-2 mb-6">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <Phone className="h-5 w-5" />
          Whatsapp
        </div>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <MessageSquare className="h-5 w-5" />
          SMS
        </div>
        <Link href="/inbox/email" className="flex items-center gap-3 rounded-lg bg-blue-100 px-3 py-2 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
          <Mail className="h-5 w-5" />
          Email
          <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">10</span>
        </Link>
      </nav>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <input
          className="w-full rounded-lg bg-gray-100 pl-9 py-2 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search here ..."
          type="search"
        />
      </div>

      {/* Email categories */}
      <nav className="space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-blue-100 px-3 py-2 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
          Email
        </div>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          Draft
        </div>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          Important
        </div>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          Sent
        </div>
      </nav>
    </div>
  )
}

export default function EmailInbox() {
  return (
    <div className="relative flex h-screen bg-white dark:bg-gray-900">
      <Sidebar />
      <EmailList />
      <Link href="/inbox/modal">
      <button className="p-5 m-5 flex text-white gap-2 items-center absolute right-0 bottom-0 px-6 py-2 bg-[#2E8BC9]"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4072 3.88545C15.1524 3.07808 15.525 2.6744 15.9209 2.43893C16.8762 1.87076 18.0526 1.85309 19.0239 2.39232C19.4264 2.6158 19.8104 3.00812 20.5785 3.79276C21.3466 4.5774 21.7307 4.96972 21.9494 5.38093C22.4773 6.37312 22.46 7.57479 21.9038 8.5507C21.6733 8.95516 21.2781 9.33578 20.4878 10.097L11.0841 19.1543C9.58638 20.5969 8.8375 21.3182 7.90156 21.6837C6.96562 22.0493 5.9367 22.0224 3.87886 21.9686L3.59888 21.9613C2.97241 21.9449 2.65917 21.9367 2.47709 21.73C2.295 21.5234 2.31986 21.2043 2.36958 20.5662L2.39658 20.2197C2.53651 18.4235 2.60647 17.5255 2.95721 16.7182C3.30794 15.9109 3.91294 15.2555 5.12293 13.9445L14.4072 3.88545Z" stroke="white" strokeWidth="1.5" stroke-linejoin="round"/>
<path d="M13.3335 4L20.3335 11" stroke="white" strokeWidth="1.5" stroke-linejoin="round"/>
</svg>
Compose</button>
      </Link>
      
    </div>
  )
}