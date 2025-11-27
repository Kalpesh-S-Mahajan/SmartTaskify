import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="h-screen w-full bg-[#1b1b1b] flex justify-center items-center text-white">
      <div className="bg-[#111] border border-gray-700 shadow-xl p-10 rounded-lg w-[380px]">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-emerald-500 drop-shadow mb-3 tracking-wide">
          SmartTaskify
        </h1>
        <p className="text-gray-300 text-center mb-8 text-sm">
          Manage your tasks smartly and efficiently
        </p>

        {/* LOGIN FORM */}
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-md focus:border-emerald-500 outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-md focus:border-emerald-500 outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 py-2 bg-emerald-500 text-white hover:bg-emerald-600 transition rounded-md font-semibold text-sm"
          >
            Login
          </button>
        </form>

        {/* FOOTER */}
        <p className="mt-6 text-gray-500 text-center text-xs">
          © {new Date().getFullYear()} SmartTaskify • All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
