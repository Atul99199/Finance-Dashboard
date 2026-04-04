import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import trendingUp from "../assets/icons/trending_up.svg";
import trendingDown from "../assets/icons/trending_down.svg";

const Insights = () => {
  const { transactions } = useContext(AppContext);
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let highestCategory = "N/A";
  let highestAmount = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > highestAmount) {
      highestAmount = categoryMap[cat];
      highestCategory = cat;
    }
  }

  const monthly = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expense += t.amount;
    }
  });

  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const isExpenseHigher = expense > income;

  const insight = isExpenseHigher
    ? "Your expenses are higher than your income."
    : "Your income is higher than your expenses.";

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-400  to-blue-500 p-5 rounded-xl shadow">
        <h2 className=" font-semibold text-[25px] text-white">
          Highest Spending Category
        </h2>
        <div className="flex gap-2">
          <p className="mt-2  text-white text-[20px] font-bold">
            {highestCategory} -
          </p>
          <p className="mt-2 text-gray-600 text-[20px] font-bold text-red-700">
            ₹{highestAmount}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#4f8cff] to-[#1d5ed8] p-5 rounded-xl shadow">
        <h2 className="font-semibold text-[25px] text-white">
          Monthly Comparison
        </h2>

        {Object.entries(monthly).map(([month, data]) => (
          <div key={month} className="flex justify-between mt-2 text-sm">
            <span className="text-[20px] font-bold text-white">{month}</span>
            <span className="text-[20px] font-bold">
              <span className="text-green-500 ">₹{data.income}</span> /{" "}
              <span className="text-red-400 ">₹{data.expense}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold text-[25px] ">Insight</h2>

        <p
          className={`mt-2 font-smibold text-[20px] flex items-center gap-2 ${
            isExpenseHigher ? "text-red-600" : "text-green-600"
          }`}
        >
          {isExpenseHigher ? (
            <img src={trendingDown} />
          ) : (
            <img src={trendingUp} />
          )}{" "}
          {insight}
        </p>
      </div>
    </div>
  );
};

export default Insights;
