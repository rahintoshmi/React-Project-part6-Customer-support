import React from 'react';
import vector1 from '../assets/vector1.png';
const Banner = ({ progress, resolvedTask }) => {
    return (
        <div className='bg-[#F5F5F5] py-[70px]'>
        <div className='flex flex-col md:flex-row max-w-[1300px] mx-auto gap-4 justify-center px-4 md:px-0'>
            <div className='relative p-[80px] w-full  md:w-[620px] rounded-[8px] bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] text-center'>
                <h3 className='text-2xl font-normal text-[#fff]'>In-Progress</h3>
                    <h1 className='text-6xl font-semibold text-[#fff] '>{progress}</h1>
                <div className='absolute top-0 left-0'><img src={vector1} alt="" /></div>
                <div className='absolute top-0 right-0'><img src={vector1} alt="" className='scale-x-[-1]' /></div>
            </div>
            <div className='relative p-[80px] w-full md:w-[620px] rounded-[8px] bg-gradient-to-r from-[#54cf68] to-[#00827a] text-center'>
                <h3 className='text-2xl font-normal text-[#fff]'>Resolved</h3>
                    <h1 className='text-6xl font-semibold text-[#fff] '>{resolvedTask.length}</h1>
                <div className='absolute top-0 left-0'><img src={vector1} alt="" /></div>
                <div className='absolute top-0 right-0'><img src={vector1} alt="" className='scale-x-[-1]' /></div>
            </div>
            
        </div>
        </div>
    );
};

export default Banner;