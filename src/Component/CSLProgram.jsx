import React from "react";
import title from "../assets/china-title-eng.jpg";
import logoChines from "../assets/logo.png";
function CSLProgram() {
  return (
    <div className="CSLProgram">
      <img src={title} alt="" />
      <div>
        <p>No Title</p>
        <hr />
        <ul>
          <li>CSL Program Overview</li>
          <hr />
          <li>Preschool</li>
          <hr />
          <li>Younger Learners</li>
          <hr />
          <li>Teenager or Adult Learners</li>
          <hr />
          <li>Date and Time</li>
          <hr />
        </ul>
      </div>
      <img src={logoChines} className="w-100" alt="" />
    </div>
  );
}

export default CSLProgram;
