import React from "react";
import footer from "../assets/footer_bottom.png";
function Footer() {
  return (
    <div>
      <img src={footer} className="w-100" alt="" />
      <h6>
        <marquee behavior="" direction="">
          BELTEI INTERNATIONAL SCHOOL <span>ofer 5 main program such as</span>{" "}
          <span>
            1. Khmer genderal education. 2. ESL program 3. Skill training
            progaram 4. Computer Taining Program 5. Interational test
            Preparetion course
          </span>
        </marquee>
      </h6>
    </div>
  );
}

export default Footer;
