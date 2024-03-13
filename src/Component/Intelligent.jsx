import React from "react";
import intelligent from "../assets/ima-title-eng.jpg";
import child from "../assets/beltei-international-school-in-cambodia-mou-with-ima.jpg";
import "../style/Intelligent.css";

function Intelligent() {
  const tableData = [
    {
      daysAndTime: (
        <div>
          <strong>Monday - Friday</strong>
          <p>- Evening: 05:00 PM - 07:00 PM</p>
        </div>
      ),
      yearlyTerm: "Sep - Dec | Jan - Apr | May - Aug | Sep - Nov",
    },
    {
      daysAndTime: (
        <div>
          <strong>Saturday</strong>
          <p>- Morning: 08:00 AM - 10:00 AM</p>
        </div>
      ),
      yearlyTerm: "Sep - Dec | Jan - Apr | May - Aug | Sep - Nov",
    },
    {
      daysAndTime: (
        <div>
          <strong>Monday - Friday</strong>
          <p>- Afternoon: 02:00 PM - 04:00 PM</p>
        </div>
      ),
      yearlyTerm:
        "Nov - Feb | Dec - Mar | Mar - Jun | Apr - Jul | Jul - Oct | Aug - Nov",
    },
  ];
  return (
    <div className="Intelligent">
      <img src={intelligent} alt="" />
      <div className="pharagraph">
        <div className="text">
          <p className="text-primary" style={{ alignItems: " justify" }}>
            BELEI International School is the largest private school to receive
            exclusive authorization “INTELLIGENT MENTAL-ARITHMATIC” IMA from
            Malaysia in education and knowledge on INTELLIGENT
            MENTAL-ARITHMATIC. The IMA course helps to speed up the calculation
            and development of the child’s brain using a smart, professional,
            and quick way through the use of Abacus and advanced science
            teaching techniques.
          </p>
          <p className="text-success">Admission Requirements</p>
          <p className="text-primary">
            Students who enroll in the 1st level must have a birth certificate
            that is 5 years old and up to 12 years of age.
          </p>
        </div>
        <div className="text"></div>
        <div className="mt-4">
          <h6 className="text-success">Tuition Fees</h6>
          <table>
            <thead>
              <tr>
                <th>Skills</th>
                <th>Tuition Fees</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ backgroundColor: "/* Color for Skills cell */" }}>
                  Intelligent Mental-Arithmetic
                </td>
                <td
                  style={{
                    backgroundColor: "/* Color for Tuition Fees cell */",
                  }}
                >
                  $30
                </td>
                <td
                  style={{ backgroundColor: "/* Color for Duration cell */" }}
                >
                  4 months
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <table>
            <thead>
              <tr>
                <th>Days & Time</th>
                <th>Yearly Term (4 Terms)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.daysAndTime}>
                  <td>{row.daysAndTime}</td>
                  <td>{row.yearlyTerm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <img src={child} className="w-100" alt="" />
    </div>
  );
}

export default Intelligent;
