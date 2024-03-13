import React from "react";
import campus15 from "../assets/beltei_international_school_campus15.jpg";

function Chumpu_Vorn() {
  return (
    <div className="Chumpu_Vorn">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 15 (Phsar Chumpou Vorn)
      </p>
      <img src={campus15} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        BELTEI International School Campus 15 (Phsar Chompovorn), which is
        located at Building Nº 119A, National Road number 4, Chumpou Vorn
        Village, Sangkat Chaom Chao, Khan Posenchey, Phnom Penh Capital City.
        The BELTEI International Institute Campus 15 building consists of 04
        floors including a basement for parking; 67 classrooms; terrace for
        exercise; and a canteen , which was built by BELTEI Construction Company
        of BELTEI Group, and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default Chumpu_Vorn;
