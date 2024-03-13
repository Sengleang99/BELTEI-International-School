import React from "react";
import campus16 from "../assets/beltei_international_school_in_cambodia_beltei16.jfif";

function Vengsreng() {
  return (
    <div className="Vengsreng">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 16 (Phlov Koang Veng Sreng)
      </p>
      <img src={campus16} className="w-100 mt-4" alt="" />
      <p
        className="text-primary mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at Nº 77A Veng Sreng Street, Chrey Koang Village, Sangkat
        Posenchey, Phnom Penh City. It was inauguration on May 30, 2016 and
        highly presided over by H.E. Ly Chheng, Director-General of BELTEI Group
        and President of BELTEI International University and Lok Chum Teav. It
        is a four-storey reinforced concrete building with 82 rooms and basement
        for parking lot, which was built by BELTEI Construction Company of
        BELTEI Group, and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default Vengsreng;
