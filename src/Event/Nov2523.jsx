import React from "react";
import img1 from "../assets/1 (1).jpg";
import img2 from "../assets/2 (1).jpg";
import img3 from "../assets/3 (2).jpg";
import img4 from "../assets/4 (3).jpg";
import img5 from "../assets/5 (1).jpg";
import img6 from "../assets/5 (2).jpg";
import img15 from "../assets/6 (2).jpg";
import img16 from "../assets/7 (2).jpg";
import img17 from "../assets/8 (1).jpg";
import img18 from "../assets/9 (1).jpg";
import img21 from "../assets/16 (1).jpg";
import img20 from "../assets/22 (1).jpg";
import img22 from "../assets/23 (1).jpg";
import img23 from "../assets/33.jpg";
import img24 from "../assets/8.jpg";
import img29 from "../assets/32.jpg";

function Nov2523() {
  return (
    <div className="Nov2523">
      <div className="title">
        <p className="text-success text-center">
          BELTEI International School organized the 1st Recognition
        </p>
        <p className="text-success text-center">
          and Registration Ceremony of the Youth and Children's Council
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p
            className="text-primary text-break"
            style={{ fontSize: "1.2rem", textAlign: "justify" }}
          >
            BELTEI International School organized a the 1st Recognition and
            Registration Ceremony of the Youth and Children's Council of 26
            Campus of BELTEI International School for the academic year
            2023-2024 with a total of 591 students which was presided over by
            H.E. Ly Bunchhay, Deputy Director-General of BELTEI Group and Head
            of Campus-Directors. The ceremony was held at conference hall of
            BELTEI International University, Campus 2 (Chom Chao Flyover) on
            Saturday afternoon, November 25, 2023.
          </p>
        </div>
        <div className="col-lg-6 ">
          <img src={img1} className="w-100 p-2 " alt="" />
          <img src={img2} className="w-100 p-2" alt="" />
          <img src={img3} className="w-100 p-2" alt="" />
          <img src={img4} className="w-100 p-2" alt="" />
          <img src={img5} className="w-100 p-2" alt="" />
          <img src={img6} className="w-100 p-2" alt="" />
        </div>
        <table>
          <tr>
            <td>
              <img src={img15} className="w-100 m-1 p-1" alt="" />
              <img src={img17} className="w-100 m-1 p-1" alt="" />
              <img src={img20} className="w-100 m-1 p-1" alt="" />
              <img src={img22} className="w-100 m-1 p-1" alt="" />
              <img src={img23} className="w-100 m-1 p-1" alt="" />
            </td>
            <td>
              <img src={img16} className="w-100 m-1 p-1" alt="" />
              <img src={img18} className="w-100 m-1 p-1" alt="" />
              <img src={img21} className="w-100 m-1 p-1" alt="" />
              <img src={img29} className="w-100 m-1 p-1" alt="" />
              <img src={img24} className="w-100 m-1 p-1" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Nov2523;
