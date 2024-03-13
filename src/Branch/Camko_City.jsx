import React from "react";
import campus13 from "../assets/beltei_international_school_campus13.jpg";

function Camko_City() {
  return (
    <div className="Camko_City">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 13 (Camko City Roundabout)
      </p>
      <img src={campus13} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at the building Nº 163, Corner of Street 528 and 353,
        Sangkat Boeung Kak 1, Khan Tuol Kork, Phnom Penh city. It was opened on
        December 02, 2013 and highly presided over by H.E. LY Chheng,
        Director-General of BELTEI Group and Lok Chumteav. It is a reinforced
        concrete with seven-storey building with 60 rooms and a basement for
        parking, which was built by BELTEI Construction Company of BELTEI Group,
        and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default Camko_City;
