import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "./components/Search";
import { Sidebar } from "./components/vbar/Sidebar";
import { Table } from "./components/Table";

const salesOrderDefault = [
  { id: 1, orderId: 12345, OrderNr: 987656, createdDate: "25-09-2022" },
  { id: 2, orderId: 123453, OrderNr: 987657, createdDate: "25-09-2022" },
  { id: 3, orderId: 123455, OrderNr: 987658, createdDate: "25-09-2022" },
  { id: 4, orderId: 123456, OrderNr: 987659, createdDate: "25-09-2022" },
  { id: 5, orderId: 123457, OrderNr: 987650, createdDate: "25-09-2022" },
  { id: 6, orderId: 123458, OrderNr: 987651, createdDate: "25-09-2022" },
  { id: 7, orderId: 123459, OrderNr: 987652, createdDate: "25-09-2022" },
  { id: 8, orderId: 123450, OrderNr: 987653, createdDate: "25-09-2022" },
  { id: 9, orderId: 1234512, OrderNr: 987654, createdDate: "25-09-2022" },
  { id: 10, orderId: 1234534, OrderNr: 987655, createdDate: "25-09-2022" },
  { id: 11, orderId: 12345345, OrderNr: 9876556, createdDate: "25-09-2022" },
  { id: 12, orderId: 12345345, OrderNr: 9876556, createdDate: "24-09-2022" },
  { id: 13, orderId: 12345345, OrderNr: 9876556, createdDate: "24-09-2022" },
  { id: 14, orderId: 12345345, OrderNr: 9876556, createdDate: "28-09-2022" },
  { id: 15, orderId: 12345345, OrderNr: 9876556, createdDate: "28-09-2022" },
  { id: 16, orderId: 12345345, OrderNr: 9876556, createdDate: "28-09-2022" },
  { id: 17, orderId: 12345345, OrderNr: 9876556, createdDate: "28-09-2022" },
  { id: 18, orderId: 12345345, OrderNr: 9876556, createdDate: "25-09-2022" },
  { id: 19, orderId: 12345345, OrderNr: 9876556, createdDate: "25-09-2022" },
  { id: 20, orderId: 12345345, OrderNr: 9876556, createdDate: "25-09-2022" },
  { id: 21, orderId: 12345345, OrderNr: 9876556, createdDate: "20-09-2022" },
  { id: 22, orderId: 12345345, OrderNr: 9876556, createdDate: "20-09-2022" },
  { id: 23, orderId: 12345345, OrderNr: 9876556, createdDate: "20-09-2022" },
  { id: 24, orderId: 12345345, OrderNr: 19876556, createdDate: "20-09-2022" },
  { id: 25, orderId: 12345345, OrderNr: 9876556, createdDate: "20-09-2022" },
  { id: 26, orderId: 12345345, OrderNr: 9876556, createdDate: "25-09-2022" },
];

const columns = [
  {
    name: "transaction ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Id BOB",
    selector: (row) => row.orderId,
    sortable: true,
  },
  {
    name: "Order Number",
    selector: (row) => row.OrderNr,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row) => row.createdDate,
    sortable: true,
    right: true,
  },
];

function App() {
  const [salesOrder] = useState(salesOrderDefault);
  const [searchValue, setSearchValue] = useState("");

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8">
            <div className="table-responsive">
              <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <Table
                columns={columns}
                data={salesOrder}
                valueToFind={searchValue}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
