import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ExportData({label,action}){

    return (
        // <button
        // className="btn-primary"
        // // onClick={e => onExport(e.target.value)}
        // action={action}
        // // onClick={onSearchValueChange}
        // >
        //     {label}
        // </button>
        <a href='#' 
        onClick={action}
    >what Happened </a>
    );
}

export { ExportData };