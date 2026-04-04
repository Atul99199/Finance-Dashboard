import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

const TransactionsTable = ({ setIsModalOpen, setEditData }) => {
  const { transactions, search, typeFilter, sortOrder, role } =
    useContext(AppContext);

  let filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()),
  );

  if (typeFilter !== "all") {
    filtered = filtered.filter((t) => t.type === typeFilter);
  }

  if (sortOrder === "amount") {
    filtered.sort((a, b) => b.amount - a.amount);
  } else {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div className="bg-white rounded-xl  border border-blue-300 shadow p-4 overflow-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-500 text-sm">
            <th className="py-2">Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role == "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{t.date}</td>
              <td>{t.category}</td>

              <td
                className={`font-semibold ${
                  t.type === "income" ? "text-green-500" : "text-red-500"
                }`}
              >
                ₹{t.amount}
              </td>

              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    t.type === "income"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {t.type}
                </span>
              </td>
              <td>
                {role === "admin" && (
                  <button  onClick={() => {
        setEditData(t);        // send data
        setIsModalOpen(true);  // open modal
      }} className="text-blue-500 cursor-pointer hover:bg-gray-200 hover:text-black p-1 rounded">Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-4">No transactions found</p>
      )}
    </div>
  );
};

export default TransactionsTable;
