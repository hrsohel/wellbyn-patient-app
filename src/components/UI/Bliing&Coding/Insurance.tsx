import Image from 'next/image'
import React from 'react'

export default function Insurance() {
  return (
    <div className='pr-4'>
        <form  method="post">
            <h3 className='text-[#7C7C7C]'>Insurance Information (Boxes 9-13)</h3>
            <div className='mt-8'>
                <div>
                    <label htmlFor="box-9" className='text-lg'>Box 9: Other Insured's Name</label>
                </div>
                <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                    <input type="text" name="box-9-fname" id="box-9-fname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='First Name' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <input type="text" name="box-9-mname" id="box-9-mname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Middle' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <input type="text" name="box-9-lname" id="box-2-lname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Last' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
            </div>
            <div className='mt-8'>
                <label htmlFor="box-9a" className='text-lg'>Box 9a: Other Insured's Policy or Group Number</label>
                <input type="text" name="box-9a" id="box-9a" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='mt-8'>
                <label htmlFor="box-9d" className='text-lg'>Box 9d: Insurance Plan Name or Program Name</label>
                <input type="text" name="box-9d" id="box-9d" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='mt-8'>
                <label htmlFor="box-11" className='text-lg'>Box 11: Insured's Policy Group or FECA Number</label>
                <input type="text" name="box-11" id="box-11" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='flex items-center justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
                <div className='w-full'>
                    <label htmlFor="box-11a-1" className='text-lg'>Box 11a: Insured's Date of Birth</label>
                    <input type="date" name="box-11a" id="box-11a" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
                <div className='w-full'>
                    <label htmlFor="box-11a-2" className='text-lg'>Box 11a: Insured's Sex</label>
                    <div className='flex gap-16 mt-4'>
                        <div className='flex items-center'>
                            <label htmlFor="male" className='text-lg'>Male</label>
                            <input type="radio" name="insured-gender" id="male" className='ml-4 w-6 h-6' />
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="female" className='text-lg'>Female</label>
                            <input type="radio" name="insured-gender" id="female"  className='ml-4 w-6 h-6'/>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="other" className='text-lg'>Other</label>
                            <input type="radio" name="insured-gender" id="other" className='ml-4 w-6 h-6'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <label htmlFor="box-11b" className='text-lg'>Box 11b: Other Claim ID (Designated by NUCC)</label>
                <input type="text" name="box-11b" id="box-11b" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='mt-8'>
                <label htmlFor="box-11c" className='text-lg'>Box 11c: Insurance Plan Name or Program Name *</label>
                <input type="text" name="box-11c" id="box-11c" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='G987654321' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='flex items-center justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
                <div className='w-full'>
                    <label htmlFor="box-11d" className='text-lg'>Box 11d: Is There Another Health Benefit Plan?</label>
                    <div className='flex gap-16 mt-4'>
                        <div className='flex items-center'>
                            <label htmlFor="yes" className='text-lg'>Yes</label>
                            <input type="radio" name="box-11d" id="yes" className='ml-4 w-6 h-6' />
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="no" className='text-lg'>No</label>
                            <input type="radio" name="box-11d" id="no"  className='ml-4 w-6 h-6'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
                <div className=''>
                    <label htmlFor="box-12-1" className='text-lg'>Box 12: Patient's or Authorized Person's Signature</label>
                    <input type="text" name="box-12-1" id="box-12-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='G987654321' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
                <div className='w-full'>
                    <label htmlFor="box-12-2" className='text-lg'>Box 12: Date</label>
                    <input type="date" name="box-12-2" id="box-12-2" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
            </div>
            <div className='mt-8'>
                <label htmlFor="box-13" className='text-lg'>Box 13: Insured's or Authorized Person's Signature</label>
                <button className='px-4 py-2 text-center flex gap-3 text-[#2E8BC9] rounded-md mt-4 cursor-pointer' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}>
                    <Image src="/view.svg" alt='View signature' width="20" height="20"/>
                    <span>View signature</span>
                </button>
            </div>
            <h3 className='text-xl font-bold text-with-line mt-8'>OR</h3>
            <div className='mt-12'>
                <label htmlFor="box-13-1" className='text-lg'>Box 13: Insured's or Authorized Person's Signature</label>
                <div>
                    <textarea name="box-13-1" id="box-13-1" placeholder='Street address' className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}></textarea>
                </div>
            </div>
        </form>
    </div>
  )
}
