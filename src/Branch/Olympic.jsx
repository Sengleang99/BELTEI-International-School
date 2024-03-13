import React from "react";
import img from "../assets/beltei_international_school_campus10.jpg";

function Olympic() {
  return (
    <div className="Olympic">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 10 (Ang Teuk Olympic)
      </p>
      <img src={img} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-justify text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at 57, Corner of Street 217 and 290, Sangkat Tuol Svay
        Prey II, Khan Chamcarmon, Phnom Penh. It was opened on September 13,
        2010, and highly presided over by H.E. Ly Chheng, Advisor to the Council
        of Ministers and Director-General of BELTEI Group Co., Ltd. It is a
        reinforced concrete and seven-story building with convenient parking
        lots in the basement and has 55 rooms and it belongs to BELTEI, which
        was built by BELTEI Construction Company of BELTEI Group, and it belongs
        to BELTEI.
      </p>
    </div>
  );
}

export default Olympic;
