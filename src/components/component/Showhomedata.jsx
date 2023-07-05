/* eslint-disable react/prop-types */
import React from 'react';

const Showhomedata = ({product}) => {
    return (
        <div className=''>
            <div className=''>
            <img src={product.img} alt="" className='w-40 h-40 mt-5' />
            <p className=' text-2xl font-semibold'>{product.title}</p>
            <p className='text-center'>{product.job}</p>
            </div>
        </div>
    );
};

export default Showhomedata;