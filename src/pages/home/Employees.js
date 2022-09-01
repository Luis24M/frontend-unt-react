import { useState, useEffect } from "react";
import TableEmployees from "../../components/TableEmployees";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showEmployees, setShowEmployees] = useState([]);
  const [field, setField] = useState("");
  const [value, setValue] = useState("");

  const employeeParameters = [
    "employeesNumber",
    "lastName",
    "firstName",
    "extension",
    "email",
    "officeCode",
    "reportsTo",
    "jobTitle",
    "customers",
  ];

  useEffect(() => {
    fetch(`http://localhost:8080/employees`)
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setShowEmployees(data);
      });
  }, [field]);

  const filterEmployeeByFieldAndValue = (field, value) => {
    if (field === "") {
      return employees;
    }
    if (value === "") {
      return [];
    }
    return employees.filter(
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
    setShowEmployees(filterEmployeeByFieldAndValue(field, value));
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
                    <option defaultValue="">Select Employee field</option>
                    {employeeParameters.map((param) => {
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
      <TableEmployees employees={showEmployees} />
    </div>
  );
}

export default Employees;