import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Menu = () => {
  return (
    <div className="menu">
      <button className="btn1">
        Courses{" "}
        <span>
          <RiArrowDropDownLine size={40} />
        </span>
      </button>
      <button className="btn2">
        Programs{" "}
        <span>
          <RiArrowDropDownLine size={40} />
        </span>
      </button>
    </div>
  );
};

export default Menu;
