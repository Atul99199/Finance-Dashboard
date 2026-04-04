import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import {
  calculateSummary,
  getBalanceTrend,
  getCategoryData,
} from "../utils/helper.jsx";
import BalanceChart from "../components/BalanceChart.jsx";
import ExpensePie from "../components/ExpensePie.jsx";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);
  const summary = calculateSummary(transactions);
  const trendData = getBalanceTrend(transactions);
  const categoryData = getCategoryData(transactions);

  return (
    <>
      <div className="grid text-white grid-cols-3 gap-4 ">
        <div className="cursor-pointer bg-gradient-to-r from-green-400  to-blue-500 hover:scale-105 transition duration-200 p-4 rounded-xl shadow">
          <h3 className="text-[20px] font-bold">Total Balance</h3>
          <p className="text-[12px] mt-4 mb-2">Current value</p>
          <p className="text-xl font-bold">₹{summary.balance}</p>
        </div>

        <div className="cursor-pointer bg-gradient-to-r from-[#ff5f5f] via-[#ff3d5a] to-[#ff2e63] hover:scale-105 transition duration-200 p-4 rounded-xl shadow">
          <h3>Income</h3>
          <p className="text-[12px] mt-4 mb-2">Current value</p>

          <p className="text-xl font-bold ">₹{summary.income}</p>
        </div>

        <div className="cursor-pointer bg-gradient-to-r from-[#4f8cff] to-[#1d4ed8] hover:scale-105 transition duration-200 p-4 rounded-xl shadow">
          <h3>Expenses</h3>
          <p className="text-[12px] mt-4 mb-2">Current value</p>

          <p className="text-xl font-bold ">₹{summary.expense}</p>
        </div>
   
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 items-stretch">
          <div className="bg-white p-4 rounded-xl h-full flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-black">
              Balance Trend
            </h2>
            <div className="flex-1 flex items-center justify-center">
              <BalanceChart data={trendData} />
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl h-full flex flex-col">
            <h2 className="text-lg font-semibold text-black">
              Spending Breakdown
            </h2>
            <div className="flex-1 flex items-center justify-center">
              <ExpensePie data={categoryData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
