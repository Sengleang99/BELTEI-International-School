import React from "react";
import campus14 from "../assets/beltei_international_school_campus14.jpg";

function Takhmao() {
  return (
    <div className="Takhmao">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 14 (Takhmao City)
      </p>
      <img src={campus14} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        BELTEI International School Campus 14 (Takhmao Town), which is located
        at Building Nº 786A, National Road number 2, Sangkat Preak Reosey,
        Takhmao City, Kandal Province. The event was presided over by H.E. LY
        Chheng, Director-General of BELTEI Group and Lok Chumteav. The BELTEI
        International School Campus 14 building consists of 7 floors including a
        basement for parking; 70 classrooms; terrace for exercise; and a
        canteen., which was built by BELTEI Construction Company of BELTEI
        Group, and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default Takhmao;
