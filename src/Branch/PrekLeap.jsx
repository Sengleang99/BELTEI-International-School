import React from "react";
import campus16 from "../assets/beltei-international-school-in-cambodia-beltei17 (1).jpg";

function PrekLeap() {
  return (
    <div className="PrekLeap">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 18 (Phar Prek Eng)
      </p>
      <img src={campus16} className="w-100 mt-4" alt="" />
      <p
        className="text-primary mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at the National Road No 1, Preak Cheang Prom Village,
        Sangkat Veal Sbov, Khan Chbar Ampov, Phnom Penh City. It is schedule to
        open in 2017.
      </p>
    </div>
  );
}

export default PrekLeap;
