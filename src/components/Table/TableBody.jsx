import React, { useState } from "react";
import TableRecord from "./TableRecord";
import { DownOutlined ,RightOutlined} from "@ant-design/icons";
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
    console.log(el);

    if (el?.children?.length > 0 || el?.records?.length > 0) {
      return (
        <React.Fragment key={index}>
          {/* Parent Row */}
          <tr
            onClick={() => toggleExpand(el.key)}
            className="cursor-pointer bg-[#3367AE] font-semibold text-amber-50 "
          >
            <td
              colSpan={detailColumns.length}
              className="px-4 py-2 text-sm text-white text-left"
            >
              {!expandedRows.has(el.key) ? <RightOutlined /> : <DownOutlined />}{" "}
              {el.name}
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
