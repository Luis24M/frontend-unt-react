import React from "react";

function TablePayments({payments}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Check Number</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => {
            return (
              <tr key={payment.paymentId}>
                <th scope="row">{payment.paymentId}</th>
                <td>{payment.checkNumber}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablePayments;