import React from "react";
import ImgKirirom from "../assets/beltei_international_school_campus1.jpg";

function Kirirom() {
  return (
    <div className="Kirirom">
      <h6
        className="text-success text-center mt-5"
        style={{ fontSize: "2rem" }}
      >
        BELTEI Campus 1 (Kirirom)
      </h6>
      <img src={ImgKirirom} className="w-100 mt-4" alt="" />
      <p className="mt-3" style={{ fontSize: "1.5rem", textAlign: "justify" }}>
        <span className=" text-primary">
          BELTEI Kirirom is located at 77, Street 125, Sangkat Veal Vong, Khan 7
          Makara, Phnom Penh and was officially opened on
        </span>
        <span className="text-success">January 01, 2002</span>
        <span className="text-primary">and presided over by</span>
        <span className="text-success">Mr. Oum Hoeung,</span>
        <span className="text-primary">
          Director of Phnom Penh Municipal Department of Education, Youth and
          Sport. It is a
        </span>
        <span className="text-success">five-story building.</span>
      </p>
    </div>
  );
}

export default Kirirom;
