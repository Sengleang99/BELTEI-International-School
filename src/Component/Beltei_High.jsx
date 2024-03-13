import React from "react";
import Head from "../assets/graduate_grade12_eng.png";
import Baner from "../assets/belttei_statistics_grade12e.jpg";

function Beltei_High() {
  const data = [
    {
      academicYear: "2018-2019",
      totalStudents: 1107,
      femaleStudents: 600,
      noCerti: "8313-9419",
      nameList: "Open",
      documents: ["Photo", "Reference"],
    },
    // ... add more data rows here based on the image content
  ];
  const data1 = [
    {
      NO: "11",
      A_Y: 2015 - 2016,
      Exam_Date: 600,
      Participants: "1157",
      Passed: "987",
      In: "8.9%",
    },
  ];

  return (
    <div className="Beltei_High">
      <img src={Head} className="w-100" alt="" />
      <p className="text-center mt-2 text-success">
        Please Click the Following Academic Year
      </p>
      <table>
        <thead>
          <tr>
            <th>Academic Year</th>
            <th>Total Students</th>
            <th>Female Students</th>
            <th>No. Certi</th>
            <th>Name List</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.academicYear}>
              <td>{row.academicYear}</td>
              <td>{row.totalStudents}</td>
              <td>{row.femaleStudents}</td>
              <td>{row.noCerti}</td>
              <td>{row.nameList}</td>
              <td>{row.documents.join(", ")}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {data.map((row) => (
            <tr key={row.academicYear}>
              <td>{row.academicYear}</td>
              <td>{row.totalStudents}</td>
              <td>{row.femaleStudents}</td>
              <td>{row.noCerti}</td>
              <td>{row.nameList}</td>
              <td>{row.documents.join(", ")}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {data.map((row) => (
            <tr key={row.academicYear}>
              <td>{row.academicYear}</td>
              <td>{row.totalStudents}</td>
              <td>{row.femaleStudents}</td>
              <td>{row.noCerti}</td>
              <td>{row.nameList}</td>
              <td>{row.documents.join(", ")}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {data.map((row) => (
            <tr key={row.academicYear}>
              <td>{row.academicYear}</td>
              <td>{row.totalStudents}</td>
              <td>{row.femaleStudents}</td>
              <td>{row.noCerti}</td>
              <td>{row.nameList}</td>
              <td>{row.documents.join(", ")}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {data.map((row) => (
            <tr key={row.academicYear}>
              <td>{row.academicYear}</td>
              <td>{row.totalStudents}</td>
              <td>{row.femaleStudents}</td>
              <td>{row.noCerti}</td>
              <td>{row.nameList}</td>
              <td>{row.documents.join(", ")}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {data.map((row) => (
            <tr key={row.academicYear}>
              <td>{row.academicYear}</td>
              <td>{row.totalStudents}</td>
              <td>{row.femaleStudents}</td>
              <td>{row.noCerti}</td>
              <td>{row.nameList}</td>
              <td>{row.documents.join(", ")}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {data.map((row) => (
            <tr key={row.academicYear}>
              <td>{row.academicYear}</td>
              <td>{row.totalStudents}</td>
              <td>{row.femaleStudents}</td>
              <td>{row.noCerti}</td>
              <td>{row.nameList}</td>
              <td>{row.documents.join(", ")}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {data.map((row) => (
            <tr key={row.academicYear}>
              <td>{row.academicYear}</td>
              <td>{row.totalStudents}</td>
              <td>{row.femaleStudents}</td>
              <td>{row.noCerti}</td>
              <td>{row.nameList}</td>
              <td>{row.documents.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <img src={Baner} className="w-100" alt="" />

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>A.Y</th>
            <th>Exam Date</th>
            <th>Participants</th>
            <th>Passed</th>
            <th>In(%)</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Beltei_High;
