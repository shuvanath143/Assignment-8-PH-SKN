import React from "react";
import logoImage from "../../assets/logo.png"

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <p className="text-3xl text-blue-400 font-semibold tracking-wider">L</p>
      <div>
        <img src={logoImage} alt="" className="animate-spin h-7 w-8" />
      </div>
      <p className="text-3xl text-blue-400 font-semibold tracking-widest">
        ADING
      </p>
    </div>
  );
};

export default Spinner;
