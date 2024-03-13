import React from "react";
import img from "../assets/beltei_international_school_campus7.jpg";

function Loksang() {
  return (
    <div className="Lolsang">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 7 (Loksang or Preah Kossamak Hospital)
      </p>
      <img src={img} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem" }}
      >
        It is located at 96, Corner of Street 160 and 265, Sangkat Teuk Laak II,
        Khan Tuol Kork, Phnom Penh. It was opened on October 13, 2008 and highly
        presided over by H.E. Ly Chheng, Advisor to the Council of Ministers,
        Director-General of BELTEI Group Co., Ltd and Director of BELTEI
        International Institute. It is a reinforced concrete and seven-story
        building with convenient parking lots in the basement and has 65 rooms
        and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default Loksang;
