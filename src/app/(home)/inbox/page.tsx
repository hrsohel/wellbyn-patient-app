"use client"

import { useState } from "react"
import { Send, User, Search, MessageCircle, MessageSquare, Mail } from "lucide-react"

interface Message {
  id: string
  sender: "user" | "other"
  text: string
  time: string
  date?: string
}

interface Contact {
  id: string
  name: string
  initial: string
  selected: boolean
}

interface ChatWindowProps {
  contactName: string
  messages: Message[]
}

interface InboxSidebarProps {
  contacts: Contact[]
}

const ChatWindow = ({ contactName, messages }: ChatWindowProps) => {
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message logic here
      setMessage("")
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Chat header */}
      <div className="p-4 border-b bg-white">
        <h2 className="text-xl font-semibold">{contactName}</h2>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              {message.date && (
                <div className="text-center text-xs text-gray-500 my-4">
                  {message.date.toUpperCase()}
                </div>
              )}
              <div className={`flex items-end gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {message.sender === "other" && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {contactName.charAt(0)}
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-gray-200 text-gray-800 rounded-br-none"
                      : "bg-blue-500 text-white rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span
                    className={`block text-right text-xs mt-1 ${
                      message.sender === "user" ? "text-gray-600" : "text-blue-100"
                    }`}
                  >
                    {message.time}
                  </span>
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message input */}
      <div className="p-4 border-t bg-white flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSendMessage}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

const getAvatarColor = (initial: string) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
  ]
  const charCode = initial.charCodeAt(0)
  return colors[charCode % colors.length]
}

const InboxSidebar = ({ contacts }: InboxSidebarProps) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 border-r bg-white flex flex-col">
      {/* Sidebar header */}
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Inbox</h2>
      </div>

      {/* Message type tabs */}
      <div className="p-4 space-y-2 border-b">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 text-blue-700 font-medium">
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-50 cursor-pointer">
          <MessageSquare className="w-5 h-5" />
          <span>SMS</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-50 cursor-pointer">
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search here ..."
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Contacts list */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 ${
                contact.selected ? "bg-blue-50 font-medium" : ""
              }`}
            >
              <div className={`w-9 h-9 rounded-full ${getAvatarColor(contact.initial)} flex items-center justify-center text-white`}>
                {contact.initial}
              </div>
              <span className="text-sm">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Example usage in a parent component
export default function ChatApp() {
  const [activeContact, setActiveContact] = useState("John Doe")
  
  const contacts: Contact[] = [
    { id: "1", name: "John Doe", initial: "J", selected: true },
    { id: "2", name: "Jane Smith", initial: "J", selected: false },
    { id: "3", name: "Bob Johnson", initial: "B", selected: false },
    // Add more contacts as needed
  ]

  const messages: Message[] = [
    { id: "1", sender: "other", text: "Hello there!", time: "10:30 AM", date: "today" },
    { id: "2", sender: "user", text: "Hi! How are you?", time: "10:32 AM" },
    { id: "3", sender: "other", text: "I'm good, thanks for asking. How about you?", time: "10:33 AM" },
    // Add more messages as needed
  ]

  return (
    <div className="flex h-screen bg-white">
      <InboxSidebar contacts={contacts} />
      <ChatWindow contactName={activeContact} messages={messages} />
    </div>
  )
}