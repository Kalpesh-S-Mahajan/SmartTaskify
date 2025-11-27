import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [authData] = useContext(AuthContext); // 🔥 Extract array correctly
  const employees = authData || []; // 🔥 Prevent undefined error

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded-xl ">
      {/* Header */}
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded font-semibold">
        <h2 className="text-lg font medium w-1/5 text-center">Employees</h2>
        <h3 className="text-lg font medium w-1/5 text-center">New Task</h3>
        <h5 className="text-lg font medium w-1/5 text-center">Active Task</h5>
        <h5 className="text-lg font medium w-1/5 text-center">Completed</h5>
        <h5 className="text-lg font medium w-1/5 text-center">Failed</h5>
      </div>

      {/* Employee Data */}
      <div>
        {employees.map((elem) => (
          <div
            key={elem.id}
            className="py-2 px-4 flex justify-between rounded mt-2 bg-[#2a2a2a] hover:bg-[#333] transition"
          >
            <h2 className="text-lg font medium w-1/5 text-center">
              {elem.firstName}
            </h2>
            <h3 className="text-lg font medium w-1/5 text-center text-red-400">
              {elem.taskCounts?.newTask || 0}
            </h3>
            <h5 className="text-lg font medium w-1/5 text-center text-yellow-400">
              {elem.taskCounts?.active || 0}
            </h5>
            <h5 className="text-lg font medium w-1/5 text-center text-green-400">
              {elem.taskCounts?.completed || 0}
            </h5>
            <h5 className="text-lg font medium w-1/5 text-center text-blue-400">
              {elem.taskCounts?.failed || 0}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
