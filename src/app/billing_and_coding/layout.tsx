import { Sidebar } from '@/components/layout/Sidebar'
import React from 'react'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='flex items-start w-full'>
        <Sidebar />
        <section className='w-full py-4'>{children}</section>
    </main>
  )
}
