import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyledTableContent } from "./StyleTableContent.styles";
import { tableElements } from "./tableElements";

const TableContent = ({ className, title }) => {
  const [tableData, setTableData] = useState(tableElements);
  let tableDataContent = tableData.content;

  useEffect(() => {
    setTableData(tableData);
  }, [tableData]);
  return (
    <StyledTableContent className={className}>
        <p className="title">{title}</p>
      {
        <table width="100%">
          <thead>
            <tr>
              <td>{tableData.header.number}</td>
              <td>{tableData.header.firstName}</td>
              <td>{tableData.header.lastName}</td>
              <td>{tableData.header.email}</td>
            </tr>
          </thead>
          <tbody>
            {tableDataContent.map((item) => (
              <tr key={item.number}>
                <td>{item.number}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </StyledTableContent>
  );
};

export default TableContent;
