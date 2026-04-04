import React from "react";
import RightSideNavBar from "./RightSideNavBar";
import { Outlet } from "react-router-dom"; 

const MainContent = () => {
  return (
    <div className="p-5 bg-blue-100 rounded-r-xl">
      <RightSideNavBar />
       <hr className="text-white"/>
      <div className="p-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
