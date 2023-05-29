import React from "react";
import { GiBookmarklet } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";

const LeftPage = () => {
  return (
    <div className="leftPage">
      <p>
        Access curated courses worth <br />
        <span className="rupee">₹ 18,500</span>&nbsp; at just&nbsp;
        <span className="money">₹ 99</span> per year!
      </p>
      <h3 className="courses">
        <GiBookmarklet size={50} color="#ffffff" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="sametext">100+</span>Job relavent cources
      </h3>
      <h3 className="content">
        <BsClock size={40} color="#ffffff" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="sametext">20,000+</span>Hours of content
      </h3>
      <h3 className="webinar">
        <MdLiveTv size={40} color="#ffffff" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="sametext">Exciusive</span>&nbsp;Webinar eccess
      </h3>
      <h3 className="schlorship">
        <FaGraduationCap size={40} color="#ffffff" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Scholarship
        worth&nbsp;
        <span className="sametext">₹ 94,500</span>
      </h3>
      <h3 className="adfree">
        <MdOutlineDoNotDisturbOff size={40} color="#ffffff" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="sametext"> Ad free</span>&nbsp; Learning experience
      </h3>
    </div>
  );
};

export default LeftPage;
