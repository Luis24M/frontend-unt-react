import React from "react";


function TableCustomers({customers}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.customerNumber}>
                <th scope="row">{customer.customerNumber}</th>
                <td>{customer.customerName}</td>
                <td>{customer.phone}</td>
                <td>{customer.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableCustomers;
