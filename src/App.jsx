import { Routes, Route } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import MainContent from "./components/MainContent";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
// Pages


const App = () => {
  return (
  <div className="grid grid-cols-1 md:grid-cols-[25%_75%] lg:grid-cols-[20%_80%] gap-2 m-4 md:m-6">
      
      <LeftSideBar />

      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="insights" element={<Insights />} />
        </Route>
      </Routes>

    </div>
  );
};

export default App;