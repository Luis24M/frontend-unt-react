import React from "react";

function TableOrders({orders}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"># Customer</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.orderNumber}>
                <th scope="row">{order.orderNumber}</th>
                <td>{order.customerNumber}</td>
                <td>{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableOrders;