import React from 'react'
import Navbar from '../../components/Navbar';

const Apic = () => {
    return (
        <div>
            <Navbar />
            <div className='flex gap-9 mt-24 m-24'>
                <div className='border-2 h-[80vh] w-[40vw]'>
                    <p className='border-2 h-[50vh] w-[25vw] mt-5'>Image</p>
                    <p className='border-b-2 mt-5'>user</p>
                    <p className='border-2 w-[25vw] py-3 rounded-3xl'>Add comment</p>
                </div>
                <div className='border-2 h-[90vh] w-[40vw]'>
                    <p>more image</p>
                </div>
            </div>

        </div>
    )
}

export default Apic;