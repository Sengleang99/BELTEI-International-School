import React from "react";
import campus5 from "../assets/beltei_international_school_campus5.jpg";

function Chba_Ampeov() {
  return (
    <div className="Chba_Ampeov">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 5 (Chbar Ampoeu)
      </p>
      <img src={campus5} className="w-100 mt-4" alt="" />
      <p
        className="text-primary mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is situated at 36, National Road 1, Sangkat Chba Ampov I, Khan Chba
        Ampov, Phnom Penh. It was inaugurated on August 02, 2007 and presided
        over by His Excellency Mob Sarin, Deputy Phnom Penh Municipal Governor.
        It is a reinforced concrete and six-story building with convenient
        parking lots in the basement and has 55 rooms and it belongs to BELTEI,
        which was built by BELTEI Construction Company of BELTEI Group, and it
        belongs to BELTEI.
      </p>
    </div>
  );
}

export default Chba_Ampeov;
