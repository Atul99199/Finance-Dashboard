import React from "react";
import RightSideNavBar from "./RightSideNavBar";
import { Outlet } from "react-router-dom"; 

const MainContent = () => {
  return (
    <div className="p-3 md:p-4 lg:p-5 bg-blue-100 md:rounded-r-xl rounded-t-xl md:rounded-t-none md:h-[95vh] flex flex-col">
      <RightSideNavBar />
      <hr className="text-white" />
      <div className="p-4 flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
