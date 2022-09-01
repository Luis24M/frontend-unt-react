import React from "react";

function TableProductLines({productLines}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {productLines.map((productLine) => {
            return (
              <tr key={productLine.productLine}>
                <th scope="row">{productLine.productLine}</th>
                <td>{productLine.textDescription}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableProductLines;