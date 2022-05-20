import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ExportData } from "../ExportData";

function Table({ columns, data, valueToFind }) {
  const [foundData, setFoundData] = useState([]);

  useEffect(() => {
    setFoundData(
      valueToFind
        ? data.filter(
            (item) =>
              item.id.toString() === valueToFind ||
              item.orderId.toString() === valueToFind ||
              item.OrderNr.toString() === valueToFind ||
              item.createdDate.toString() === valueToFind
          )
        : data
    );
  }, [data, valueToFind]);

  // translate options paginator
  const OptionsPagination = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const convertArrayOfObjectsToCSV = (foundData) => {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    foundData.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  };

  const downloadCSV = () => {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(foundData);
    if (csv == null) return;

    const filename = "salesOrder.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }
    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  };

  return (
    <>
      <ExportData label="Descargar" action={downloadCSV}></ExportData>
      <DataTable
        columns={columns}
        data={foundData}
        title="Sales order"
        pagination
        paginationComponentOptions={OptionsPagination}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        noDataComponent={<span>No se encontro ningún elemento</span>}
      />
    </>
  );
}

export { Table };
