import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TransactionsTable from "../components/TransactionsTable";
import Modal from "../components/Modal";

const Transactions = () => {
  const {
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    sortOrder,
    setSortOrder,
    role,
    setRole,
  } = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null); // 🔥 important

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap justify-between">
        <div className="space-x-2">
          <input
            type="text"
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-blue-300 p-2  rounded-lg bg-white"
          />

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-blue-300 p-2 cursor-pointer rounded-lg bg-white"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-blue-300 cursor-pointer p-2 rounded-lg bg-white"
          >
            <option value="latest">Latest</option>
            <option value="amount">Amount</option>
          </select>
          {role === "admin" && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-lg"
            >
              + Add Transaction
            </button>
          )}
        </div>
        <div>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="cursor-pointer border border-blue-300 p-2 rounded-lg bg-white"
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      <TransactionsTable  setIsModalOpen={setIsModalOpen}
  setEditData={setEditData}/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} editData={editData}
  setEditData={setEditData}/>
    </div>
  );
};

export default Transactions;
