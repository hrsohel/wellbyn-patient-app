import Image from 'next/image'
import React from 'react'

export default function MenuBar() {
  return (
    <>
        <header className='flex items-center justify-between'>
            <Image src="/arrow-left-03.svg" alt='left arrow image' width="25" height="25"/>
            <div className='flex items-center justify-end gap-4'>
                <div style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}} className='flex items-center justify-center gap-2 rounded-md p-2'>
                    <label htmlFor="search"><Image src="/search.svg" alt='search image' width="25" height="25"/></label>
                    <input className='border-none outline-none p-1 text-lg w-[25rem]' type="search" name="search" id="search" placeholder='Search for a doctor by name or discipline...'/>
                </div>
                <Image src="/Notification.svg" alt='notification' width="25" height="25"/>
            </div>
        </header>
    </>
  )
}
