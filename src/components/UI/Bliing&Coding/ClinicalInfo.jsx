import React from 'react'

export default function ClinicalInfo() {
  return (
    <div className='pr-4'>
        <div>
            <label htmlFor="box-10" className='text-lg'>Box 10: Is Patient's Condition Related to:</label>
            <div className='flex items-center justify-start gap-8 mt-8'>
                <p className='text-lg'>A. Employment</p>
                <div className='flex items-center gap-4'>
                    <input type="radio" name="employment" id="e-yes" className='w-6 h-6'/>
                    <label htmlFor="e-yes" className='text-lg'>Yes</label>
                </div>
                <div className='flex items-center gap-4'>
                    <input type="radio" name="employment" id="e-no" className='w-6 h-6' />
                    <label htmlFor="e-no" className='text-lg'>No</label>
                </div>
            </div>
            <div className='flex items-center justify-start gap-8 mt-8'>
                <p className='text-lg'>B. Auto Accident?</p>
                <div className='flex items-center gap-4'>
                    <input type="radio" name="employment" id="b-yes" className='w-6 h-6'/>
                    <label htmlFor="b-yes" className='text-lg'>Yes</label>
                </div>
                <div className='flex items-center gap-4'>
                    <input type="radio" name="employment" id="b-no" className='w-6 h-6' />
                    <label htmlFor="b-no" className='text-lg'>No</label>
                </div>
            </div>
            <div className='flex items-center justify-start gap-8 mt-8'>
                <p className='text-lg'>C. Other Accident?</p>
                <div className='flex items-center gap-4'>
                    <input type="radio" name="employment" id="c-yes" className='w-6 h-6'/>
                    <label htmlFor="c-yes" className='text-lg'>Yes</label>
                </div>
                <div className='flex items-center gap-4'>
                    <input type="radio" name="employment" id="c-no" className='w-6 h-6' />
                    <label htmlFor="c-no" className='text-lg'>No</label>
                </div>
            </div>
        </div>
        <div className='mt-8'>
            <label htmlFor="box-10d" className='text-lg'>Box 10d: Claim Codes (Designated by NUCC)</label>
            <input type="text" name="box-10d" id="box-10d" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='G987654321' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            
            <div className='w-full'>
                <label htmlFor="box-14" className='text-lg'>Box 14: Date of Current Illness, Injury, or Pregnancy (LMP)</label>
                <input type="date" name="box-14" id="box-14" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-14-1" className='text-lg'>Qualifier</label>
                <input type="text" name="box-14-1" id="box-14-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Illness' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            
            <div className='w-full'>
                <label htmlFor="box-15" className='text-lg'>Box 15: Other Date</label>
                <input type="date" name="box-15" id="box-15" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-15-1" className='text-lg'>Qualifier</label>
                <input type="text" name="box-15-1" id="box-15-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Illness' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            
            <div className='w-full'>
                <h3 className='text-lg'>Box 16: Dates Patient Unable to Work in Current Occupation</h3>
                <label htmlFor="box-16" className='text-lg text-[#999]'>From</label>
                <input type="date" name="box-16" id="box-16" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-15-1" className='text-lg text-[#999]'>To</label>
                <input type="date" name="box-16-1" id="box-16-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Illness' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='mt-8'>
            <div>
                <label htmlFor="box-17" className='text-lg'>Box 17: Name of Referring Provider or Other Source</label>
            </div>
            <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                <input type="text" name="box-17-fname" id="box-17-fname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='First Name' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                <input type="text" name="box-17-mname" id="box-17-mname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Middle' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                <input type="text" name="box-17-lname" id="box-17-lname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Last' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            
            <div className='w-full'>
                <label htmlFor="box-17a" className='text-lg'>Box 17a: Other ID#</label>
                <input type="text" name="box-17a" id="box-17a" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-17b" className='text-lg'>Box 17b: NPI</label>
                <input type="text" name="box-17b" id="box-17b" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='mt-8'>
            <label htmlFor="box-19" className='text-lg'>Box 19: Additional Claim Information (Designated by NUCC)</label>
            <input type="text" name="box-19" id="box-19" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
        <div className='flex items-center justify-center flex-wrap md:flex-nowrap mt-8'>
            
            <div className='w-full'>
                <label htmlFor="box-20" className='text-lg'>Box 20: Outside Lab?</label>
                <div className='flex mt-4 gap-16'>
                    <div className='flex items-center'>
                        <input type="radio" name="outside-lab" id="yes" className='ml-4 w-6 h-6' />
                        <label htmlFor="yes" className='text-lg ml-3'>Yes</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="radio" name="outside-lab" id="no"  className='ml-4 w-6 h-6'/>
                        <label htmlFor="no" className='text-lg ml-3'>No</label>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            
            <div className='w-full'>
                <label htmlFor="box-22" className='text-lg'>Box 22: Resubmission Code</label>
                <input type="text" name="box-22" id="box-22" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-22b" className='text-lg'>Original Reference Number</label>
                <input type="text" name="box-22b" id="box-22b" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
         <div className='mt-8'>
            <label htmlFor="box-23" className='text-lg'>Box 23: Prior Authorization Number</label>
            <input type="text" name="box-23" id="box-23" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
    </div>
  )
}
