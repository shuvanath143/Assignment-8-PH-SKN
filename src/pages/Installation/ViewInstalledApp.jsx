import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';

const ViewInstalledApp = ({sortedApp}) => {
    const {image, title, downloads, ratingAvg, size} = sortedApp
    return (
        <div className='flex flex-col md:flex-row justify-between items-center text-justify bg-white my-3 py-3 px-4 mx-2 md:mx-4 '>
            <div className='rounded-xl bg-[#dddbdb] p-3'>
                <img src={image} alt={title} className='h-15 w-15 rounded-xl'/>
            </div>
            <div className='text-center md:text-left md: flex-1'>
                <h3 className='px-3 text-xl font-semibold'>{title}</h3>
                <div className='flex items-center'>
                    <div className="flex items-center justify-center rounded-full px-3 py-1 text-[#00d390]">
                        <IoMdDownload />
                        <p className="ml-1">{downloads}</p>
                    </div>
                    <div className="flex items-center justify-center rounded-full px-3 py-1 text-[#FF8811]">
                        <FaStar />
                        <p className="ml-1">{ratingAvg}</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className="ml-1">{size}</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <button className='btn bg-[#00D390] text-white'>Uninstall</button>
            </div>
        </div>
    );
};

export default ViewInstalledApp;