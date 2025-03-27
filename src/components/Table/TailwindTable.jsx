import React from "react";
import TableBody from "./TableBody";

const detailColumns = [
  { title: "cc", dataIndex: "cc", key: "cc" },
  { title: "Quantity", dataIndex: "quantity", key: "quantity" },
  { title: "Description", dataIndex: "description", key: "description" },
  { title: "ESG Rating", dataIndex: "esgRating", key: "esgRating" },
  { title: "Cost Price Cost Fx", dataIndex: "costPriceFx", key: "costPriceFx" },
  { title: "Current Price", dataIndex: "currentPrice", key: "currentPrice" },
  { title: "Valuation", dataIndex: "valuation", key: "valuation" },
  { title: "Total in CHF", dataIndex: "totalChf", key: "totalChf" },
  { title: "P/L Total", dataIndex: "plTotal", key: "plTotal" },
  { title: "P/L Ytd", dataIndex: "plYtd", key: "plYtd" },
  { title: "Percentage", dataIndex: "percentage", key: "percentage" },
];

const TailwindTable = ({ tree }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300 w-full text-sm text-left rtl:text-right">
        <thead className="bg-gray-100">
          <tr>
            {detailColumns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-left text-sm font-medium text-gray-600"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <TableBody tree={tree} detailColumns={detailColumns} />
        </tbody>
      </table>
    </div>
  );
};

export default TailwindTable;
