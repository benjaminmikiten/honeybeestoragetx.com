interface TableProps {
  tableData: (string | number)[][];
}

export function Table({ tableData }: TableProps) {
  return (
    <table className="mx-auto table-fixed border-collapse">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
