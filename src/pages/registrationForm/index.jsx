import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { apiSignup } from '../../services/auth';

const RegistrationForm = () => {
const [loading, setLoading] = useState(false)

const navigate = useNavigate()
const handleSubmit = async (event) => {
  event.preventDefault()

  try {
    setLoading(true)
    const formData = new FormData(event.target)

    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const password = formData.get('password')

  console.log('first name', firstName)
  

  const payload = {firstName, lastName, email, password}
  const response = await apiSignup(payload)
  console.log(response.data)

  navigate('/login')

 } catch (error) {
  console.log(error)
 } finally {
  setLoading(false)
 }
}



  return (
    <div>
      <div className='reg-bg'>
        <div className='flex flex-col border-2 h-[120vh] w-[35vw] mt-5 ml-96 rounded-2xl shadow-lg bg-white'>
          <p className='flex justify-center'>Logo</p>
          <p className='flex text-center text-[30px] font-semibold font-sans ml-16 w-[25vw]'>Create a new personal account</p>
          <p className='flex justify-center ml-4'>Get new inspiration</p>
          <form onSubmit={handleSubmit} className='flex flex-col w-[20vw] ml-24'>
            <label className='mt-5'>First Name</label>
            <input type="text" name='firstName' className=' border-2 p-3 rounded-2xl mb-3'/>
            <label >Last Name</label>
            <input type="text" name="lastName" id="lastName" className='border-2 p-3 mb-3 rounded-2xl' />
            <label >Email</label>
            <input type="email" name="email" id="email" className='border-2 p-3 mb-3 rounded-2xl' />
            <label >Password</label>
            <input type="password" name="password" id="password" className='border-2 p-3 mb-3 rounded-2xl' />
            <button className='border-2 p-2 rounded-full bg-[#FF338A] border-[#FF338A] text-white font-semibold'>{loading ? 'loading...' : 'Register'}</button>
            <button className='border-2 p-2 rounded-full text-black font-semibold mt-5'>Log into existing account</button>
          </form>
          <p className='flex text-[13px] text-center w-[20vw] self-center mt-3'>By continuing, you agree to Pinterest's Business Terms of Service and acknowledge you've read our Privacy Policy. Notice at collection</p>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm;