import React from "react";
import campus2 from "../assets/beltei_international_school_campus2.jpg";

function Toul_Tumpoung() {
  return (
    <div className="Toul_Tumpoung">
      <h6
        className="text-success text-center mt-5"
        style={{ fontSize: "2rem" }}
      >
        BELTEI Campus 2 (Phsar Tuol Tumpoung)
      </h6>
      <img src={campus2} className="w-100 mt-4" alt="" />
      <p className="mt-3" style={{ fontSize: "1.5rem", textAlign: "justify" }}>
        <span className=" text-primary">
          It is located at 34, Street 431, Sangkat Tuol Tumpoung 1, Khan
          Chamkamon, Phnom Penh. It is a reinforced concrete and
        </span>
        <span className="text-success">seven-story building</span>
        <span className="text-primary">
          with convenient parking lots in the basement and has more than
        </span>
        <span className="text-success">50 rooms</span>
        <span className="text-primary">
          rooms and it belongs to BELTEI and it is scheduled to open on
        </span>
        <span className="text-success">May 02, 2011,</span>
        <span className="text-primary">
          which was built by BELTEI Construction Company of BELTEI Group, and it
          belongs to BELTEI.
        </span>
      </p>
    </div>
  );
}

export default Toul_Tumpoung;
