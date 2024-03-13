import React from "react";
import compus11 from "../assets/beltei_international_school_campus11.jpg";

function Phsa_Deihoy() {
  return (
    <div className="Phsa_Deihoy">
      <p className="text-success text-center mt-5" style={{ fontSize: "2rem" }}>
        BELTEI Campus 12 (Phsar Deihoy)
      </p>
      <img src={compus11} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at the building Nº 2258, Hanoi Street (1019), Sangkat Teuk
        Thla, Khan Sen Sok, Phnom Penh city. It was opened on July 18, 2013 and
        highly presided over by H.E. Ly Chheng, Advisor to the Council of
        Ministers and Director-General of BELTEI Group Co., Ltd. It is a
        reinforced concrete and seven-story building with convenient parking
        lots in the basement and has 81 rooms, which is being built by BELTEI
        Construction Company of BELTEI Group and belogs to BELTEI.
      </p>
    </div>
  );
}

export default Phsa_Deihoy;
