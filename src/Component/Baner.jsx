import React from "react";
import BanerBeltei from "../assets/BELTEI_international_school_logo (1).png";

const Baner = () => {
  return (
    <div className="row">
      <div className="col-lg-12" style={{ backgroundColor: "#040d5e" }}>
        <img src={BanerBeltei} className=" w-100" alt="" />
      </div>
    </div>
  );
};
export default Baner;
