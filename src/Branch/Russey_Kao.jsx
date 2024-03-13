import React from "react";
import campus17 from "../assets/beltei-international-school-in-cambodia-beltei17.jpg";

function Russey_Kao() {
  return (
    <div className="Russey_Kao">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 17 (Russey Keo)
      </p>
      <img src={campus17} className="w-100 mt-4" alt="" />
      <p
        className="text-primary mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at the National Road No 5, Sangkat Svay Pak, Khan Russey
        Keo, Phnom Penh City. It was inauguration on May 02, 2017 and highly
        presided over by H.E. Ly Chheng, Director-General of BELTEI Group and
        President of BELTEI International University and Lok Chum Teav.
      </p>
    </div>
  );
}

export default Russey_Kao;
