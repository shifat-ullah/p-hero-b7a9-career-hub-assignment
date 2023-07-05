/* eslint-disable no-unused-vars */
import React from 'react';

const Home = () => {
    return (
        <div className='mx-auto w-[80%] mt-28'>
            <div className='md:flex justify-around'>
                <div className='w-[30%]'>
                    <h1 className=' text-4xl font-bold mb-4'>One Step Closer To Your <span className='text-cyan-400'>Dream Job</span></h1>
                    <p className='mb-5'>Explore thousands of job opportunities with all the information you need. 
                        Its your future. Come find it. Manage all your job application from start to finish.</p>

                        <button className='btn-primary gap-2'>Get Started</button>
                 </div>

                <div className='ml-60'> 
                    <img className='w-80 h-80' src="https://im5.ezgif.com/tmp/ezgif-5-caa652f120.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;