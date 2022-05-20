import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExportData({ label, action }) {
  return (
    <a href="#" onClick={action}>
      {label}
    </a>
  );
}

export { ExportData };
