import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SearchedApp from "../../components/SearchedApp/SearchedApp";

import Card from "../../components/Cards/Card";
import AppsNotFound from "../../components/AppsNotFound/AppsNotFound";

const AllApps = () => {

  const data = useLoaderData();
  const [searchApp, setSearchApp] = useState("");

  // Search Pokemon in Content
  const search = data.filter((searchedApp) =>
    searchedApp.title.toLowerCase().includes(searchApp.toLowerCase())
  );

  if(search.length == 0) return <AppsNotFound></AppsNotFound>
  
  return (
    <div>
      <div className="m-5 p-2.5 text-center">
        <h1 className="text-[#001931] text-5xl font-bold">
          Our All Applications
        </h1>
        <p className="text-xl text-[#627382] mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">
          <span>({search.length})</span> Apps Found
        </p>

        <input
          type="text"
          placeholder="Search Apps"
          className="input input-primary"
          onChange={(e) => setSearchApp(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4">
        {
            search.map((card) => <Card card={card}></Card>)
        }
      </div>
    </div>
  );
};

export default AllApps;
