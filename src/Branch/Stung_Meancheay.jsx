import React from "react";
import img from "../assets/big_09.png";

function Stung_Meancheay() {
  return (
    <div className="Stung_Meancheay">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 9 (Stung Meanchey)
      </p>
      <img src={img} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at 3032, Corner of Veng Sreng Street and 217 Sangkat Stung
        Meanchey, Khan Meanchey, Phnom Penh. It was opened on March 11, 2010 and
        highly presided over by H.E. Ly Chheng, Advisor to the Council of
        Ministers, Director-General of BELTEI Group Co., Ltd and Director of
        BELTEI International Institute. It is a reinforced concrete and
        seven-story building with convenient parking lots in the basement and
        has 135 rooms and it belongs to BELTEI, which was built by BELTEI
        Construction Company of BELTEI Group, and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default Stung_Meancheay;
