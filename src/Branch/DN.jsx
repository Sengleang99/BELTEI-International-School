import React from "react";
import campus3 from "../assets/big_03.png";

function DN() {
  return (
    <div className="DN">
      <h6
        className="text-success text-center mt-5"
        style={{ fontSize: "2rem" }}
      >
        BELTEI Campus 3 (DN)
      </h6>
      <img src={campus3} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at Nº 10A, Street 118, Sangkat Phsar Depo 3, Khan Tuol
        Kork, Phnom Penh City. It was inauguration on October 30, 2014, and
        highly presided over by H.E. Ly Chheng, Director-General of BELTEI Group
        and President of BELTEI International University and Lok Chum Teav. It
        is the transformation of the former BELTEI Campus 3 (DN) into the new
        one (It’s been operated since April 20, 2005) due to the end of the
        contract. It is seven-storey reinforced concrete building with 60 rooms
        and basement and ground floor for parking lot, which was built by BELTEI
        Construction Company of BELTEI Group, and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default DN;
