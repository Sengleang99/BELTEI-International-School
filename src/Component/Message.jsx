import React from "react";
import Ms from "../assets/message_from_president_eng.png";
import lycheng from "../assets/H.E_Dr_Ly_chheng_beltei.jpg";
import qu from "../assets/beltei_international_school_in_cambodia_the_best_quality.png";
import sign from "../assets/beltei_international_school_in_cambodia_singatureeng.png";

const MessageFPD = () => {
  return (
    <div className="SMSFromPD text-primary">
      <img src={Ms} className="justify-center" alt="" />
      <div className="row">
        <div className="col-md-3 m-3">
          <img
            src={lycheng}
            className=" mx-4 img-fluid imgshadow"
            style={{ textAlign: "left" }}
            alt=""
          />
        </div>
        <div className=" col-lg-7 pt-4 pt-lg-0">
          <p className="text-primary" style={{ textAlign: "justify" }}>
            Welcome Samdech, Your Excellencies, Lok Chumteav, Lok Oknha, Ladies,
            Gentlemen, Parents, Guardians and all dear students who have
            trusted, and decided to choose BELTEI International School for high
            quality and up to date knowledge to the (Digital Era) in order to
            achieve their goals in the future. The school sets out its primary
            motto for
          </p>
        </div>
        <p className="text-primary" style={{ textAlign: "justify" }}>
          the future, “Quality, Efficiency, Excellence, Morality, Virtue” the
          good will of loving education with the intention to take part in
          developing human resources with the Royal Government and developing
          our country faster, and in accordance with the Rectangular Strategy
          “for Growth, Employment, Equity, and Efficiency in Cambodia” of the
          Royal Government led by Samdech Akka Moha Sena Padei Techo HUN SEN who
          is the greatest Khmer hero and the most intelligent leader of the
          Royal Government There are 5 main programs such as:
        </p>
      </div>
      <ol className="text-primary">
        <li>General Education (Preschool, Grade 1 - 12)</li>
        <li>ESL Program (Preschool, Level 1 -12)</li>
        <li>Skills Training Programs</li>
        <li>Computer Training Courses</li>
        <li>International Test Preparation Courses.</li>
      </ol>
      <ol>
        <p>Extra-Curricular Courses:</p>
        <li>Know How Improvement Program</li>
        <li>Mental Improvement Program</li>
        <li>Field Trip Program</li>
        <li>TV Program</li>
        <li>Writing Contest Program</li>
        <li>Mathematic Contest Program</li>
        <li>Debate Program</li>
        <li>Talent Contest Program</li>
        <li>Sport</li>
      </ol>
      <ol>
        <li>
          BELTEI Mobile App for students to be able to do self-study every time
          and everywhere.
        </li>
        <li>Large library for students to research and a lot of books.</li>
        <li>
          Laboratory for student researching and experimenting with modern
          materials and equipment.
        </li>
        <li>
          Robotic for research to innovation, mechanical construction, coding,
          competence development and time management effectively by practicing
          directly with Robotic devices.
        </li>
        <li>
          The curriculum is implemented according to the BELTEI Standard in all
          BELTEI, including the study schedule, lessons, study period, start
          date, exam date, and end date.
        </li>
      </ol>
      <blockquote>
        On behalf of the management, staff and teachers of BELTEI International
        School, we are committed to developing a more modern curricula in line
        with national and international standards to improve the quality of
        education in terms of intellect, general knowledge, English, computer
        and responsive skills to the technological advances of the "Fourth
        Industrial Revolution" and training the students to have a national
        conscience, social morality, know their identity, love their country,
        know the values of culture, civilization, respect the state law, respect
        the internal rules of the school, be united without racism, status,
        role, especially good relations between School, Family and Society. We
        are looking forward to welcoming Samdech, Your Excellen-cies, Lok
        Chumteav, Lok Oknha, Ladies, Gentlemen, Parents, Guardians and all
        students to our school. We wish you have good health and success in all
        work.
      </blockquote>
      <p style={{ textAlign: "justify" }}>
        We are looking forward to welcoming Samdech, Your Excellen-cies, Lok
        Chumteav, Lok Oknha, Ladies, Gentlemen, Parents, Guardians and all
        students to our school.
      </p>
      <p>We wish you have good health and success in all work.</p>
      <img src={qu} className=" w-100" alt="" />
      <img src={sign} className=" float-center" alt="" />
    </div>
  );
};

export default MessageFPD;
