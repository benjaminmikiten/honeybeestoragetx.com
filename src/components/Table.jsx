import React from "react";
import styled from "styled-components";

export const StyledTable = styled.table`
  margin: 0 auto;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const Table = ({ tableData }) => {
  return (
    <StyledTable>
      {tableData.map((row, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return <td key={cellIndex}>{cell}</td>;
            })}
          </tr>
        );
      })}
    </StyledTable>
  );
};
