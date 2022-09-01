import { useState, useEffect } from "react";
import TableOrderDetails from "../../components/TableOrderDetails";

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [showOrderDetails, setShowOrderDetails] = useState([]);
  const [field, setField] = useState("");
  const [value, setValue] = useState("");

  const orderDetailParameters = [
    "orderNumber",
    "productCode",
    "quantityOrdered",
    "priceEach",
    "orderLineNumber",
  ];

  useEffect(() => {
    fetch(`http://localhost:8080/orderDetails`)
      .then((response) => response.json())
      .then((data) => {
        setOrderDetails(data);
        setShowOrderDetails(data);
      });
  }, [field]);

  const filterOrderDetailByFieldAndValue = (field, value) => {
    if (field === "") {
      return orderDetails;
    }
    if (value === "") {
      return [];
    }
    return orderDetails.filter(
      (payment) =>
        payment[field].toString().toLowerCase().includes(value.toLowerCase())
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
    setShowOrderDetails(filterOrderDetailByFieldAndValue(field, value));
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <form onSubmit={handleSubmit}>
              {/* Field */}
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">Field:</label>
                <div className="col-sm-9">
                  <select className="form-select" value={field} onChange={handleChangeField}>
                    <option defaultValue="">Select Order Details field</option>
                    {orderDetailParameters.map((param) => {
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
      <TableOrderDetails orderDetails={showOrderDetails} />
    </div>
  );
}

export default OrderDetails;