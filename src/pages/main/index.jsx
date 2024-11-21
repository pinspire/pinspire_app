import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { apiSignup } from '../../services/auth';




const Main = () => {
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


      const payload = { firstName, lastName, email, password }
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
      <div className='flex justify-between h-20 bg-white text-black items-center fixed w-full'>
        <nav className='flex gap-5 ml-7'>
          <div className='flex'>
            <img src="./src/assets/images/logo.png" alt="Logo" className="h-8 w-8 ml-6" />
            <p className='text-[20px] font-bold'>Pinspire</p>
          </div>
          <p className='pt-1'>Watch</p>
          <p className='pt-1'>Explore</p>
        </nav>
        <nav className='flex gap-8 mr-7'>
          <p className='mt-3'>About</p>
          <p className='mt-3'>Business</p>
          <p className='mt-3'>Blog</p>
          <Link to="/login" className='border-2 py-2 px-4 rounded-full bg-[#FF338A] border-[#FF338A]'>Log in</Link>
          <button className='border-2 py-2 px-4 rounded-full bg-[#e2e2e2] border-[#e2e2e2]'>Sign Up</button>
        </nav>
      </div>
      <div>
        <div className='flex h-[100vh] bg-white items-center'>
          <p className='flex text-[4rem] font-semibold justify-center w-[30vw] ml-36 pt-20'>Get inspired by something new</p>
          <div className='flex gap-5'>
            <img src="./src/assets/images/breakfast.jpg" alt="" className='h-72 mt-5 rounded-xl' />
            <img src="./src/assets/images/strawberry.jpg" alt="strawberry" className='h-96 rounded-xl' />
            <img src="./src/assets/images/burgers.jpg" alt="strawberry" className='h-80 mt-7 rounded-xl' />
          </div>
        </div>
      </div>
      <div className='flex h-[100vh] bg-white items-center justify-between '>
        <div className='flex'>
        <div className='flex w-[35vw] ml-40'>
        <img src="./src/assets/images/drip.jpg" alt="" className='h-80 rounded-xl mt-7 ml-9' />
        <img src="./src/assets/images/damn.jpg" alt="" className='h-80 rounded-xl mt-24 ml-9' />
        </div>
          <p className='flex text-[4rem] font-bold pt-20 pl-48 w-[40vw]'>See it, save it, make it, try it, do it</p>
        </div>
      </div>
      <div className='main-bg'>
        <div className='flex'>
          <div className='h-[100vh] items-center'>
            <p className='flex text-[4rem] font-bold justify-center pt-40 w-[35vw] pl-[30%] text-white'>Sign up to get your ideas</p>
          </div>
          <div className='flex flex-col border-2 h-[95vh] w-[35vw] mt-5 ml-60 rounded-2xl shadow-lg bg-white border-white'>
            <p className='flex justify-center'>
              <img src="./src/assets/images/logo.png" alt="" className='h-8'/>
            </p>
            <p className='flex text-center text-[30px] font-semibold font-sans ml-16 w-[25vw]'>Create a new personal account</p>
            <p className='flex justify-center ml-4'>Get new inspiration</p>
            <form onSubmit={handleSubmit} className='flex flex-col w-[20vw] ml-24'>
              <label className='mt-5'>First Name</label>
              <input type="text" name='firstName' className=' border-2 p-3 rounded-2xl mb-3' />
              <label >Last Name</label>
              <input type="text" name="lastName" id="lastName" className='border-2 p-3 mb-3 rounded-2xl' />
              <label >Email</label>
              <input type="email" name="email" id="email" className='border-2 p-3 mb-3 rounded-2xl' />
              <label >Password</label>
              <input type="password" name="password" id="password" className='border-2 p-3 mb-3 rounded-2xl' />
              <button className='border-2 p-2 rounded-full bg-[#FF338A] border-[#FF338A] text-white font-semibold'>{loading ? 'loading...' : 'Register'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;