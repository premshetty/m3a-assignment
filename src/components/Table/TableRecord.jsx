import React from "react";
import { extractRows } from "../../utils/utils";

const TableRecord = ({ record, detailColumns, parentindex }) => {
  const rec = extractRows(record);

  return rec.map((row, index) => (
    <tr
      key={index}
      className={` border-0 ${parentindex % 2 === 0 ? "bg-gray-200" : "bg-white"}`}
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
