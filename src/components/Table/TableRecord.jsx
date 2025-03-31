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
        } else if (col.dataIndex === "percentage") {
          cellClassName += " text-right";
        }

        let value = row[col.dataIndex];
        if (
          col.dataIndex === "percentage" &&
          value !== null &&
          value !== undefined
        ) {
          value = `${value.toFixed(2)}%`;
        }

        return (
          <td key={col.key} className={cellClassName}>
            {value !== null && value !== undefined ? value : "-"}
          </td>
        );
      })}
    </tr>
  ));
};

export default TableRecord;
