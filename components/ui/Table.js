import React from "react";

const Table = ({ columns, rows }) => {
  return (
    <table className="min-w-full divide-y border rounded-md text-black divide-gray-200">
      <thead className="bg-gray-50 rounded-md">
        <tr>
          {columns.map((col) => (
            <th key={col.field} className="px-3 py-2 text-left text-xs font-semibold text-gray-800">
              {col.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={col.field} className="px-6 py-4 whitespace-nowrap">
                {col.renderCell ? col.renderCell(row[col.field], row) : row[col.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
