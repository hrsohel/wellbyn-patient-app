"use client"

import { useState } from "react"
import { Star, Mail, MessageSquare, Phone, Search } from "lucide-react"

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
        <div className="flex items-center gap-3 rounded-lg bg-blue-100 px-3 py-2 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
          <Mail className="h-5 w-5" />
          Email
          <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">10</span>
        </div>
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
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <Sidebar />
      <EmailList />
    </div>
  )
}