import React from 'react'

export default function PatientInfo() {
  return (
    <div className=''>
        <form method="post">
            <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                <div className='w-full'>
                    <label htmlFor="box-1" className='text-lg'>Box 1: Insurance Type *</label>
                    <select name="box-1" id="box-1" className='text-lg p-[14px] mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}>
                        <option value="">Group Health Plan</option>
                        <option value="">1</option>
                        <option value="">2</option>
                    </select>
                </div>
                <div className='w-full'>
                    <label htmlFor="box-1a" className='text-lg'>Box 1a: Insured's ID Number *</label>
                    <input type="text" name="box-1" id="box-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
            </div>
            <div className='mt-12'>
                <div>
                    <label htmlFor="box-2" className='text-lg'>Box 2: Patient's Name *</label>
                </div>
                <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                    <input type="text" name="box-2-fname" id="box-2-fname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='First Name' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <input type="text" name="box-2-mname" id="box-2-mname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Middle' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <input type="text" name="box-2-lname" id="box-2-lname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Last' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
            </div>
            <div className='flex items-center justify-center gap-12 flex-wrap md:flex-nowrap mt-12'>
                <div className='w-full'>
                    <label htmlFor="box-3-1" className='text-lg'>Box 3: Patient's Birth Date*</label>
                    <input type="date" name="box-1" id="box-1" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Group Health Plan' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
                <div className='w-full'>
                    <label htmlFor="box-3-2" className='text-lg'>Box 3: Patient's Sex *</label>
                    <div className='flex gap-16 mt-4'>
                        <div className='flex items-center'>
                            <label htmlFor="male" className='text-lg'>Male</label>
                            <input type="radio" name="gender" id="male" className='ml-4 w-6 h-6' />
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="female" className='text-lg'>Female</label>
                            <input type="radio" name="gender" id="female"  className='ml-4 w-6 h-6'/>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="other" className='text-lg'>Other</label>
                            <input type="radio" name="gender" id="other" className='ml-4 w-6 h-6'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <div>
                    <label htmlFor="box-4" className='text-lg'>Box 4: Insured's Name *</label>
                </div>
                <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap'>
                    <input type="text" name="box-2-fname" id="box-4-fname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='First Name' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <input type="text" name="box-2-mname" id="box-4-mname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Middle' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <input type="text" name="box-2-lname" id="box-4-lname" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='Last' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
            </div>
            <div className='mt-12'>
                <label htmlFor="box-5" className='text-lg'>Box 5: Patient's Address *</label>
                <div>
                    <textarea name="street-address" id="street-address" placeholder='Street address' className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}></textarea>
                </div>
               <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap mt-4'>
                    <input type="text" name="city" id="city" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='City' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <select name="street" id="street" className='text-lg p-[14px] mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}>
                        <option value="">Select</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                    </select>
                    <input type="text" name="zip-code" id="zip-code" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='ZIP' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                </div>
                <div className='mt-4'>
                    <input type='tel' name="street-address" id="street-address" placeholder='+1 9999999999' className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}} />
                </div>
            </div>
            <div className='mt-12'>
                <label htmlFor="box-6">Box 6: Patient Relationship to Insured</label>
                <select name="box-6" id="box-6" className='text-lg p-[14px] mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}>
                    <option value="">Self</option>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                </select>
            </div>
            <div className='mt-12'>
                <div>
                    <label htmlFor="box-7" className='text-lg'>Box 7: Patient Relationship to Insured</label>
                </div>
                <div className='mt-4'>
                    <div>
                        <textarea name="street-address" id="street-address" placeholder='Street address' className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}></textarea>
                    </div>
                <div className='flex items-center justify-center gap-3 flex-wrap md:flex-nowrap mt-4'>
                    <input type="text" name="city" id="city" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='City' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    <select name="street" id="street" className='text-lg p-[14px] mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}>
                        <option value="">Select</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                    </select>
                    <input type="text" name="zip-code" id="zip-code" className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' placeholder='ZIP' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}}/>
                    </div>
                    <div className='mt-4'>
                        <input type='tel' name="street-address" id="street-address" placeholder='+1 9999999999' className='text-lg p-3 mt-2 border-none outline-none rounded-md w-full' style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}} />
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
