// import React, { useState } from "react";
// import { useLoaderData, useNavigation } from "react-router";
// import SearchedApp from "../../components/SearchedApp/SearchedApp";

// import Card from "../../components/Cards/Card";
// import AppsNotFound from "../../components/AppsNotFound/AppsNotFound";

// const AllApps = () => {

//   const data = useLoaderData();
//   const [searchApp, setSearchApp] = useState("");  

//   const search = data.filter((searchedApp) =>
//     searchedApp.title.toLowerCase().includes(searchApp.toLowerCase())
//   );

//   if(search.length == 0) return <AppsNotFound></AppsNotFound>
  
//   return (
//     <div>

//       <div className="m-5 p-2.5 text-center">
//         <h1 className="text-[#001931] text-5xl font-bold">
//           Our All Applications
//         </h1>
//         <p className="text-xl text-[#627382] mt-3">
//           Explore All Apps on the Market developed by us. We code for Millions
//         </p>
//       </div>
//       <div className="flex justify-between">
//         <p className="text-2xl font-semibold p-2.5">
//           <span>({search.length})</span> Apps Found
//         </p>

//         <input
//           type="text"
//           placeholder="Search Apps"
//           className="input input-primary"
//           onChange={(e) => setSearchApp(e.target.value)}
//         />
//       </div>
//       <div className="grid grid-cols-4">
//         {
//             search.map((card) => <Card card={card}></Card>)
//         }
//       </div>
//     </div>
//   );
// };

// export default AllApps;


// new

import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Card from "../../components/Cards/Card";
import AppsNotFound from "../../components/AppsNotFound/AppsNotFound";
import Spinner from "../../components/Spinner/Spinner";

const AllApps = () => {
  const data = useLoaderData() || [];
  const [searchApp, setSearchApp] = useState("");
  const [lateSearch, setLateSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLateSearch(searchApp);
      setLoading(false);
    }, 400); 

    return () => clearTimeout(timer); 
  }, [searchApp]);

  
  const searchResults = data.filter((app) =>
    app.title.toLowerCase().includes(lateSearch.toLowerCase())
  );

  return (
    <div className='inter-font'>
      <div className="m-5 p-2.5 text-center">
        <h1 className="text-[#001931] text-5xl font-bold">
          Our All Applications
        </h1>
        <p className="text-xl text-[#627382] mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-semibold">
          <span>({searchResults.length})</span> Apps Found
        </p>
        <input
          type="text"
          placeholder="Search Apps"
          className="input input-primary"
          onChange={(e) => setSearchApp(e.target.value)}
          value={searchApp}
        />
      </div>

      {
        loading && ( <Spinner></Spinner> )
      }
      
      {
        !loading && searchResults.length === 0 && lateSearch !== "" && (
          <AppsNotFound />
        )
      }

      {
        !loading && searchResults.length > 0 && (
          <div className="grid grid-cols-4 gap-4">
            {
              searchResults.map(card => <Card key={card.id} card={card} />)
            }
          </div>
        )
      }
    </div>
  );
};

export default AllApps;
