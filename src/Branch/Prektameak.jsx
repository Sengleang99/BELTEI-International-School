import React from "react";
import campus16 from "../assets/beltei-international-school-in-cambodia-beltei22 (1).jpg";

function Prektameak() {
  return (
    <div className="Prektameak">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 24 (Prek Tamak Roundabout)
      </p>
      <img src={campus16} className="w-100 mt-4" alt="" />
      <p
        className="text-primary mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at Phum Ta Meak, Khum Prek Ta Meak, Khsach Kandal
        District, Kandal Province. It was inaugurated on September 05, 2022 and
        highly presided over by H.E. Dr. Ly Chheng, a Member of the National
        Assembly for Phnom Penh Capital City, Founder and the Director-General
        of BELTEI Group and the Chairman of the Board of Directors of BELTEI
        International University. It is nine storey reinforced concrete building
        with 173 rooms and a basement for parking.
      </p>
    </div>
  );
}

export default Prektameak;
