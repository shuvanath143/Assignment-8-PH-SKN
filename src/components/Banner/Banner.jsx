import React from 'react';
import heroImg from "../../assets/hero.png"

const Banner = () => {
    return (
        <div className='flex flex-col justify-around items-center gap-2 p-5'>
            <div>
                <h1 className='text-7xl'>We Build 
                    <br /> 
                    <span className='text-[#632EE3]'>Productive </span> 
                    Apps
                </h1>
                <div className='flex justify-center items-center text-xl font-semibold'>
                    <a className='flex justify-center items-center gap-2 m-3 p-3 border-2 border-gray-300 cursor-pointer' href="https://play.google.com/store/apps">
                        <img src="https://i.ibb.co.com/B2jJSqmq/google.png" alt="" className='w-5'/>
                        Google Play
                    </a>
                    <a className='flex justify-center items-center gap-2 m-3 p-3 border-2 border-gray-300 cursor-pointer' href="https://www.apple.com/app-store/">
                        <img src="https://i.ibb.co.com/bj5FvXBS/appstore.png" alt="" className='w-5'/>
                        App Store
                    </a>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="hero image" />
            </div>
            <div>
                <p>
                    Trusted by Millions, Built for You
                </p>
                <div className='flex justify-between items-center gap-5 text-center'>
                    <div className=''>
                        <p>Total Downloads</p>
                        <p>29.6M</p>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <p>906K</p>
                        <p>46% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <p>132+</p>
                        <p>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;