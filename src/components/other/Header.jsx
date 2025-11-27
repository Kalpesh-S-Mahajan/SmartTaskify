import React from "react";

const Header = (props) => {
  localStorage.clear();
  const [userName, setUserName] = React.useState("");

  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const logout = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium text-amber-50">
        Hello <br />
        <span className="text-3xl font-semibold"> 👋</span>
      </h1>

      <button
        onClick={logout}
        className="bg-red-600 text-white text-lg font-medium px-2 py-2 rounded-sm "
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
