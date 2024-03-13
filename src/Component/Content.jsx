import React from "react";
import GradeA from "../assets/GradeAContent.png";
import content from "../assets/new_ay_23_24.jpg";
import content1 from "../assets/new_ay_23_24anu.jpg";
import facebook from "../assets/school_facebook.png";
import Youtube from "../assets/beltei_youtube.png";

const Content = () => {
  const Beltei_School = "https://web.facebook.com/belteischool?_rdc=1&_rdr";
  const YouTube = "https://www.youtube.com/user/BELTEIGROUP";
  return (
    <div className="p-2 mt-5">
      <img src={GradeA} className="w-100" alt="" />
      <img src={content} className="w-100 mt-2" alt="" />
      <img src={content1} className="w-100 mt-2" alt="" />

      <h2
        className=" text-danger text-center p-3 mt-5"
        style={{ fontSize: "1.3rem" }}
      >
        <h1 className="text-danger"> BELTEI, the best qaulity Education</h1>
      </h2>
      <div className="socail-media p-5 col-sm-12 align-items-center justify-content-center">
        <a href={Beltei_School} target="_blank" rel="noopener noreferrer">
          <img src={facebook} className=" w-100 " alt="" />
        </a>
        <a href={YouTube} target="_blank" rel="noopener noreferrer">
          <img src={Youtube} className=" w-100 " alt="" />
        </a>
      </div>
    </div>
  );
};
export default Content;
