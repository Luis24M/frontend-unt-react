import { useState, useEffect } from "react";
import TablePayments from "../../components/TablePayments";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [showPayments, setShowPayments] = useState([]);
  const [field, setField] = useState("");
  const [value, setValue] = useState("");

  const paymentParameters = [
    "paymentId",
    "amount",
    "paymentDate",
    "checkNumber",
  ];

  useEffect(() => {
    fetch(`http://localhost:8080/payments`)
      .then((response) => response.json())
      .then((data) => {
        setPayments(data);
        setShowPayments(data);
      });
  }, [field]);

  const filterPaymentByFieldAndValue = (field, value) => {
    if (field === "") {
      return payments;
    }
    if (value === "") {
      return [];
    }
    return payments.filter(
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
    setShowPayments(filterPaymentByFieldAndValue(field, value));
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
                    <option defaultValue="">Select payment field</option>
                    {paymentParameters.map((param) => {
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
      <TablePayments payments={showPayments} />
    </div>
  );
}

export default Payments;