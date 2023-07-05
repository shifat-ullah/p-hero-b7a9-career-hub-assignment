/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Showhomedata from './Showhomedata';

const Home = () => {
    const [products, setproducts]=useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])

    const [features,setFeature]=useState([]);
    useEffect(()=>{
        fetch('Jobfeature.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
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


        {/* Api section */}

        <div className=' md:flex flex-col text-center mt-20'>
            <h1 className='text-4xl  mb-2 font-semibold'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='md:flex mt-10 justify-center justify-evenly mx-0 '>

            {
                products.map(product => <Showhomedata
                
                    key={product.id}
                    product={product}
                ></Showhomedata>)
            }

            </div>

            

        </div>
    );
};

export default Home;