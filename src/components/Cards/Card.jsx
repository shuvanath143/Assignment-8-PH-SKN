import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ card }) => {
  const { id, title, image, ratingAvg, downloads } = card;
  console.log(ratingAvg);
  return (
    <Link to={`AppDetails/${id}`}>
      <div className="m-2 border-2 border-red-400 flex flex-col justify-center items-center p-3 shadow-sm rounded-2xl bg-white">
        <img src={image} alt="" className="h-60 rounded-2xl" />
        <p className="text-2xl font-medium my-3">{title}</p>
        <div className="flex justify-between items-center text-base font-medium w-full">
          <div className="flex items-center justify-center rounded-full px-3 py-2 bg-[#f1f5e8] text-[#00d390]">
            <IoMdDownload />
            <p className="ml-1">{downloads}</p>
          </div>
          <div className="flex items-center justify-center rounded-full px-3 py-2 bg-[#fff0e1] text-[#FF8811]">
            <FaStar />
            <p className="ml-1">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
