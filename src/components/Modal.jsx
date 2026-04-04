import { useState, useContext,useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Modal = ({ isOpen, onClose,editData, setEditData }) => {
   const { transactions, setTransactions } = useContext(AppContext);

  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    type: "",
  });

useEffect(() => {
  if (editData) {
    setFormData(editData);
  } else {
    setFormData({
      date: "",
      amount: "",
      category: "",
      type: "",
    });
  }
}, [editData]);

  if (!isOpen) return null;

  const handleSubmit = () => {
  if (!formData.date || !formData.amount || !formData.category || !formData.type) {
    alert("Fill all fields");
    return;
  }

  if (editData) {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === editData.id
          ? { ...formData, id: editData.id, amount: Number(formData.amount) }
          : t
      )
    );
  } else {
    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
    };

    setTransactions((prev) => [newTransaction, ...prev]);
  }

  onClose();
  setEditData(null);

  setFormData({
    date: "",
    amount: "",
    category: "",
    type: "",
  });
};

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl w-[400px] space-y-4 shadow-lg 
                transform transition-all duration-400 scale-95 opacity-0 
                animate-[modalIn_0.4s_ease-out_forwards] "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">Add Transaction</h2>

        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: e.target.value })
          }
          className="border p-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="border p-2 rounded w-full"
        />
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="income"
              checked={formData.type === "income"}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            Income
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="expense"
              checked={formData.type === "expense"}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            Expense
          </label>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

         <button
  onClick={handleSubmit}
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  {editData ? "Update" : "Add"}
</button>
        </div>
      </div>
    </div>
  );
}

export default Modal
