import React from "react";
import { extractRows } from "../../utils/utils";


const TableRecord = ({ record, detailColumns }) => {
  const rec = extractRows(record);

  return rec.map((row, index) => (
    <tr
      key={index}
      className="border-b-2 border-white even:bg-blue-100 odd:bg-blue-200"
    >
      {detailColumns.map((col) => {
        let cellClassName = "px-4 py-2 ";

        if (col.dataIndex === "description") {
          cellClassName += " whitespace-nowrap";
        }

        return (
          <td key={col.key} className={cellClassName}>
            {row[col.dataIndex] !== null && row[col.dataIndex] !== undefined
              ? row[col.dataIndex]
              : "-"}
          </td>
        );
      })}
    </tr>
  ));
};

export default TableRecord;
