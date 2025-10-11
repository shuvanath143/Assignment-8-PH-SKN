import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdOutlinePreview } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import RatingsChart from "../../components/Ratings/RatingsChart";
import { getLocalStorage, setLocalStorage } from "../../SetAndGet";

const AppDetails = () => {
  const { id } = useParams();
  const [flag, setFlag] = useState(false);
  const data = useLoaderData();

  const appDetails = data.find((app) => app.id === Number(id));

  useEffect(() => {
    const installedApps = getLocalStorage("apps") || [];
    if (installedApps.includes(Number(id))) {
      setFlag(true);
    }
  }, [id]);

  const handleInstallation = () => {
    const installedApps = getLocalStorage("apps") || [];
    const appId = Number(id);

    if (!installedApps.includes(appId)) {
      const newData = [...installedApps, appId];
      setLocalStorage("apps", newData);
      setFlag(true);
      console.log("App installed:", newData);
    } else {
      console.log("App already installed");
    }
  };

  if (!appDetails) return <p>Loading app details...</p>; // safety check

  const { title, image, companyName, ratingAvg, downloads, reviews } = appDetails;

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-5 mx-2">
        <div className="border-2 border-red-500 gap-4 px-2">
          <img src={image} alt={title} className="w-full md:w-60" />
        </div>
        <div className="border-2 border-red-500 flex-1 p-4 text-center md:text-justify">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-lg text-gray-700">Developed By: {companyName}</p>
          <div className="divider"></div>
          <div className="flex flex-col md:flex-row md:gap-20">
            <div className="text-center">
              <IoMdDownload className="text-[#00d390] text-base md:text-3xl mx-auto" />
              <p className="text-[#001931] text-base md:text-xl">Download</p>
              <p className="text-[#001931] text-base md:text-4xl font-extrabold">{downloads}</p>
            </div>
            <div className="text-center">
              <FaStar className="text-[#00d390] text-base md:text-3xl mx-auto" />
              <p className="text-[#001931] text-base md:text-xl">Average Ratings</p>
              <p className="text-[#001931] text-base md:text-4xl font-extrabold">{ratingAvg}</p>
            </div>
            <div className="text-center">
              <MdOutlinePreview className="text-[#00d390] text-base md:text-3xl mx-auto" />
              <p className="text-[#001931] text-base md:text-xl">Total Reviews</p>
              <p className="text-[#001931] text-base md:text-4xl font-extrabold">{Math.floor(reviews / 1000)}K</p>
            </div>
          </div>
          <button
            onClick={handleInstallation}
            disabled={flag}
            className={`btn mt-4 px-6 py-2 rounded ${flag ? "bg-gray-400 cursor-not-allowed" : "bg-[#00d390]"}`}
          >
            {flag ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <div className="mt-10">
        <RatingsChart appDetails={appDetails} />
      </div>
    </>
  );
};

export default AppDetails;
