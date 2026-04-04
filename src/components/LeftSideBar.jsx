import financeicon from "../assets/icons/money1.png";
import dashboardwhiteicon from "../assets/icons/dashboard-white.svg";
import dashboardblackicon from "../assets/icons/dashboard-black.svg";
import transwhiteicon from "../assets/icons/trans-white.svg";
import transblackicon from "../assets/icons/trans-black.svg";
import insightsBlack from "../assets/icons/insight-black.svg";
import insightswhite from "../assets/icons/insight-white.svg";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div
      className="bg-gradient-to-b from-[#5d25f0] to-[#6d28ff] h-auto md:h-[95vh] rounded-xl md:rounded-l-xl md:rounded-r-none p-3 md:p-5 md:w-full lg:w-auto">
      {" "}
      <div className="flex gap-2 tracking-[3px] md:tracking-[1px] items-center">
        <img src={financeicon} alt="" className="w-6 h-6 flex-shrink-0" />
        <h1 className="text-white text-[20px] md:text-[18px] font-bold truncate">
          Finnance
        </h1>
      </div>
      <h4 className="text-[#dee0e3] text-[15px] mt-4 md:mt-[35px]">Menu</h4>
      <div className="mt-3 md:mt-5 ml-0 md:ml-4 space-y-2 md:space-y-3">
        <NavLink to="/" className="block">
          {({ isActive }) => (
            <div
              className={`flex gap-4 p-3 md:p-2 rounded-3xl cursor-pointer transition group items-center min-w-0 ${
                isActive
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              }`}
            >
              <img
                src={dashboardwhiteicon}
                className={`${
                  isActive ? "hidden" : "block group-hover:hidden"
                }`}
                alt=""
              />
              <img
                src={dashboardblackicon}
                className={`${isActive ? "block" : "hidden group-hover:block"}`}
                alt=""
              />
              <h1 className="truncate">Dashboard</h1>
            </div>
          )}
        </NavLink>
        <NavLink to="/transactions" className="block">
          {({ isActive }) => (
            <div
              className={`flex gap-4 cursor-pointer p-3 md:p-2 rounded-3xl transition group items-center min-w-0 ${
                isActive
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              }`}
            >
              <img
                src={transwhiteicon}
                className={`${
                  isActive ? "hidden" : "block group-hover:hidden"
                }`}
                alt=""
              />
              <img
                src={transblackicon}
                className={`${isActive ? "block" : "hidden group-hover:block"}`}
                alt=""
              />
              <h1 className="truncate">Transaction</h1>
            </div>
          )}
        </NavLink>
        <NavLink to="/insights" className="block">
          {({ isActive }) => (
            <div
              className={`flex gap-4 cursor-pointer p-3 md:p-2 rounded-3xl transition group items-center min-w-0 ${
                isActive
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              }`}
            >
              <img
                src={insightswhite}
                className={`${
                  isActive ? "hidden" : "block group-hover:hidden"
                }`}
                alt=""
              />
              <img
                src={insightsBlack}
                className={`${isActive ? "block" : "hidden group-hover:block"}`}
                alt=""
              />
              <h1 className="truncate">Insights</h1>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSideBar;
