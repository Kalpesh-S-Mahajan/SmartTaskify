import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [users, setUsers] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [authData] = useContext(AuthContext); // employees array

  // Load login info if page refreshed
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUsers(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, []);

  // Login Check
  const handleLogin = (email, password) => {
    // Admin Login
    if (email === "admin@example.com" && password === "123") {
      setUsers("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    // Employee Login
    if (authData) {
      const employee = authData.find(
        (emp) => emp.email === email && emp.password === password
      );

      if (employee) {
        setUsers("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
    }

    alert("Invalid credentials");
  };

  return (
    <>
      {!users && <Login handleLogin={handleLogin} />}
      {users === "admin" && <AdminDashboard changeUser={setUsers} />}
      {users === "employee" && (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUsers} />
      )}
    </>
  );
};

export default App;
