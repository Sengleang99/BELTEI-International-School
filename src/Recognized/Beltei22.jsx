import React from "react";
import img1 from "../assets/beltei_international_school_in_cambodia_b22_1.jpg";
import img2 from "../assets/beltei_international_school_in_cambodia_b22_2.jpg";

function Beltei22() {
  return (
    <div className="Beltei22">
      <p className="fs-3 mt-5 text-center text-success">
        27-BELTEI 22 recognized by MoEYS
      </p>
      <img src={img1} className="w-100" alt="" />
      <img src={img2} className="w-100" alt="" />
    </div>
  );
}

export default Beltei22;
