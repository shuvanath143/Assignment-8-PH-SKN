import React, { useState } from 'react';
import { getLocalStorage } from '../../SetAndGet';
import { useLoaderData } from 'react-router';
import ViewInstalledApp from './ViewInstalledApp';

const Installation = () => {
    // const [installedApps, setInstalledApps] = useState([])
    const appsId = getLocalStorage("apps")
    const data = useLoaderData() || []
    const [sortType, setSortType] = useState("");
    console.log(data, typeof appsId)

    const filteredApps = data.filter(app => appsId.includes(app.id))
    console.log(filteredApps)
    
    const convertDownloads = (str) => {
        if (!str) return 0;
        const result = str.replace("M", "");
        return result
    };
    
    const sortedApps = [...filteredApps].sort((a, b) => {
        const downloadsA = convertDownloads(a.downloads);
        const downloadsB = convertDownloads(b.downloads);

        if (sortType === "high-low") return downloadsB - downloadsA;
        if (sortType === "low-high") return downloadsA - downloadsB;
        return 0;
    });

  if (sortedApps.length === 0) return <AppsNotFound />;
    return (
        <div className='bg-[#F1F5E8] inter-font space-y-3 py-15 mx-auto text-center '>
            <h1 className='text-5xl font-bold'>Your Installed Apps</h1>
            <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>

            <div className="flex flex-col md:flex-row justify-between items-center mb-4 mx-4 space-y-3">
                <p className="text-sm md:text-2xl font-semibold">
                <span>({appsId.length})</span> Apps Found
                </p>
                <select
                    className="select w-[200px] rounded-lg bg-[#d2d2d2]"
                    onChange={(e) => setSortType(e.target.value)}
                    value={sortType}
                >
                    <option value="">Sort By Size</option>
                    <option value="high-low">High → Low</option>
                    <option value="low-high">Low → High</option>
                </select>
            </div>

            {
                sortedApps.map(sortedApp => <ViewInstalledApp key={sortedApp.id} sortedApp={sortedApp}></ViewInstalledApp>)
            }
            
        </div>
    );
};

export default Installation;