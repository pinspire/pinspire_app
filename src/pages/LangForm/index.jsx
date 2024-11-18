import React from 'react'
import { Link } from 'react-router-dom';

const LangForm = () => {
    return (
        <div className='lang-bg'>
            <div className='flex flex-col border-2 h-[90vh] w-[40vw] mt-5 ml-96 rounded-2xl shadow-lg bg-white'>
            <div className='flex flex-col mt-16'>
                <div className=' flex flex-col items-center'>
                    <p className='text-[1.7rem] font-semibold text-center'>What's your language and where do you live?</p>
                    <p className='w-[30vw] text-center'>This helps us find you more relevant content. We won’t show it on your profile.</p>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <label htmlFor='language' className='font-semibold mb-2'></label>
                    <select id='language' className='border-2 p-2 rounded-xl w-[30vw]'>
                        <option value=''>Choose language</option>
                        <option value='en'>English</option>
                        <option value='es'>Spanish</option>
                        <option value='fr'>French</option>
                        <option value='de'>German</option>
                        {/* Add more language options as needed */}
                    </select>
                </div>
                <div className='flex flex-col items-center mt-6'>
                    <label htmlFor='country' className='font-semibold mb-2'></label>
                    <select id='country' className='border-2 p-2 rounded-xl w-[30vw]'>
                        <option value=''>Choose country</option>
                        <option value='US'>United States</option>
                        <option value='CA'>Canada</option>
                        <option value='FR'>France</option>
                        <option value='GH'>Ghana</option>
                        {/* Add more country options as needed */}
                    </select>
                </div>
                <Link to='/categories' className='border-2 p-3 w-[30vw] ml-16 rounded-full font-bold mt-16 bg-[#FF338A] border-[#FF338A] text-white '>Next</Link>
            </div>
        </div>
        </div>
    )
}

export default LangForm;