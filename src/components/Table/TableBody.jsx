import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { accumulateSums } from "../../utils/utils";
import TableRecord from "./TableRecord";
const TableBody = ({ tree, detailColumns }) => {
  const [expandedRows, setExpandedRows] = useState(new Set());

  const toggleExpand = (id) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return tree?.map((el, index) => {
    if (el?.children?.length > 0 || el?.records?.length > 0) {
      let sumOfRecords = 0;
      let percentage = 0;
      if (el?.records?.length > 0) {
        sumOfRecords = accumulateSums(el?.records, ["Col7"]).Col7;
        percentage = accumulateSums(el?.records, ["Col8"]).Col8.toFixed(2);
      }
      return (
        <React.Fragment key={index}>
          {/* Parent Row */}
          <tr
            onClick={() => toggleExpand(el.key)}
            className="cursor-pointer bg-[#3367AE] font-semibold text-amber-50 "
          >
            <td colSpan={7} className="px-4 py-2 text-sm text-white text-left">
              {!expandedRows.has(el.key) ? <RightOutlined /> : <DownOutlined />}{" "}
              {el.name}
            </td>
            <td colSpan={1} className="px-4 py-2 text-sm text-white text-left">
              {el?.records?.length > 0
                ? sumOfRecords !== 0
                  ? sumOfRecords
                  : ""
                : el?.sumOfRecords !== 0
                ? el?.sumOfRecords
                : ""}
            </td>
            <td colSpan={3} className="px-4 py-2 text-sm text-white text-right">
              {el?.records?.length > 0
                ? percentage && parseFloat(percentage) !== 0
                  ? `${percentage} %`
                  : ""
                : el?.percentage && parseFloat(el?.percentage) !== 0
                ? `${el?.percentage} %`
                : ""}
            </td>
          </tr>
          {/* Expanded Child Rows */}
          {expandedRows.has(el.key) && (
            <TableBody
              tree={el?.children?.length > 0 ? el.children : el?.records}
              detailColumns={detailColumns}
            />
          )}
        </React.Fragment>
      );
    } else {
      return (
        <TableRecord key={index} record={el} detailColumns={detailColumns} />
      );
    }
  });
};

export default TableBody;
