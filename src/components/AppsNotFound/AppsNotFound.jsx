import React from 'react';
import appsNotFoundImage from "../../assets/App-Error.png"
import { Link } from 'react-router';

const AppsNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center m-5 '>
            <h1 className='text-5xl font-extrabold text-[#001931]'>No Apps Found</h1>
            <img src={appsNotFoundImage} alt="appsNotFound" className='m-4'/>
            <Link to="/">
                <button className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-10 py-2 text-base font-semibold text-white cursor-pointer'>Go Back</button>
            </Link>
        </div>
    );
};

export default AppsNotFound;