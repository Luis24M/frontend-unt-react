import React from "react";

function TableProducts({products}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Line</th>
            <th scope="col">Stock</th>
            <th scope="col">Buy Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.productCode}>
                <th scope="row">{product.productCode}</th>
                <td>{product.productName}</td>
                <td>{product.productLine}</td>
                <td>{product.quantityInStock}</td>
                <td>{product.buyPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableProducts;