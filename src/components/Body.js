import React from "react";
import Slidebar from "./Slidebar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex h-screen overflow-hidden mt-20">
      <div className="flex-none h-full overflow-y-scroll shadow-xl">
        
        <div className="h-screen"><Slidebar /></div>
      </div>
      <div className="flex-auto h-full overflow-y-auto">
        
        <div className="h-screen"><Outlet /></div>
      </div>
    </div>
  );
};

export default Body;
