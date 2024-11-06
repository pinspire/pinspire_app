import React from 'react'
import { FaRegCircle } from "react-icons/fa";


const GenderForm = () => {
  return (
    <div className='flex flex-col border-2 h-[90vh] w-[40vw] mt-5 ml-96 rounded-2xl shadow-lg'>
      <div className='flex flex-col mt-16'>
        <div className=' flex flex-col items-center'>
          <p className='text-[1.7rem] font-semibold'>What's your gender?</p>
          <p className='w-[30vw] text-center'>This helps us find you more relevant content. We won’t show it on your profile.</p>
        </div>
        <div className='mt-10 space-y-10 ml-8'>
          <div className='flex text-[20px] font-semibold gap-3'>
            <input type="radio" name="radio" id="radio" />
            <p>Female</p>
          </div>
          <div className='flex text-[20px] font-semibold gap-3'>
            <input type="radio" name="radio" id="radio" />
            <p>Male</p>
          </div>
        </div>
        <button className='border-2 p-3 w-[30vw] ml-16 rounded-full font-bold mt-16 bg-[#FF338A] border-[#FF338A] text-white '>Next</button>
      </div>
    </div>
  )
}

export default GenderForm;