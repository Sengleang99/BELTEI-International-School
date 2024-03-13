import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";
import img7 from "../assets/image7.png";
import img8 from "../assets/image8.png";
import img9 from "../assets/image9.png";
import img10 from "../assets/image10.png";
import img11 from "../assets/image11.png";
import img12 from "../assets/image12.png";
import img13 from "../assets/image13.png";
import img14 from "../assets/image14.png";
import img15 from "../assets/image15.png";
import img16 from "../assets/image16.png";
import img17 from "../assets/image17.png";
import img18 from "../assets/image18.png";
import img19 from "../assets/image19.png";
import img20 from "../assets/image20.png";
import img21 from "../assets/image21.png";
import img22 from "../assets/image22.png";
import img23 from "../assets/image23.png";
import img24 from "../assets/image24.png";
import img25 from "../assets/image25.png";
import img26 from "../assets/image26.png";

const Branch = () => {
  return (
    <div className="row p-5">
      <div className="col-sm-12 d-flex">
        <div className="card-group">
          <Link to={"/Kirirom"}>
            <img src={img1} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Toul_Tumpoung"}>
            <img src={img2} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/DN"}>
            <img src={img3} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Phsar_Duoem_Skov"}>
            {" "}
            <img src={img4} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Chba_Ampeov"}>
            <img src={img5} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/O_Rusey"}>
            <img src={img6} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Loksang"}>
            <img src={img7} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Pochintong"}>
            <img src={img8} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Stung_Meancheay"}>
            <img src={img9} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Olympic"}>
            <img src={img10} class="w-100 " alt="" />
          </Link>
        </div>
      </div>
      <div className="col-sm-12 d-flex">
        <div className="card-group">
          <Link to={"/PhsaToch"}>
            <img src={img11} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <div className="card-group">
            <Link to={"/Phsa_Deihoy"}>
              <img src={img12} class="w-100 " alt="" />
            </Link>
          </div>
        </div>
        <div className="card-group">
          <Link to={"/Camko_City"}>
            <img src={img13} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Takhmao"}>
            <img src={img14} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Chumpu_Vorn"}>
            <img src={img15} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Vengsreng"}>
            <img src={img16} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"/Russey_Kao"}>
            <img src={img17} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"PrekLeap"}>
            <img src={img18} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"PrekLeap2"}>
            <img src={img19} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"Chomchao"}>
            <img src={img20} class="w-100 " alt="" />
          </Link>
        </div>
      </div>
      <div className="col-sm-8 d-flex">
        <div className="card-group">
          <Link to={"Chouk_Meas"}>
            <img src={img21} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"Kour_Srov"}>
            <img src={img22} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"Preysar"}>
            <img src={img23} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <Link to={"Prektameak"}>
            <img src={img24} class="w-100 " alt="" />
          </Link>
        </div>
        <div className="card-group">
          <img src={img25} class="w-100 " alt="" />
        </div>
        <div className="card-group">
          <img src={img26} class="w-100 " alt="" />
        </div>
      </div>
      <div className="leter mt-3" style={{ color: "green" }}>
        <marquee behavior="" direction="">
          BELTEI International School Offers 5 Main Programs such as: 1- Khmer
          General Education | 2- ESL Program | 3- Skills Training Program | 4-
          Computer Training Program | 5- International Test Preparation Courses
        </marquee>
      </div>
    </div>
  );
};
export default Branch;
