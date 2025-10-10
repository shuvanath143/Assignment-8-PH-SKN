import React from 'react';
import appsNotFoundImage from "../../assets/App-Error.png"

const AppsNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center m-5 '>
            <h1 className='text-5xl font-extrabold text-[#001931]'>No Apps Found</h1>
            <img src={appsNotFoundImage} alt="appsNotFound" className='m-4'/>
        </div>
    );
};

export default AppsNotFound;