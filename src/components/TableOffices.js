import React from "react";

function TableOffices({offices}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">City</th>
            <th scope="col">Phone</th>
            <th scope="col">State</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {offices.map((office) => {
            return (
              <tr key={office.officeCode}>
                <th scope="row">{office.officeCode}</th>
                <td>{office.city}</td>
                <td>{office.phone}</td>
                <td>{office.state}</td>
                <td>{office.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableOffices;