import React from "react";
import campus16 from "../assets/beltei-international-school-in-cambodia-beltei19 (1).jpg";

function PrekLeap2() {
  return (
    <div className="PrekLeap2">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 19 (Phar Prek Leap)
      </p>
      <img src={campus16} className="w-100 mt-4" alt="" />
      <p
        className="text-primary mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at the National Road Nº 6A, Sangkat Preak Leab, Khan Chroy
        Changvar, Phnom Penh City. It was inaugurated on July 25, 2018 and
        highly presided over by H.E. Dr. LY Chheng, Director-General of BELTEI
        Group and President of BELTEI International University. It is a
        eight-storey reinforced concrete building with 70 rooms and a basement
        for parking.
      </p>
    </div>
  );
}

export default PrekLeap2;
