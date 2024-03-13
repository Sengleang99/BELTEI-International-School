import React from "react";
import { Link } from "react-router-dom";
import "../style/maincontainer.css";
import Message_From_President from "../assets/message_director (1).png";
import Purpose from "../assets/purpose.png";
import About_School from "../assets/about_school.png";
import vision from "../assets/vision.png";
import hhistoryy from "../assets/school_profile.png";
import structure from "../assets/sturcture.jpg";
import mybeltei from "../assets/why_beltei.jpg";
import MainProgram from "../assets/program.png";
import KhGenderEducation from "../assets/general_edu.png";
import ESL from "../assets/esl_program.png";
import CSL from "../assets/China-Eng.jpg";
import Intelligent from "../assets/IMA-ENG.jpg";
import Prepration_course from "../assets/toefl.png";
import TitleRecognition from "../assets/recognition.png";
import Recognition from "../assets/local_new.png";
import International from "../assets/international_new.png";
import Document from "../assets/document.png";
import GradeAstudent from "../assets/gradA_student_eng.png";
import Beltei_outstanding1 from "../assets/outstanding_country.png";
import Beltei_outstanding2 from "../assets/outstanding_city.png";
import Graduate_student from "../assets/graduate.png";
import General_Education from "../assets/general.png";
import Beiltei_Hight from "../assets/Grade12.png";
import Beltei_junior from "../assets/Grade9.png";
import Beltei_Primary from "../assets/Grade6.png";
import Outstanding_student from "../assets/beltei_menu_titlee.png";
import LevelIn2027 from "../assets/beltei-international-school-in-cambodia-gradeA2017.png";
import PublicSpeaking from "../assets/header.png";
import Grade12 from "../assets/grade12-7th.png";
import Grade9 from "../assets/grade9-7th.png";
import Grade6 from "../assets/grade6-7th.png";
import Grade3 from "../assets/grade3-7th.png";
import Booklet from "../assets/header_booklet.png";
import Release_Year from "../assets/beltei_internatinal_school_in_cambodia_booklet2022.png";
import "../style/Sidebar.css";

function Sidebar(props) {
  const FacebookPDF =
    "https://www.beltei.edu.kh/dl/BELTEI%20IS_Booklet_Final_2022.pdf";
  return (
    <div>
      <Link to={"/"}>
        <img src={About_School} className="w-100" alt="" />
      </Link>

      <Link to={"/SMSFromPD"}>
        <img src={Message_From_President} className="w-100" alt="" />
      </Link>

      <Link to={"/Purpose"}>
        <img src={Purpose} className="w-100" alt="" />
      </Link>

      <Link to={"/Vision"}>
        <img src={vision} className="w-100" alt="" />
      </Link>

      <Link to={"/history"}>
        <img src={hhistoryy} className="w-100" alt="" />
      </Link>

      <img src={structure} className="w-100" alt="" />

      <Link to={"/WhyBeltei"}>
        <img src={mybeltei} className="w-100" alt="" />
      </Link>

      <img src={MainProgram} className="w-100" alt="" />

      <Link to={"/KGE"}>
        <img src={KhGenderEducation} className="w-100" alt="" />
      </Link>

      <Link to={"/ESLProgram"}>
        <img src={ESL} className="w-100" alt="" />
      </Link>

      <Link to={"/CSLProgram"}>
        <img src={CSL} className="w-100" alt="" />
      </Link>

      <Link to={"/Intelligent"}>
        <img src={Prepration_course} className="w-100" alt="" />
      </Link>

      <Link to={"/Prepration"}>
        <img src={Intelligent} className="w-100" alt="" />
      </Link>

      <img src={TitleRecognition} className="w-100" alt="" />

      <Link to={"/Recognition"}>
        <img src={Recognition} className="w-100" alt="" />
      </Link>
      <Link to={"/Collaboration"}>
        <img src={International} className="w-100" alt="" />
      </Link>

      <img src={Document} className="w-100" alt="" />

      <Link to={"/GradeA_Student"}>
        <img src={GradeAstudent} className="w-100" alt="" />
      </Link>
      <Link to={"/Nation_level"}>
        <img src={Beltei_outstanding1} className="w-100" alt="" />
      </Link>
      <Link to={"/City_Level"}>
        <img src={Beltei_outstanding2} className="w-100" alt="" />
      </Link>
      <img src={Graduate_student} className="w-100" alt="" />
      <img src={General_Education} className="w-100" alt="" />

      <Link to={"/Beltei_Hight"}>
        <img src={Beiltei_Hight} className="w-100" alt="" />
      </Link>
      <Link to={"/Beltei_junior"}>
        <img src={Beltei_junior} className="w-100" alt="" />
      </Link>
      <Link to={"/Primery_Certificate"}>
        <img src={Beltei_Primary} className="w-100" alt="" />
      </Link>

      <img src={Outstanding_student} className="w-100" alt="" />
      <img src={LevelIn2027} className="w-100" alt="" />

      <Link to={"/Grade12"}>
        <img src={PublicSpeaking} className="w-100" alt="" />
      </Link>

      <Link to={"/Grade12"}>
        <img src={Grade12} className="w-100" alt="" />
      </Link>
      <Link to={"/Grade9"}>
        <img src={Grade9} className="w-100" alt="" />
      </Link>
      <Link to={"/Grade6"}>
        <img src={Grade6} className="w-100" alt="" />
      </Link>
      <Link to={"/Grade3"}>
        <img src={Grade3} className="w-100" alt="" />
      </Link>
      <Link to={"/Intelligent"}>
        <img src={Booklet} className="w-100" alt="" />
      </Link>
      <div className="Booklet_PDF">
        <a href={FacebookPDF} target="blank">
          <img src={Release_Year} className="w-100" alt="" />
        </a>
      </div>

      {props.children}
    </div>
  );
}

export default Sidebar;
