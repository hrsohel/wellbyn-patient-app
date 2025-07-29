import Image from 'next/image'
import React from 'react'

export default function Billing() {
  return (
    <div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            <div className='w-full'>
                <label htmlFor="box-25-1" className='text-lg'>Box 25: Federal Tax ID Number *</label>
                <input type="text" name="box-25-1" id="box-25-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            
            <div className='w-full flex items-center justify-center gap-4'>
                <div className='flex items-center justify-center gap-4'>
                    <label htmlFor="ssn_ein" className='text-lg'>SSN/EIN</label>
                    <input type="radio" name="ssn_ein" id="ssn_ein" className=' w-6 h-6' placeholder=''/>
                </div>
            </div>
        </div>
         <div className='mt-8'>
            <label htmlFor="box-26-1" className='text-lg'>Box 26: Patient's Account Number</label>
            <input type="text" name="box-26-1" id="box-26-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div> 
        <div className='flex items-center justify-center flex-wrap md:flex-nowrap mt-8'>
            
            <div className='w-full'>
                <label htmlFor="box-27" className='text-lg'>Box 27: Accept Assignment?</label>
                <div className='flex mt-4 gap-16'>
                    <div className='flex items-center'>
                        <input type="radio" name="accept-assignment" id="yes" className='ml-4 w-6 h-6' />
                        <label htmlFor="yes" className='text-lg ml-3'>Yes</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="radio" name="accept-assignment" id="no"  className='ml-4 w-6 h-6'/>
                        <label htmlFor="no" className='text-lg ml-3'>No</label>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-8'>
            <label htmlFor="box-28-1" className='text-lg'>Box 28: Total Charge</label>
            <input type="text" name="box-28-1" id="box-28-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
        <div className='mt-8'>
            <label htmlFor="box-29-1" className='text-lg'>Box 29: Amount Paid</label>
            <input type="text" name="box-29-1" id="box-29-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            
            <div className='w-full'>
                <label htmlFor="box-33a" className='text-lg'>Box 33a: NPI *</label>
                <input type="text" name="box-33a" id="box-33a" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div className='w-full'>
                <label htmlFor="box-33b" className='text-lg'>Box 33b: Other ID#</label>
                <input type="text" name="box-33b" id="box-33b" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='mt-8 flex items-end justify-between flex-wrap md:flex-nowrap'>
            <div>
                <p>Codes Summary</p>
                <p>Diagnosis Codes (Box 21) - 0</p>
                <p className='flex items-center justify-start gap-3'>
                    <Image  src="/information-circle-1.svg" alt='information circel' width="20" height="20"/>
                    <span className='text-red-600'>No diagnosis codes finalized</span>
                </p>
            </div>
            <div>
                <p>Procedure Codes (Box 24) - 0</p>
                <p className='flex items-center justify-start gap-3'>
                    <Image  src="/information-circle-1.svg" alt='information circel' width="20" height="20"/>
                    <span className='text-red-600'>No diagnosis codes finalized</span>
                </p>
            </div>
        </div>
    </div>
  )
}
