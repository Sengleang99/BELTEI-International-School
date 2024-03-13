import React from "react";
import t from "../assets/graduate_level6.png";
function ESL_Level6() {
  const data = [
    {
      batch: 63,
      totalSts: 9,
      femaleSts: 4,
      certifNo: "007979-007987",
      nameListPhoto: "Open",
      documents: "Reference",
    },
    {
      batch: 62,
      Numberstu: 187,
      femaleSts: 5,
      NoCerti: "007979-007987",
      nameListPhoto: "Open",
      documents: "Reference",
    },
    {
      batch: 62,
      Numberstu: 187,
      femaleSts: 5,
      NoCerti: "007979-007987",
      nameListPhoto: "Open",
      documents: "Reference",
    },
    {
      batch: 62,
      Numberstu: 187,
      femaleSts: 5,
      NoCerti: "007979-007987",
      nameListPhoto: "Open",
      documents: "Reference",
    },
    {
      batch: 63,
      totalSts: 9,
      femaleSts: 4,
      certifNo: "007979-007987",
      nameListPhoto: "Open",
      documents: "Reference",
    },
    {
      batch: 63,
      totalSts: 9,
      femaleSts: 4,
      certifNo: "007979-007987",
      nameListPhoto: "Open",
      documents: "Reference",
    },
    {
      batch: 63,
      totalSts: 9,
      femaleSts: 4,
      certifNo: "007979-007987",
      nameListPhoto: "Open",
      documents: "Reference",
    },
  ];
  return (
    <div className="ESL_Level6">
      <img src={t} className="w-100" alt="" />
      <p className="text-center mt-2 text-success">
        Please Click the Following Academic Year
      </p>
      <table className=" text-center">
        <thead>
          <tr>
            <th>Batch</th>
            <th>Number of Sts</th>
            <th>Total</th>
            <th>Female</th>
            <th>No. Certif</th>

            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.batch}>
              <td>{row.batch}</td>
              <td>
                <div>{row.totalSts}</div>
                <div style={{ fontSize: "12px", color: "gray" }}>Total</div>
              </td>
              <td>{row.femaleSts}</td>
              <td>{row.certifNo}</td>
              <td>{row.nameListPhoto}</td>
              <td>{row.documents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ESL_Level6;
