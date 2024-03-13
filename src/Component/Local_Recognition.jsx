import React from "react";
import { Link } from "react-router-dom";
import Recognition from "../assets/local_recognition.png";
import Moeys from "../assets/01 (1).png";

function Local_Recognition() {
  return (
    <div className="Recognition border">
      <img src={Recognition} className="w-100" alt="" />
      <div>
        <hr />
        <div className=" justify-content-evenly mt-5  d-flex">
          <Link to={"/Beltei24"}>
            <p className=" mt-4">1. BELTEI 24 recognized by MoEYS</p>
          </Link>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <Link to={"/Beltei23"}>
            <p className=" mt-4">2. BELTEI 23 recognized by MoEYS</p>
          </Link>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <Link to={"/Beltei22"}>
            <p className=" mt-4">3. BELTEI 22 recognized by MoEYS</p>
          </Link>

          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <p className=" mt-4">4. BELTEI 21 recognized by MoEYS</p>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <p className="mt-4">5. BELTEI 20 recognized by MoEYS</p>

          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <p className="mt-4">6 BELTEI 19 recognized by MoEYS</p>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className=" justify-content-evenly mt-5  d-flex">
          <p className=" mt-4">1. BELTEI 24 recognized by MoEYS</p>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <p className=" mt-4">2. BELTEI 23 recognized by MoEYS</p>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <p className=" mt-4">3. BELTEI 22 recognized by MoEYS</p>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <p className=" mt-4">4. BELTEI 21 recognized by MoEYS</p>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <p className="mt-4">5. BELTEI 20 recognized by MoEYS</p>

          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
        <hr />
        <div className="justify-content-evenly mt-5  d-flex">
          <p className="mt-4">6 BELTEI 19 recognized by MoEYS</p>
          <img src={Moeys} className=" justify-content-end" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Local_Recognition;
