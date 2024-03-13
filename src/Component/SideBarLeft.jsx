import React from "react";
import About from "../assets/about_school.png";
import img1 from "../assets/message_director (1).png";
import img2 from "../assets/purpose.png";
import img3 from "../assets/vision.png";
import img4 from "../assets/school_profile.png";
import img5 from "../assets/sturcture.jpg";
import img6 from "../assets/why_beltei.jpg";
import Program from "../assets/program.png";
import program1 from "../assets/general_edu.png";
import program2 from "../assets/esl_program.png";
import program3 from "../assets/China-Eng.jpg";
import program4 from "../assets/IMA-ENG.jpg";
import program5 from "../assets/toefl.png";
import recognition from "../assets/recognition.png";
import recognition1 from "../assets/local_new.png";
import Collaboration from "../assets/international_new.png";
import EDocument from "../assets/document.png";
import GradeAstudent from "../assets/gradA_student_eng.png";
import OutstandingS from "../assets/outstanding_country.png";
import OutstandingI from "../assets/outstanding_city.png";
import gener from "../assets/general.png";
import high from "../assets/Grade12.png";
import junoior from "../assets/Grade9.png";
import primary from "../assets/Grade6.png";
import menuTitle from "../assets/beltei_menu_titlee.png";
import firstP from "../assets/beltei-international-school-in-cambodia-gradeA2017.png";
import videop from "../assets/header.png";
import grade12 from "../assets/grade12-7th.png";
import grade9 from "../assets/grade9-7th.png";
import grade6 from "../assets/grade6-7th.png";
import grade3 from "../assets/grade3-7th.png";
import releaseyear from "../assets/header_booklet.png";
import releaseyear1 from "../assets/beltei_internatinal_school_in_cambodia_booklet2022.png";

const SideBarLeft = () => {
  return (
    <div className="side-left p-2">
      <div className="row ">
        <div className="col-sm-12">
          <div className="about">
            <img src={About} className="w-100" alt="" />
            <img src={img1} className="w-100" alt="" />
            <img src={img2} className="w-100" alt="" />
            <img src={img3} className="w-100" alt="" />
            <img src={img4} className="w-100" alt="" />
            <img src={img5} className="w-100" alt="" />
            <img src={img6} className="w-100" alt="" />
          </div>
          <div className="program">
            <img src={Program} className="w-100" alt="" />
            <img src={program1} className="w-100" alt="" />
            <img src={program2} className="w-100" alt="" />
            <img src={program3} className="w-100" alt="" />
            <img src={program4} className="w-100" alt="" />
            <img src={program5} className="w-100" alt="" />
          </div>
          <div className="recognition">
            <img src={recognition} className="w-100" alt="" />
            <img src={recognition1} className="w-100" alt="" />
            <img src={Collaboration} className="w-100" alt="" />
          </div>
          <div className="E-document">
            <img src={EDocument} className="w-100" alt="" />
            <img src={GradeAstudent} className="w-100" alt="" />
            <img src={OutstandingS} className="w-100" alt="" />
            <img src={OutstandingI} className="w-100" alt="" />
          </div>
          <div className="general">
            <img src={gener} className="w-100" alt="" />
            <img src={high} className="w-100" alt="" />
            <img src={junoior} className="w-100" alt="" />
            <img src={primary} className="w-100" alt="" />
          </div>
          <div className="menu">
            <img src={menuTitle} className="w-100" alt="" />
            <img src={firstP} className="w-100" alt="" />
            <img src={videop} className="w-100" alt="" />
            <img src={grade12} className="w-100" alt="" />
            <img src={grade9} className="w-100" alt="" />
            <img src={grade6} className="w-100" alt="" />
            <img src={grade3} className="w-100" alt="" />
            <img src={releaseyear} className="w-100" alt="" />
            <img src={releaseyear1} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBarLeft;
