import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { apiSignin } from '../../services/auth';

const Login = () => {

const navigate = useNavigate()

const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log("email", email, "password", password);
    const response = await apiSignin({ email, password});
    console.log(response.data)
    if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
    }

    navigate('/welcomepage')
};

    return (
        <div className='log-bg'>
            <div className='flex flex-col border-2 h-[100vh] w-[35vw] mt-5 ml-96 rounded-2xl shadow-lg bg-white'>
                <p className='flex justify-center'>Logo</p>
                <p className='flex self-center text-[30px] font-semibold font-sans ml-16 w-[25vw]'>Log into Pinspire</p>
                <p className='flex justify-center ml-4'>Get new inspiration</p>
                <form onSubmit={handleSubmit} className='flex flex-col w-[20vw] ml-24'>
                    <label >Email</label>
                    <input type="email" name="email" id="email" className='border-2 p-3 mb-3 rounded-2xl' />
                    <label >Password</label>
                    <input type="password" name="password" id="password" className='border-2 p-3 mb-3 rounded-2xl' />
                    <button className='flex text-[13px] font-semibold mb-3 hover:underline'>Forgot your password?</button>
                    <button className='border-2 p-2 rounded-full bg-[#FF338A] border-[#FF338A] text-white font-semibold'>Login</button>
                    <p className='flex text-[13px] text-center w-[20vw] self-center mt-3'>By continuing, you agree to Pinterest's Business Terms of Service and acknowledge you've read our Privacy Policy. Notice at collection</p>
                    <p className='border-b-2 mt-5'></p>
                    <Link to='/registration' className='text-[13px] mt-3 hover:underline'>Create new accout</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;