import React from "react";
import img1 from "../assets/beltei-international-school-in-cambodia-01.png";
import img2 from "../assets/beltei-international-school-in-cambodia-02.png";
import img3 from "../assets/beltei-international-school-in-cambodia-03.png";
import img4 from "../assets/beltei-international-school-in-cambodia-04.png";
import img5 from "../assets/beltei-international-school-in-cambodia-05.png";
import img6 from "../assets/beltei-international-school-in-cambodia-07.png";
import img7 from "../assets/beltei-international-school-in-cambodia-08.png";
import img8 from "../assets/beltei-international-school-in-cambodia-09.png";
import img9 from "../assets/beltei-international-school-in-cambodia-16.png";
import img10 from "../assets/beltei-international-school-in-cambodia-17.png";

function Campus22() {
  const data = [
    {
      des1: "On the morning of September 3rd, 2022, BELTEI Group held a blessing ceremony to officially open BELTEI International School Campus 22 (Kour Srov Roundabout) at Building #19, National Road 2, Sangkat Prek Kampis, Khan Dangkor, Phnom Penh. The official inauguration ceremony was presided over by HE Dr. LY CHHENG, Member of Parliament for Phnom Penh Capital, Founder and Director-General of BELTEI Group and Lok Chumteav. BELTEI International School Campus 22 Building has 9 storeys, including the basement as a parking lot and 156 classrooms, as well as Laboratory Room, Robotic Rooms, Library, Consulting Rooms, Conference Halls, especially equipped with security cameras at all classrooms and each floor and has more than 1,900 enrolled students. It has five major programs: 1- General Education (Starter, Grade 1-12) 2- ESL Program (Starter, Preschool 1 – Level 12) 3- Intelligent Mental - Arithmetic (IMA) 4- Computer Training Course 5- International Test Preparation (TOEFL & IELTS). BELTEI International School offers 9 Extra-Curricular Courses over the Current curriculum for General Education and ESL Program such as: 1- Know-How Improvement 2- Mental Improvement 3- Field Trip Program 4- TV Program 5- Writing Contest Program 6- Mathematical Contest Program 7- Debate Program 8- Talent Contest Program 9- Sport. On that occasion, H.E. Dr. LY CHHENG expressed his deep gratitude to all the parents and guardians of the students who have confidence and always believe in the curriculum, training and teaching techniques of BELTEI International School and have cooperated closely with the management Team of each campus for encouraging the students who are the nation's bamboo shoots to acquire knowledge with high morals and virtues. H.E. Dr. added that with the support of the parents of this student, BELTEI International School has been able to develop the curriculum, extra-curricula as well as facility, especially the continuous expansion of BELTEI International School with 24 campuses (22 campuses in Phnom Penh and 2 campuses in Kandal Province) and BELTEI International University have 2 locations (location 1 Tuol Sleng and location 2 Chom Chao flyover). Finally, H.E. Dr. announced the official opening of BELTEI International School Campus 22 (Kour Srov Roundabout) from today onwards. The new academic year started from today onwards!!",
    },
  ];

  return (
    <div className="Campus22">
      <div className="title text-success text-center mt-4">
        <p>BELTEI International School Campus 22</p>
        <p>(Kour Srov)</p>
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
              <img src={img1} className="w-100" alt="" />
              <img src={img2} className="w-100" alt="" />
              <img src={img3} className="w-100" alt="" />
            </td>
            <td>
              <img src={img1} className="w-100" alt="" />
              <img src={img2} className="w-100" alt="" />
              <img src={img3} className="w-100" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Campus22;
