import { useState, useEffect } from "react";
import { Form } from "../../components/Form";
import { Navbar } from "../../components/Navbar";
import Table from "../../components/Table";

function HomePage() {
  const [customers, setCustomers] = useState([]);
  const [showCustomers, setShowCustomers] = useState([]);
  const [field, setField] = useState("");
  const [value, setValue] = useState("");

  const customerParameters = [
    "customerNumber",
    "customerName",
    "contactLastName",
    "contactFirstName",
    "phone",
    "addressLine1",
    "addressLine2",
    "city",
    "state",
    "postalCode",
    "country",
    "salesRepEmployeeNumber",
    "creditLimit",
  ];

  useEffect(() => {
    fetch(`http://localhost:8080/customers`)
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setShowCustomers(data);
      });
  }, [field]);

  const filterCustomerByFieldAndValue = (field, value) => {
    if (field === "") {
      return customers;
    }
    if (value === "") {
      return [];
    }
    return customers.filter(
      (customer) =>
        customer[field].toString().toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleChangeField = (event) => {
    setField(event.target.value);
  };

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowCustomers(filterCustomerByFieldAndValue(field, value));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <form onSubmit={handleSubmit}>
              {/* Field */}
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">Field:</label>
                <div className="col-sm-9">
                  <select className="form-select" value={field} onChange={handleChangeField}>
                    <option defaultValue="">Select customer field</option>
                    {customerParameters.map((param) => {
                      return (
                        <option key={param} value={param}>
                          {param}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {/* Value */}
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">Value:</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="fieldValue"
                    className="form-control"
                    placeholder="value"
                    value={value}
                    onChange={handleChangeValue}
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-sm-3"></div>
                <div className="col-sm-9 d-grid">
                  <button className="btn btn-success" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Table customers={showCustomers} />
    </div>
  );
}

export default HomePage;
