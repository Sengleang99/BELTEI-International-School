import React from "react";
import img1 from "../assets/beltei-international-school-in-cambodia-01 (1).png";
import img2 from "../assets/beltei-international-school-in-cambodia-02 (1).png";
import img3 from "../assets/beltei-international-school-in-cambodia-03 (1).png";
import img4 from "../assets/beltei-international-school-in-cambodia-04 (1).png";
import img5 from "../assets/beltei-international-school-in-cambodia-05 (1).png";
import img6 from "../assets/beltei-international-school-in-cambodia-07 (1).png";
import img7 from "../assets/beltei-international-school-in-cambodia-08.png";
import img8 from "../assets/beltei-international-school-in-cambodia-09.png";
import img9 from "../assets/beltei-international-school-in-cambodia-16.png";
import img10 from "../assets/beltei-international-school-in-cambodia-10 (1).png";
import img11 from "../assets/beltei-international-school-in-cambodia-17 (1).png";

function Level12Student() {
  const data = [
    {
      des1: "On the morning of February 23, 2019, BELTEI International School held the Graduation Ceremony for 724 Level 12 students from batches 45, 46, 47, 48 and 49 at BELTEI International University l (Toul Sleng) under the presidency of H. E. Dr. Ly Chheng, Member of Parliament for Phnom Penh Capital and Director General of BELTEI Group and Louk Chumteav.Mr. LY Navuth, Deputy Director of BELTEI Group said: Currently, BELTEI International School consists of 21 campuses including 20 campuses are in operation and 1 is under construction, with the number of 42,012 students. Until 46th batch, there are 6,197 students in Level 12. The ESL Program is designed specifically for advanced students, and the textbooks are co-sponsored by McGraw-HILL Education in the United States. In addition, the school also added popular programs such as: Songs, fairy tales, and famous lecturers to students from all levels from Preschool 1 to Level 12 to make new students have the courage to share their thoughts. Upon completion of Level 12, students have the ability to speak, read, write, and especially get 5. 5 up in IELTS test so that they can apply for scholarships to study abroad.In that occasion, H. E. Dr. LY Chheng expressed his admiration for the children who worked hard to learn to respect the internal rules of the school, good discipline and good morals, not harming families and society until they received Certificates at this time. He added that all students who study English at the end of level 12 will prepare for the IELTS and that students who earn more than 6.5 points will receive 100% scholarships to study at BELTEI International University for four years, while students who earn more than 7.5 points will receive Okhna LY Chheng scholarship to study abroad as well. For students who score from 6.5 to 7.0 points but who are studying general education at BELTEI International School, all levels will receive 50% scholarship for general education till the end of grade 12. Students who scored from 7.5 points and above will receive 100% scholarship for general education until the 12th grade. H. E. Dr. added BELTEI International University also has a curriculum in the national and international language. The international curriculum focuses on 100% English as an international level, in order to make students connect from school to university in the bachelor degree and Ph.D. After that, H. E. Dr. LY Chheng awarded certificates to 724 level 12 students at that time.",
    },
  ];

  return (
    <div className="Level12Student">
      <div className="title text-success text-center mt-4">
        <p>BELTEI International School (BELTEI IS in Cambodia)</p>
        <p>724 BELTEI International School</p>
        <p>Level 12 Students Received Their Certificate</p>
      </div>
      <div className="row">
        <div className="description col-lg-6 text-center mt-4">
          <p className="p-3 text-primary" style={{ textAlign: "justify" }}>
            {data[0].des1}
          </p>
        </div>
        <div className="col-lg-6 mt-5">
          <img src={img1} className="w-100" alt="" />
          <img src={img2} className="w-100" alt="" />
          <img src={img3} className="w-100" alt="" />
          <img src={img4} className="w-100" alt="" />
          <img src={img5} className="w-100" alt="" />
          <img src={img6} className="w-100" alt="" />
          <img src={img7} className="w-100" alt="" />
          <img src={img8} className="w-100" alt="" />
          <img src={img9} className="w-100" alt="" />
          <img src={img10} className="w-100" alt="" />
        </div>
        <table>
          <tr>
            <td>
              <img src={img10} className="w-100" alt="" />
              <img src={img2} className="w-100" alt="" />
              <img src={img3} className="w-100" alt="" />
            </td>
            <td>
              <img src={img1} className="w-100" alt="" />
              <img src={img11} className="w-100" alt="" />
              <img src={img3} className="w-100" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Level12Student;
