import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/dataContext";


function TableCustomers({customers}) {
  const [contextData, setContextData] = useContext(DataContext)

  const navigate = useNavigate()

  const renderView = (customer) => {
    localStorage.setItem('data', JSON.stringify(customer))
    setContextData(customer)
    navigate("/details")
  }

  const update = (customer) => {
    localStorage.setItem('data', JSON.stringify(customer))
    navigate("/update")
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Options</th>
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
                <td>
                  <button className="btn btn-success mx-2" type="button" onClick={() => renderView(customer)}>View</button>
                  <button className="btn btn-warning" type="button" onClick={() => update(customer)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableCustomers;
