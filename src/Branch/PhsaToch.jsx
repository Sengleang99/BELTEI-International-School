import React from "react";
import compus4 from "../assets/beltei_international_school_campus4.jpg";

function PhsaToch() {
  return (
    <div className="PhsaToch">
      <h6
        className="text-success text-center mt-5"
        style={{ fontSize: "2rem" }}
      >
        BELTEI Campus 11 (Phsa Toch)
      </h6>
      <img src={compus4} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at #1796 National Road 5,Phsa Toch Village, Sangkat Tuol
        Sangke,Khan Russey Keo, Phnom Penh. It was opened on September 1, 2011
        and highly presided over by H.E. Ly Chheng, Advisor to the Council of
        Ministers and Director-General of BELTEI Group Co., Ltd. It is a
        reinforced concrete and seven-story building with convenient parking
        lots in the basement and has 55 rooms, which is being built by BELTEI
        Construction Company of BELTEI Group and belogs to BELTEI.
      </p>
    </div>
  );
}

export default PhsaToch;
