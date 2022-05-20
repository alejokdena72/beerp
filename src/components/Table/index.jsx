import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import { ExportData } from "../ExportData";


function Table ({columns,data,value}) {

    const [searchData, setSearchData] = useState([]);


    // traslate options paginator
    const OptionsPagination = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
      }

    function convertArrayOfObjectsToCSV(array) {
        let result;

        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    const filterDataBySearchText = (dataInfo) => {
        setSearchData(dataInfo.filter((item) => String(item.id) === value));
    }

    // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
    function downloadCSV(array) {
        console.log('entra');
        console.log(array, value);
        const arrayFilter = array.filter((item) => item.id.toString() === value);
        console.log(arrayFilter);
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(arrayFilter);
        if (csv == null) return;

        const filename = 'salesOrder.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }
        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }

    const Export = ({ onExport }) => <ExportData label="Descargar" action = {e => onExport(e.target.value)}></ExportData>;
    const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

    return (
        <>
        <DataTable
                columns={columns}
                data={data}
                title="Sales order"
                pagination
                paginationComponentOptions={OptionsPagination}
                fixedHeader
                fixedHeaderScrollHeight='600px'
                noDataComponent={<span>No se encontro ningún elemento</span>}
                actions={actionsMemo}
            />
        <a onClick={() => filterDataBySearchText(data)}>prueba</a>
        </>

            
    );
}

export { Table };