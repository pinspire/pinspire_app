import React from 'react'
import Navbar from '../../components/Navbar';

const RegistrationForm = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className='flex flex-col border-2 h-[100vh] w-[35vw] mt-5 ml-96 rounded-2xl shadow-lg'>
          <p className='flex justify-center'>Logo</p>
          <p className='flex text-center text-[30px] font-semibold font-sans ml-16 w-[25vw]'>Create a new personal account</p>
          <p className='flex justify-center ml-4'>Get new inspiration</p>
          <form className='flex flex-col w-[20vw] ml-24'>
            <label className='mt-5'>Email</label>
            <input type="text" className=' border-2 p-3 rounded-2xl mb-3'/>
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" className='border-2 p-3 mb-3 rounded-2xl' />
            <label htmlFor="">Birthday</label>
            <input type="" className='border-2 p-3 rounded-2xl mb-3'/>
            <button className='border-2 p-2 rounded-full bg-[#FF338A] border-[#FF338A] text-white font-semibold'>Continue</button>
            <p className='flex justify-center mb-5'>OR</p>
            <div className='flex border-2 justify-between p-2 rounded-full'>
            <p>Continue with Gmail</p>
            <p>G</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm;