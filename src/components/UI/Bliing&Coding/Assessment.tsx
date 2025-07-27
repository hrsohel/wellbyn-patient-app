import Image from 'next/image'
import React from 'react'

export default function Assessment() {
  return (
    <div> 
        <br /> <br />
        <h2 className='text-2xl'>Reason for a meeting</h2>
        <p>Need a cleaning</p>

        <br /> <br />
        <h2 className='text-2xl'>Vital signs</h2>
        <p className='text-[#7C7C7C]'>
            <span className='text-#333 font-semibold'>Blood Pressure :</span>
            130/85 mmHg 
        </p>
        <p className='text-[#7C7C7C]'>
            <span className='text-#333 font-semibold'>Heart Rate :</span>
            88 bpm
        </p>
        <p className='text-[#7C7C7C]'>
            <span className='text-#333 font-semibold'>Temperature :</span>
            100,20F
        </p>
            <br /> <br />
        <p className='text-[2xl]'>Download Report</p>
        <button className='cursor-pointer text-[#2E8BC9] flex items-center justify-center gap-2 px-4 py-2 rounded-md mt-4' style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}}>
            <Image src="/download-circle-01.svg" width="15" height="15" alt='download icon'/>
            Download
        </button>
    </div>
  )
}
