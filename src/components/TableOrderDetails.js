import React from "react";

function TableOrderDetails({orderDetails}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Order Line Number</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((orderDetail) => {
            return (
              <tr key={orderDetail.productCode}>
                <th scope="row">{orderDetail.orderNumber}</th>
                <td>{orderDetail.productCode}</td>
                <td>{orderDetail.quantityOrdered}</td>
                <td>{orderDetail.priceEach}</td>
                <td>{orderDetail.orderLineNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableOrderDetails;