import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <div className="container">
        <div className="col py-5">
          <Profile />
        </div>
        <div className="col py-5">
          <SignUp />
        </div>
        <div className="col py-5">
          <Login />
        </div>
        <div className="col py-5">
          <Logout />
        </div>
      </div>
    </>
  );
}

export default App;
