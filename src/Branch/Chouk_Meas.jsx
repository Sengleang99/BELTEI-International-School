import React from "react";
import campus16 from "../assets/beltei-international-school-in-cambodia-beltei21.jpg";

function Chouk_Meas() {
  return (
    <div className="Chouk_Meas">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 21 (Chhouk Meas Market)
      </p>
      <img src={campus16} className="w-100 mt-4" alt="" />
      <p
        className="text-primary mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at Street Okhna Triheng (2011) kok Kleang Village, sangkat
        Kok kleang, Khan Sen sok, Phnom Penh. It was inaugurated on September
        03, 2020 and highly presided over by H.E. Dr. LY Chheng, a Member of the
        National Assembly for Phnom Penh Capital City, founder and the
        Director-General of BELTEI Group and the Chairman of the Biard Directors
        of BELTEI International University. It is nine storey reinforced
        concrete building with 115 rooms and a basement for parking.
      </p>
    </div>
  );
}

export default Chouk_Meas;
