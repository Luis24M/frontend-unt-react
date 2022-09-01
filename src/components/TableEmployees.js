import React from "react";

function TableEmployees({employees}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col"># Office</th>
            <th scope="col">Job Title</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees) => {
            return (
              <tr key={employees.employeesNumber}>
                <th scope="row">{employees.employeesNumber}</th>
                <td>{employees.firstName+" "+employees.lastName}</td>
                <td>{employees.officeCode}</td>
                <td>{employees.jobTitle}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableEmployees;