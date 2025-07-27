import BillingCodeDialogBox from '@/components/UI/Bliing&Coding/BillingCodeDialogBox'
import MenuBar from '@/components/UI/MenuBar'
import { firstCardInfo } from '@/utils/billing&coding_cards_info'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=''>
       <div className='px-6'>
            <MenuBar />
            <br />
            <br />
            <div className='flex items-center justify-between flex-wrap gap-4'>
                {
                    firstCardInfo.map(info =>
                        <div key={info.id} className='relative p-4 rounded-sm bg-white w-[20rem]'>
                            <Image src={info.imagePath} alt={info.text} width="40" height="40" className=''/>
                            <br />
                            <p>{info.text}</p>
                            <br />
                            <div className='flex items-center justify-between'>
                                <p className='text-2xl font-bold'>{info.count}</p>
                                <span className='flex items-center justify-center gap-2 bg-[#EEFEE7] p-2 px-4 rounded-full text-[#237B10] font-bold'>
                                    <Image src="/Arrow up.svg" alt='arrow up' width="20" height="20"/>
                                    +12
                                </span>
                            </div>
                        </div>
                    )
                }
            </div>
            <br />
            <div className='bg-white p-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='font-bold text-2xl'>Appointment</h3> <br />
                        <p>Total: 120</p>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <div style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}} className='flex items-center justify-center gap-2 rounded-md px-2 py-0.5'>
                            <label htmlFor="search"><Image src="/search.svg" alt='search image' width="25" height="25"/></label>
                            <input className='border-none outline-none p-1 text-lg' type="search" name="search" id="search" placeholder='Search here...'/>
                        </div>
                        <div>
                            <select name="type" id="type" style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}} className='flex items-center justify-center gap-2 rounded-md p-2 border-none outline-none text-lg'>
                                <option value="">All types</option>
                                <option value="">Type 1</option>
                                <option value="">Type 2</option>
                            </select>
                        </div>
                        <div>
                            <select name="time" id="time" style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}} className='flex items-center justify-center gap-2 rounded-md p-2 border-none outline-none text-lg'>
                                <option value="">Today</option>
                                <option value="">Tomorrow</option>
                                <option value="">The day after tomorrow</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br /><br />
                <table className='w-full p-4 billing&coding_table'>
                    <thead className='bg-[#EDF4FA] rounded-md py-4 text-left'>
                        <tr className='bg-[#EDF4FA] rounded-md py-4 text-left'>
                            <th style={{borderRadius: "10px 0 0 0"}} className='p-4 text-left'>ID</th>
                            <th>Patient's Name</th>
                            <th>Contact</th>
                            <th>Gender</th>
                            <th>Last Visit</th>
                            <th>Status</th>
                            <th style={{borderRadius: "0 10px 0 0"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='py-2'>
                            <td className='p-4'>P6Q7R8</td>
                            <td >
                                <span className='p-1 px-2 rounded-full bg-[#F2F8FD] text-[#2E8BC9] mr-4'>R</span>
                                <span>{String("Rami Rahman Chowdhury").substring(0, 20)}...</span>
                            </td>
                            <td>
                                <span>{String("sarah_illustrates@gmail.com").substring(0, 20)}...</span><br />
                                <span>(555) 123-4567</span>
                            </td>
                            <td>Male</td>
                            <td>04-30-2026</td>
                            <td>
                                <span className='p-3 rounded-full bg-[#EEFEE7] text-[#237B10] px-6'>In care</span>
                            </td>
                            <td className='flex gap-3 justify-start pt-4'>
                                <Image src="/pencil-edit-02.svg" alt='update svg' width="20" height="20"/>
                                <Image src="/Frame 2147226749.svg" alt='view svg' width="30" height="30"/>
                            </td>
                        </tr>
                        <tr className='py-2'>
                            <td className='p-4'>P6Q7R8</td>
                            <td>
                                <span className='p-1 px-2 rounded-full bg-[#F2F8FD] text-[#2E8BC9] mr-4'>R</span>
                                <span>{String("Rami Rahman Chowdhury").substring(0, 20)}...</span>
                            </td>
                            <td>
                                <span>{String("sarah_illustrates@gmail.com").substring(0, 20)}...</span><br />
                                <span>(555) 123-4567</span>
                            </td>
                            <td>Male</td>
                            <td>04-30-2026</td>
                            <td>
                                <span className='p-3 rounded-full bg-[#F0F5FE] text-[#2B4DCA] px-6'>Recovered</span>
                            </td>
                            <td className='flex gap-3 justify-start pt-4'>
                                <Image src="/pencil-edit-02.svg" alt='update svg' width="20" height="20"/>
                                <Image src="/Frame 2147226749.svg" alt='view svg' width="30" height="30"/>
                            </td>
                        </tr>
                        <tr className='py-2'>
                            <td className='p-4'>P6Q7R8</td>
                            <td>
                                <span className='p-1 px-2 rounded-full bg-[#F2F8FD] text-[#2E8BC9] mr-4'>R</span>
                                <span>{String("Rami Rahman Chowdhury").substring(0, 20)}...</span>
                            </td>
                            <td>
                                <span>{String("sarah_illustrates@gmail.com").substring(0, 20)}...</span><br />
                                <span>(555) 123-4567</span>
                            </td>
                            <td>Male</td>
                            <td>04-30-2026</td>
                            <td>
                                <span className='p-3 rounded-full bg-[#F0F5FE] text-[#2B4DCA] px-6'>In care</span>
                            </td>
                            <td className='flex gap-3 justify-start pt-4'>
                                <Image src="/pencil-edit-02.svg" alt='update svg' width="20" height="20"/>
                                <Image src="/Frame 2147226749.svg" alt='view svg' width="30" height="30"/>
                            </td>
                        </tr>
                        <tr className='py-2'>
                            <td className='p-4'>P6Q7R8</td>
                            <td>
                                <span className='p-1 px-2 rounded-full bg-[#F2F8FD] text-[#2E8BC9] mr-4'>R</span>
                                <span>{String("Rami Rahman Chowdhury").substring(0, 20)}...</span>
                            </td>
                            <td>
                                <span>{String("sarah_illustrates@gmail.com").substring(0, 20)}...</span><br />
                                <span>(555) 123-4567</span>
                            </td>
                            <td>Male</td>
                            <td>04-30-2026</td>
                            <td>
                                <span className='p-3 rounded-full bg-[#EEFEE7] text-[#237B10] px-6'>Recovered</span>
                            </td>
                            <td className='flex gap-3 justify-start pt-4'>
                                <Image src="/pencil-edit-02.svg" alt='update svg' width="20" height="20"/>
                                <Image src="/Frame 2147226749.svg" alt='view svg' width="30" height="30"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div>
       <BillingCodeDialogBox />
    </div>
  )
}
