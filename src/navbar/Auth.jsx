import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Auth = () => {
  return (
    <div className="Auth">
      <span>
        <BiSearchAlt2 />
      </span>
      <button className="login">Log in</button>
      <button className="joinnow">JOIN NOW</button>
    </div>
  );
};

export default Auth;
