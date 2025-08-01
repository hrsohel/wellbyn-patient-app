import React from 'react'

export default function ClinicalInfo() {
  return (
    <div className='mt-4'>
        <div>
            <label htmlFor="box-10" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 10: Is Patient's Condition Related to:</label>
            <div className='flex items-center justify-between mt-8'>
                <p className='font-[500] text-[18px] text-[#3D3D3D]'>A. Employment</p>
                <div className='flex items-center justify-center gap-8 mr-0 md:mr-80'>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name="employment" id="e-yes" className='w-6 h-6'/>
                        <label htmlFor="e-yes" className='font-[500] text-[18px] text-[#3D3D3D]'>Yes</label>
                    </div>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name="employment" id="e-no" className='w-6 h-6' />
                        <label htmlFor="e-no" className='font-[500] text-[18px] text-[#3D3D3D]'>No</label>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between mt-8'>
                <p className='font-[500] text-[18px] text-[#3D3D3D]'>B. Auto Accident?</p>
                <div className='flex items-center justify-center gap-8 mr-0 md:mr-80'>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name="employment" id="b-yes" className='w-6 h-6'/>
                        <label htmlFor="b-yes" className='font-[500] text-[18px] text-[#3D3D3D]'>Yes</label>
                    </div>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name="employment" id="b-no" className='w-6 h-6' />
                        <label htmlFor="b-no" className='font-[500] text-[18px] text-[#3D3D3D]'>No</label>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between mt-8'>
                <p className='font-[500] text-[18px] text-[#3D3D3D]'>C. Other Accident?</p>
                <div className='flex items-center justify-center gap-8 mr-0 md:mr-80'>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name="employment" id="c-yes" className='w-6 h-6'/>
                        <label htmlFor="c-yes" className='font-[500] text-[18px] text-[#3D3D3D]'>Yes</label>
                    </div>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name="employment" id="c-no" className='w-6 h-6' />
                        <label htmlFor="c-no" className='font-[500] text-[18px] text-[#3D3D3D]'>No</label>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-6'>
            <label htmlFor="box-10d" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 10d: Claim Codes (Designated by NUCC)</label>
            <input type="text" name="box-10d" id="box-10d" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='G987654321' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
        <div className='flex items-end justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
            
            <div className='w-full'>
                <label htmlFor="box-14" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 14: Date of Current Illness, Injury, or Pregnancy (LMP)</label>
                <input type="date" name="box-14" id="box-14" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-14-1" className='font-[500] text-[18px] text-[#3D3D3D]'>Qualifier</label>
                <input type="text" name="box-14-1" id="box-14-1" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Illness' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='flex items-end justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
            
            <div className='w-full'>
                <label htmlFor="box-15" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 15: Other Date</label>
                <input type="date" name="box-15" id="box-15" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-15-1" className='font-[500] text-[18px] text-[#3D3D3D]'>Qualifier</label>
                <input type="text" name="box-15-1" id="box-15-1" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Illness' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='flex items-end justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
            
            <div className='w-full'>
                <h3 className='font-[500] text-[18px] text-[#3D3D3D]'>Box 16: Dates Patient Unable to Work in Current Occupation</h3>
                <label htmlFor="box-16" className='text-lg text-[#999]'>From</label>
                <input type="date" name="box-16" id="box-16" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-15-1" className='text-lg text-[#999]'>To</label>
                <input type="date" name="box-16-1" id="box-16-1" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Illness' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='mt-4'>
            <div>
                <label htmlFor="box-17" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 17: Name of Referring Provider or Other Source</label>
            </div>
            <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                <input type="text" name="box-17-fname" id="box-17-fname" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='First Name' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                <input type="text" name="box-17-mname" id="box-17-mname" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Middle' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                <input type="text" name="box-17-lname" id="box-17-lname" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Last' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='flex items-end justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
            
            <div className='w-full'>
                <label htmlFor="box-17a" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 17a: Other ID#</label>
                <input type="text" name="box-17a" id="box-17a" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-17b" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 17b: NPI</label>
                <input type="text" name="box-17b" id="box-17b" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='flex items-end justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
            
            <div className='w-full'>
                <h3 className='font-[500] text-[18px] text-[#3D3D3D]'>Box 18: Hospitalization Dates Related to Current Services</h3>
                <label htmlFor="box-16" className='text-lg text-[#999]'>From</label>
                <input type="date" name="box-16" id="box-16" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-15-1" className='text-lg text-[#999]'>To</label>
                <input type="date" name="box-16-1" id="box-16-1" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='Illness' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='mt-4'>
            <label htmlFor="box-19" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 19: Additional Claim Information (Designated by NUCC)</label>
            <input type="text" name="box-19" id="box-19" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
        <div className='flex items-center justify-center flex-wrap md:flex-nowrap mt-4'>
            
            <div className='w-full'>
                <label htmlFor="box-20" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 20: Outside Lab?</label>
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
        <div className='flex items-end justify-center gap-6 flex-wrap md:flex-nowrap mt-4'>
            
            <div className='w-full'>
                <label htmlFor="box-22" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 22: Resubmission Code</label>
                <input type="text" name="box-22" id="box-22" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-22b" className='font-[500] text-[18px] text-[#3D3D3D]'>Original Reference Number</label>
                <input type="text" name="box-22b" id="box-22b" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
         <div className='mt-4'>
            <label htmlFor="box-23" className='font-[500] text-[18px] text-[#3D3D3D]'>Box 23: Prior Authorization Number</label>
            <input type="text" name="box-23" id="box-23" className='text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
    </div>
  )
}
