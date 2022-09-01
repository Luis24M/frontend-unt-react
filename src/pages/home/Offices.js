import { useState, useEffect } from "react";
import TableOffices from "../../components/TableOffices";

function Offices() {
  const [offices, setOffices] = useState([]);
  const [showOffices, setShowOffices] = useState([]);
  const [field, setField] = useState("");
  const [value, setValue] = useState("");

  const officeParameters = [
    "officeCode",
    "city",
    "phone",
    "addressLine1",
    "addressLine2",
    "state",
    "country",
    "postalCode",
    "territory",
  ];

  useEffect(() => {
    fetch(`http://localhost:8080/offices`)
      .then((response) => response.json())
      .then((data) => {
        setOffices(data);
        setShowOffices(data);
      });
  }, [field]);

  const filterOfficeByFieldAndValue = (field, value) => {
    if (field === "") {
      return offices;
    }
    if (value === "") {
      return [];
    }
    return offices.filter(
      (office) =>
        office[field].toString().toLowerCase().includes(value.toLowerCase())
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
    setShowOffices(filterOfficeByFieldAndValue(field, value));
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
                    <option defaultValue="">Select Office field</option>
                    {officeParameters.map((param) => {
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
      <TableOffices offices={showOffices} />
    </div>
  );
}

export default Offices;