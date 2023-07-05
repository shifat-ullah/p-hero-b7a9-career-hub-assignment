/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div>
            <div className='w-[100%] shadow-lg '>
            <img src={feature.image} alt="" className='w-56 h-56'/>
            <h1>{feature.title}</h1>
            <p>{feature.name}</p>
            <div className='md:flex ml-3 '>
                <button className='border mb-3 rounded-md p-2'>Remote</button>
                <button className='border mb-3 rounded-md ml-20 p-2'>Full Time</button>
            </div>

            <div className='flex gap-6'>
                <p>{feature.location}</p>
                <p>{feature.salary}</p>
            </div>
            </div>
        </div>
    );
};

export default Feature;