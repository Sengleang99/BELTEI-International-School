import React from "react";
import { Link } from "react-router-dom";
import language from "../assets/change_languages.gif";
import backTobg from "../assets/belgroupeng.png";
import hotnew from "../assets/hot_newseng_2014-2015.png";
import academic from "../assets/newtermEng2023up.gif";
import listGT from "../assets/graduate.png";
import esl from "../assets/esl.png";

import diploma from "../assets/Level12.png";
import level6 from "../assets/Level6.png";
import presschool from "../assets/Preschool6.png";
import header from "../assets/header (1).png";
import level12 from "../assets/level12 (1).png";
import level9 from "../assets/level9.png";
import level06 from "../assets/level6 (1).png";
import level3 from "../assets/level3.png";
import useronline from "../assets/beltei_user_onlinee.png";
import visiter from "../assets/download.png";

const SideBarRight = (props) => {
  const Beltei_Group = "https://www.belteigroup.com.kh/index2.htm";
  const Visiter = "https://s05.flagcounter.com/more/UiKc/";
  return (
    <div>
      <img src={language} className="w-100" alt="" />

      <div className="Beltei_Group">
        <a href={Beltei_Group} target="_blank" rel="noopener noreferrer">
          <img src={backTobg} className="w-100" alt="" />
        </a>
      </div>

      <img src={hotnew} className="w-100" alt="" />
      <img src={academic} className="w-100" alt="" />
      <img src={listGT} className="w-100" alt="" />
      <img src={esl} className="w-100" alt="" />
      <Link to={"/ESL"}>
        <img src={diploma} className="w-100" alt="" />
      </Link>
      <Link to={"/ESL_Level6"}>
        <img src={level6} className="w-100" alt="" />
      </Link>
      <Link to={"/Preschool"}>
        <img src={presschool} className="w-100" alt="" />
      </Link>

      <img src={header} className="w-100" alt="" />
      <Link to={"/Level12"}>
        <img src={level12} className="w-100" alt="" />
      </Link>
      <Link to={"/Level9"}>
        <img src={level9} className="w-100" alt="" />
      </Link>
      <Link to={"/Level6"}>
        <img src={level06} className="w-100" alt="" />
      </Link>
      <Link to={"/Level3"}>
        <img src={level3} className="w-100" alt="" />
      </Link>

      <img src={useronline} className="w-100" alt="" />
      <a href={Visiter}>
        <img src={visiter} className="w-100" alt="" />
      </a>

      {props.children}
    </div>
  );
};
export default SideBarRight;
