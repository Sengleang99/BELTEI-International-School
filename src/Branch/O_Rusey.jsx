import React from "react";
import campus6 from "../assets/beltei_international_school_campus6.jpg";

function O_Rusey() {
  return (
    <div className="O_Rusey">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 6 (O’Rusey)
      </p>
      <img src={campus6} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        Head Office, is located at 25, Street 105, Sangkat Beung Prolit, Khan 7
        Makara, Phnom Penh. It was opened on June 03, 2008 and highly presided
        over by His Excellency Kep Chutema, Phnom Penh Municipal Governor. It is
        a reinforced concrete and seven-story building with 63 rooms and it
        belongs to BELTEI, which was built by BELTEI Construction Company of
        BELTEI Group, and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default O_Rusey;
