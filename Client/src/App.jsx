import React from "react";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import DashboardItem from "./Pages/DashboardItem";
import DashboardUser from "./Pages/DashboardUser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Signup />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}></Route>
          <Route exact path="/Dashboard/Item" element={<DashboardItem />}></Route>
          <Route exact path="/Dashboard/User" element={<DashboardUser />}></Route>
          <Route exact path="/Signin" element={<Signin />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
