import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsPencilFill } from "react-icons/bs";

const WelcomePage = () => {
const navigate = useNavigate()
    
    return (
        <div className='flex flex-col border-2 h-[90vh] w-[40vw] mt-5 ml-96 rounded-2xl shadow-lg'>
            <div className='flex flex-col items-center mt-16'>
                <p className='border-2 border-[#FF338A] h-28 w-28 rounded-full mb-5'>
                    <img src="./src/assets/images/logo.png" alt="" className='h-20 ml-4 mt-3'/>
                </p>
                <p>{}</p>
                <p className='text-[2rem] mb-3 font-semibold'>Welcome to Pinspire</p>
                <div className='flex text-center text-[1.5rem] mb-5 font-semibold gap-3'>
                    <p>Username</p>
                    <p className='pt-2'><BsPencilFill /></p>
                </div>
                <p className='text-[16px] text-center w-[20vw] mb-8'>Please answer the next questions and lets find a category and right ideas to enjoy for you</p>
            </div>
            <Link to='/genderform' className='flex self-center border-2 p-3 w-[30vw] pl-48 rounded-full font-bold bg-[#FF338A] border-[#FF338A] text-white '>Next</Link>
        </div>
    )
}

export default WelcomePage;