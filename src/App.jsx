import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Support from "./Pages/Support/Support";
import Transaction from "./Pages/Transaction/Transaction";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/support" element={<Support/>} />
        <Route path="/transaction" element={<Transaction/>} /> */
      </Routes>
    </Router>
  );
}

export default App;
