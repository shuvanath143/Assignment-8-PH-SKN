import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ card }) => {
  const { id, title, image, ratingAvg, downloads } = card;

  return (
    <Link to={`AppDetails/${id}`} className="border-2 border-red-400 flex flex-col justify-center items-center md:p-3 shadow-sm rounded-2xl bg-white">
      <div className="p-2">
        <img src={image} alt="" className="h-45 w-50 md:w-full rounded-2xl" />
        <p className="text-2xl font-medium my-3 text-center">{title}</p>
        <div className="flex justify-between items-center text-base font-medium w-full">
          <div className="flex items-center justify-center rounded-full p-2 md:px-3 md:py-2 bg-[#f1f5e8] text-[#00d390]">
            <IoMdDownload />
            <p className="ml-1">{downloads}</p>
          </div>
          <div className="flex items-center justify-center rounded-full p-2 md:px-3 md:py-2 bg-[#fff0e1] text-[#FF8811]">
            <FaStar />
            <p className="ml-1">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
