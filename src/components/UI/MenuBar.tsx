import Image from 'next/image'
import React from 'react'

export default function MenuBar() {
  return (
    <>
        <header className='flex items-center md:justify-between justify-start md:flex-row flex-col w-full'>
            <Image src="/arrow-left-03.svg" alt='left arrow image' width="25" height="25" className='absolute top-4 left-4 md:static'/>
            <div className='flex items-center justify-end gap-4'>
                <div className='flex items-center justify-center gap-2 rounded-md p-2 w-[95vw] md:w-auto shadow-md focus-within:ring-2 focus-within:ring-[#2E8BC9] focus-within:outline-none'>
                    <label htmlFor="search"><Image src="/search.svg" alt='search image' width="25" height="25"/></label>
                    <input className='border-none outline-none p-1 text-[14px] font-[500] md:w-[25rem] w-full' type="search" name="search" id="search" placeholder='Search for a doctor by name or discipline...'/>
                </div>
                <Image src="/Notification.svg" alt='notification' width="25" height="25" className='absolute md:static top-4 right-4'/>
            </div>
        </header>
    </>
  )
}
