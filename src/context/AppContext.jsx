import { createContext, useState, useEffect } from "react";
import mockData from "../data/mockdata.js";

export const AppContext = createContext();

const STORAGE_KEY = "finance:transactions";

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : mockData;
    } catch {
      return mockData;
    }
  });
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");
  const [role, setRole] = useState("viewer");
  const [formData, setFormData] = useState({
  date: "",
  amount: "",
  category: "",
  type: "",
});

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    } catch {
      // ignore write errors (e.g., private mode)
    }
  }, [transactions]);


  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        search,
        setSearch,
        typeFilter,
        setTypeFilter,
        sortOrder,
        setSortOrder,
        role,
        setRole,
        formData,
        setFormData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};