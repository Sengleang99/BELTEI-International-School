import React from "react";
import compus4 from "../assets/beltei_international_school_campus4.jpg";

function Phsar_Duoem_Skov() {
  return (
    <div className="Phsar_Duoem_Skov">
      <h6
        className="text-success text-center mt-5"
        style={{ fontSize: "2rem" }}
      >
        BELTEI Campus 4 (Phsar Deum Thkov)
      </h6>
      <img src={compus4} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem" }}
      >
        It is located at 54, Street 488, Sangkat Phsar Deum Thkov, Khan Chamka
        Mon, Phnom Penh. It was opened on August 03, 2006 and highly presided
        over by His Excellency Kep Chutema, Phnom Penh Municipal Governor. It is
        a reinforced concrete and six-story building with 45 rooms and it
        belongs to BELTEI, which was built by BELTEI Construction Company of
        BELTEI Group, and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default Phsar_Duoem_Skov;
