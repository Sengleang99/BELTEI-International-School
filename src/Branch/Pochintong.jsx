import React from "react";
import campus8 from "../assets/big_08.png";

function Pochintong() {
  return (
    <div className="Pochintong">
      <p
        className="text-success text-center mt-5"
        style={{ fontSize: "1.5rem" }}
      >
        BELTEI Campus 6 (O’Rusey)
      </p>
      <img src={campus8} className="w-100 mt-4" alt="" />
      <p
        className="text-primary text-center mt-2"
        style={{ fontSize: "1.5rem", textAlign: "justify" }}
      >
        It is located at 123, Russian Federation Blvd, Sangkat Kakab, Khan
        Dangkor, Phnom Penh. It was opened on May 18, 2009 and highly presided
        over by H.E. Ly Chheng, Advisor to the Council of Ministers,
        Director-General of BELTEI Group Co.,Ltd and Director of BELTEI
        International Institute. It is a reinforced concrete and four-story
        building with 50 rooms and it belongs to BELTEI, which was built by
        BELTEI Construction Company of BELTEI Group, and it belongs to BELTEI.
      </p>
    </div>
  );
}

export default Pochintong;
