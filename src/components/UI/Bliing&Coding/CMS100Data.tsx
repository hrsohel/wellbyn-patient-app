import React from 'react'
import ProgressBar from '../ProgressBar'

export default function CMS100Data() {
  return (
    <div>
        <div className='flex items-center justify-between gap-8'>
            <div className='flex items-center justify-start gap-6 border-b-[1px] border-slate-500 mt-4'>
                <button>Patient Info</button>
                <button>Insurance</button>
                <button>Clinical Info</button>
                <button>Provider Info</button>
                <button>Billing</button>
            </div>
            <div className='border-[1px] border-slate-500 flex items-center justify-center mr-4 p-4 rounded-md mt-4'>
                <div className='text-center'>
                    <ProgressBar />
                    <span className='mt-4'>Total 32</span>
                </div>
            </div>
        </div>
    </div>
  )
}
