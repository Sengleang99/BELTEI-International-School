import React from "react";
import campus16 from "../assets/beltei-international-school-in-cambodia-beltei20.jpg";

function Chomchao() {
  return (
    <div className="Chomchao">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 20 (Chom Chao)
      </p>
      <img src={campus16} className="w-100 mt-4" alt="" />
      <p
        className="text-primary mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at the National Road Nº 3, Sangkat Chaom Chao 3, Khan
        Porsenchey, Phnom Penh City. It was inaugurated on March 04, 2019 and
        highly presided over by H.E. Dr. LY Chheng, a Member of the National
        Assembly for Phnom Penh Capital City, founder and the Director-General
        of BELTEI Group and the Chairman of the Biard Directors of BELTEI
        International University. It is five storey reinforced concrete building
        with 75 rooms and a basement for parking.
      </p>
    </div>
  );
}

export default Chomchao;
