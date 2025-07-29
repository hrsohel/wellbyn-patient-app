import React from 'react'

export default function ProviderInfo() {
  return (
    <div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            <div className='w-full'>
                <label htmlFor="box-31" className='text-lg'>Box 31: Signature of Physician or Supplier</label>
                <input type="text" name="box-31" id="box-31" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            
            <div className='w-full'>
                <label htmlFor="box-12-1-2" className='text-lg'>Box 12: Date</label>
                <input type="date" name="box-12-1-2" id="box-12-1-2" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div>
        <div className='mt-8'>
            <label htmlFor="box-23" className='text-lg'>Box 32: Service Facility Location Information</label>
            <input type="text" name="box-32-1" id="box-32-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Wellbyn Healthcare Center' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            <input type="text" name="box-32-2" id="box-32-2" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='456 Medical Boulevard' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                <input type="text" name="box-17-fname" id="box-17-fname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Anytown' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                <input type="text" name="box-17-mname" id="box-17-mname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='CA' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                <input type="text" name="box-17-lname" id="box-17-lname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='12345' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>            
            <input type="text" name="box-32-3" id="box-32-3" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='(555) 987-6543' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
        </div>
        <div className='flex items-end justify-center gap-12 flex-wrap md:flex-nowrap mt-8'>
            <div className='w-full'>
                <label htmlFor="box-32a" className='text-lg'>Box 32a: NPI *</label>
                <input type="text" name="box-32a" id="box-32a" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            
            <div className='w-full'>
                <label htmlFor="box-32b" className='text-lg'>Box 32b: Other ID#</label>
                <input type="text" name="box-32b" id="box-32b" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>
        </div> 
        <div className='mt-8'>
            <label htmlFor="box-33" className='text-lg'>Box 33: Billing Provider Info & Ph#</label>
            <input type="text" name="box-33-1" id="box-33-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Wellbyn Healthcare Center' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            <input type="text" name="box-33-2" id="box-33-2" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='456 Medical Boulevard' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                <input type="text" name="box-17-fname" id="box-17-fname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Anytown' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                <input type="text" name="box-17-mname" id="box-17-mname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='CA' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                <input type="text" name="box-17-lname" id="box-17-lname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='12345' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
            </div>            
            <input type="text" name="box-33-3" id="box-33-3" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='(555) 987-6543' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
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
    </div>
  )
}
