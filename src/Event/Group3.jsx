import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/10.jpg";
import img18 from "../assets/17.jpg";
import img21 from "../assets/20.jpg";
import img20 from "../assets/21.jpg";

function Group3() {
  return (
    <div className="Group3">
      <div className="title">
        <p className="text-success text-center">
          BELTEI International School organizes the
        </p>
        <p className="text-success text-center">
          Graduation Ceremony of BELTEI Junior High
        </p>
        <p className="text-success text-center">
          School Diploma to Grade 9 batch 18, (Group 3)
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p
            className="text-primary text-break"
            style={{ fontSize: "1.2rem", textAlign: "justify" }}
          >
            BELTEI International School organizes the Graduation Ceremony of
            BELTEI Junior High School Diploma to Grade 9, 1 041 Students, Batch
            18, (Group 3) Who passed the Exam of BELTEI Junior High School
            Diploma, From Campus 15 to 22 which was presided over by H.E. Dr. LY
            CHHENG, Member of National Assembly for Phnom Penh Capital, Founder
            and Director General of BELTEI Group and Lok Chumteav. The ceremony
            was held on January 13, 2024, at the Conference Hall of BELTEI
            International University Campus 2 (Chom Chao Flyover).
          </p>
          <p
            className="text-primary "
            style={{ fontSize: "1.2rem", textAlign: "justify" }}
          >
            On that wonderful occasion, His Excellency Dr. LY CHHENG
            congratulated and praised the students for their study hard, and for
            being good students, as well as respecting the internal regulations,
            discipline, morality, and good virtues, without harming the family
            and society, until they succeed and receive the BELTEI Junior High
            School Diploma today. He also instructed all students to pay more
            attention to learning to develop their own ability to capture their
            own careers in the future and compete for the job market with all
            young people in ASEAN and the world. In particular, keep up with the
            technological advances of the Industrial Revolution 4.0.
          </p>
          <p className="text-primary text-break" style={{ fontSize: "1.2rem" }}>
            Finally, His Excellency Dr. and Lok Chumteav congratulated and
            presented Junior High School Diploma to the 1,041 graduates at that
            time.
          </p>
        </div>
        <div className="col-lg-6 ">
          <img src={img1} className="w-100 p-2 " alt="" />
          <img src={img2} className="w-100 p-2" alt="" />
          <img src={img3} className="w-100 p-2" alt="" />
          <img src={img4} className="w-100 p-2" alt="" />
          <img src={img5} className="w-100 p-2" alt="" />
          <img src={img6} className="w-100 p-2" alt="" />
          <img src={img7} className="w-100 p-2" alt="" />
          <img src={img8} className="w-100 p-2" alt="" />
        </div>
        <table>
          <tr>
            <td>
              <img src={img11} className="w-100 m-1 p-1" alt="" />
              <img src={img12} className="w-100 m-1 p-1" alt="" />
              <img src={img15} className="w-100 m-1 p-1" alt="" />
              <img src={img17} className="w-100 m-1 p-1" alt="" />
              <img src={img20} className="w-100 m-1 p-1" alt="" />
            </td>
            <td>
              <img src={img14} className="w-100 m-1 p-1" alt="" />
              <img src={img13} className="w-100 m-1 p-1" alt="" />
              <img src={img16} className="w-100 m-1 p-1" alt="" />
              <img src={img18} className="w-100 m-1 p-1" alt="" />
              <img src={img21} className="w-100 m-1 p-1" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Group3;
