import React from 'react'

export default function ProgressBar() {
  return (
    <div className="relative w-12 h-12 rounded-full bg-[#e6f0fa] max-auto">
        <div
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{
            background:
                "conic-gradient(#2d8dcf 0deg 270deg, transparent 270deg 360deg)",
            }}
        ></div>

        <div className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#2d8dcf] font-bold text-sm">12</span>
        </div>
    </div>


  )
}

