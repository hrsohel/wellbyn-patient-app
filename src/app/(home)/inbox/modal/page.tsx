"use client"

import { useState } from "react"
import {
  Minus,
  Maximize,
  X,
  ChevronDown,
  Bold,
  Italic,
  Link,
  Paperclip,
  Smile,
  Image as ImageIcon,
  Folder,
  Pencil,
  Trash,
  EllipsisVertical,
} from "lucide-react"

export default function NewMessageDialog() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-[600px] max-w-[90vw] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gray-100 p-3 flex justify-between items-center border-b">
          <span className="font-semibold text-sm">New Message</span>
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded-md hover:bg-gray-200 flex items-center justify-center">
              <Minus className="w-4 h-4 text-gray-600" aria-label="Minimize" />
            </button>
            <button className="w-6 h-6 rounded-md hover:bg-gray-200 flex items-center justify-center">
              <Maximize className="w-4 h-4 text-gray-600" aria-label="Maximize" />
            </button>
            <button 
              className="w-6 h-6 rounded-md hover:bg-gray-200 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4 text-gray-600" aria-label="Close" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-grow p-4 space-y-2">
          <div className="flex items-center border-b pb-2">
            <label htmlFor="recipients" className="text-sm text-gray-600 w-20 flex-shrink-0">
              Recipients
            </label>
            <input
              id="recipients"
              type="text"
              placeholder=""
              className="flex-1 border-none focus:outline-none px-2 py-0 h-auto"
              aria-label="Recipients"
            />
            <span className="text-xs text-blue-600 cursor-pointer ml-auto">Cc Bcc</span>
          </div>
          <div className="flex items-center border-b pb-2">
            <label htmlFor="subject" className="text-sm text-gray-600 w-20 flex-shrink-0">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder=""
              className="flex-1 border-none focus:outline-none px-2 py-0 h-auto"
              aria-label="Subject"
            />
          </div>
          <div className="flex-grow pt-2">
            <textarea
              placeholder="Body Text"
              className="w-full min-h-[200px] border-none focus:outline-none resize-none"
              aria-label="Body Text"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-3 flex justify-between items-center border-t">
          <div className="flex items-center gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-1">
              Send <ChevronDown className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 ml-4 text-gray-600">
              <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Bold">
                <Bold className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Italic">
                <Italic className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Link">
                <Link className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Attach file">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Insert emoji">
                <Smile className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Insert image">
                <ImageIcon className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Insert from Drive">
                <Folder className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Drawing">
                <Pencil className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="Discard draft">
              <Trash className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center" aria-label="More options">
              <EllipsisVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}