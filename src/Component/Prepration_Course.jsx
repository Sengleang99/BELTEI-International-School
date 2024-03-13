import React from "react";
import Prepration from "../assets/preparation_course_eng.png";
function Prepration_Course() {
  return (
    <div className="Prepration">
      <img src={Prepration} className="justify-content-center" alt="" />
      <p className="text-success">No Articles</p>
      <hr />
      <p>1- Vision Mission and Goal</p>
      <hr />
      <p>2- TOEFL Test Preparation Course</p>
      <hr />
      <p>3- Password Test Demonstration</p>
      <hr />
      <p>4- ICDL Test Preparation Course</p>
      <hr />
      <p>5- IELTS Test Center</p>
      <hr />
    </div>
  );
}

export default Prepration_Course;
