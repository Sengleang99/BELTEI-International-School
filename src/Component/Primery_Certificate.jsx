import React from "react";
import head from "../assets/graduate_grade6.png";

function Primery_Certificate() {
  const data = [
    {
      academicYear: "2018-2019",
      totalStudents: 1107,
      femaleStudents: 600,
      noCerti: "8313-9419",
      nameList: "Open",
      documents: ["Photo", "Reference"],
    },
    {
      academicYear: "2018-2019",
      totalStudents: 1107,
      femaleStudents: 600,
      noCerti: "8313-9419",
      nameList: "Open",
      documents: ["Photo", "Reference"],
    },
  ];
  return (
    <div className="Primery_Certificate">
      <img src={head} className="w-100" alt="" />
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
      </table>
    </div>
  );
}

export default Primery_Certificate;
