import React from 'react'

const WelcomePage = () => {
    return (
        <div className='flex flex-col border-2 h-[90vh] w-[40vw] mt-5 ml-96 rounded-2xl shadow-lg'>
            <div className='flex flex-col items-center mt-16'>
                <p className='border-2 h-28 w-28 rounded-full mb-5'></p>
                <p>email10@gmail.com</p>
                <p className='text-[2rem] mb-3 font-semibold'>Welcome to Pinspire</p>
                <div className='flex text-center text-[1.5rem] mb-5 font-semibold'>
                    <p>Username</p>
                    <p>icon</p>
                </div>
                <p className='text-[16px] text-center w-[20vw] mb-8'>Please answer the next questions and lets find a category and right ideas to enjoy for you</p>
            </div>
            <button className='border-2 p-3 w-[30vw] ml-16 rounded-full font-bold bg-[#FF338A] border-[#FF338A] text-white '>Next</button>
        </div>
    )
}

export default WelcomePage;