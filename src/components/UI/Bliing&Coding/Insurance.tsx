import Image from 'next/image'
import React from 'react'

export default function Insurance() {
  return (
    <div className='mt-8'>
        <form  method="post">
            <h3 className='text-[#7C7C7C] font-[500] text-[16px]'>Insurance Information (Boxes 9-13)</h3>
            <div className='mt-4'>
                <div>
                    <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-9">Box 9: Other Insured's Name</label>
                </div>
                <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                    <input type="text" name="box-9-fname" id="box-9-fname" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='First Name' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <input type="text" name="box-9-mname" id="box-9-mname" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='Middle' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <input type="text" name="box-9-lname" id="box-2-lname" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='Last' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
            </div>
            <div className='mt-4'>
                <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-9a">Box 9a: Other Insured's Policy or Group Number</label>
                <input type="text" name="box-9a" id="box-9a" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='mt-4'>
                <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-9d">Box 9d: Insurance Plan Name or Program Name</label>
                <input type="text" name="box-9d" id="box-9d" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='mt-4'>
                <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-11">Box 11: Insured's Policy Group or FECA Number</label>
                <input type="text" name="box-11" id="box-11" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='flex items-center justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
                <div className='w-full'>
                    <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-11a-1">Box 11a: Insured's Date of Birth</label>
                    <input type="date" name="box-11a" id="box-11a" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
                <div className='w-full'>
                    <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-11a-2">Box 11a: Insured's Sex</label>
                    <div className='flex gap-8 mt-4'>
                        <div className='flex items-center'>
                            <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="male">Male</label>
                            <input type="radio" name="insured-gender" id="male" className='ml-4 w-6 h-6' />
                        </div>
                        <div className='flex items-center'>
                            <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="female">Female</label>
                            <input type="radio" name="insured-gender" id="female"  className='ml-4 w-6 h-6'/>
                        </div>
                        <div className='flex items-center'>
                            <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="other">Other</label>
                            <input type="radio" name="insured-gender" id="other" className='ml-4 w-6 h-6'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-11b">Box 11b: Other Claim ID (Designated by NUCC)</label>
                <input type="text" name="box-11b" id="box-11b" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='mt-4'>
                <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-11c">Box 11c: Insurance Plan Name or Program Name *</label>
                <input type="text" name="box-11c" id="box-11c" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='G987654321' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='flex items-center justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
                <div className='w-full'>
                    <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-11d">Box 11d: Is There Another Health Benefit Plan?</label>
                    <div className='flex gap-16 mt-4'>
                        <div className='flex items-center'>
                            <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="yes">Yes</label>
                            <input type="radio" name="box-11d" id="yes" className='ml-4 w-6 h-6' />
                        </div>
                        <div className='flex items-center'>
                            <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="no">No</label>
                            <input type="radio" name="box-11d" id="no"  className='ml-4 w-6 h-6'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-end justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
                <div className=''>
                    <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-12-1">Box 12: Patient's or Authorized Person's Signature</label>
                    <input type="text" name="box-12-1" id="box-12-1" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='G987654321' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
                <div className='w-full'>
                    <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-12-2">Box 12: Date</label>
                    <input type="date" name="box-12-2" id="box-12-2" className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
            </div>
            <div className='mt-4'>
                <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-13">Box 13: Insured's or Authorized Person's Signature</label>
                <button className='px-4 py-2 text-center flex gap-3 text-[#2E8BC9] rounded-md mt-4 cursor-pointer' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}>
                    <Image src="/view.svg" alt='View signature' width="20" height="20"/>
                    <span>View signature</span>
                </button>
            </div>
            <h3 className='text-xl font-bold mt-4'>OR</h3>
            <hr className='text-[#2E8BC9] bg-[#2E8BC9]'/>
            <div className='mt-4'>
                <label className="font-[500] text-[18px] text-[#3D3D3D]" htmlFor="box-13-1">Box 13: Insured's or Authorized Person's Signature</label>
                <div>
                    <textarea name="box-13-1" id="box-13-1" placeholder='' className='text[16px] mt-2 border-none outline-none rounded-[8px] p-[12px] w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}></textarea>
                </div>
            </div>
        </form>
    </div>
  )
}
