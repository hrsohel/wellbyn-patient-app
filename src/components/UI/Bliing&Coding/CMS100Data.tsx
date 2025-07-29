"use client"
import React, { useState } from 'react'
import ProgressBar from '../ProgressBar'
import PatientInfo from './PatientInfo'
import Insurance from './Insurance'
import ClinicalInfo from './ClinicalInfo'
import ProviderInfo from './ProviderInfo'
import Billing from './Billing'

export default function CMS100Data() {
    const [showPatientInfo, setShowPatientInfo] = useState<number>(1)
  return (
    <div>
        <div className='flex items-center justify-center md:justify-between gap-8 flex-wrap mb-4 md:mb-0'>
            <div className='flex items-center justify-start gap-6 mt-4 border-b-[1px] border-[#888]'>
                <button onClick={() => setShowPatientInfo(1)} className={`cursor-pointer ${showPatientInfo === 1 ? "border-[#2E8BC9] border-b-[2px] text-[#2E8BC9]" : ""}`}>Patient Info</button>
                <button onClick={() => setShowPatientInfo(2)} className={`cursor-pointer ${showPatientInfo === 2 ? "border-[#2E8BC9] border-b-[2px] text-[#2E8BC9]" : ""}`}>Insurance</button>
                <button onClick={() => setShowPatientInfo(3)} className={`cursor-pointer ${showPatientInfo === 3 ? "border-[#2E8BC9] border-b-[2px] text-[#2E8BC9]" : ""}`}>Clinical Info</button>
                <button onClick={() => setShowPatientInfo(4)} className={`cursor-pointer ${showPatientInfo === 4 ? "border-[#2E8BC9] border-b-[2px] text-[#2E8BC9]" : ""}`}>Provider Info</button>
                <button onClick={() => setShowPatientInfo(5)} className={`cursor-pointer ${showPatientInfo === 5 ? "border-[#2E8BC9] border-b-[2px] text-[#2E8BC9]" : ""}`}>Billing</button>
            </div>
            <div className='border-[1px] border-slate-500 flex items-center justify-center mr-4 p-4 rounded-md mt-2 md:mt-4'>
                <div className='text-center mx-auto flex items-center justify-center flex-col gap-1'>
                    <ProgressBar />
                    <span className='mt-4'>Total 32</span>
                </div>
            </div>
        </div>
        {
            showPatientInfo === 1 ? <PatientInfo/> :
            showPatientInfo === 2 ? <Insurance /> :
            showPatientInfo === 3 ? <ClinicalInfo /> :
            showPatientInfo === 4 ? <ProviderInfo /> :
            <Billing />
        }
    </div>
  )
}
