import { useState, useEffect } from "react";
import { Form } from "../../components/Form";
import { Navbar } from "../../components/Navbar";
import Table from "../../components/Table";

function HomePage() {
  const [customers, setCustomers] = useState([]);
  const [showCustomers, setShowCustomers] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/customers/${city}`)
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setShowCustomers(data);
      });
  }, [city]);

  const getCustomersByCity = (city) => {
    if (city === "") {
      return [];
    }
    return customers.filter((customer) => customer.city === city);
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowCustomers(getCustomersByCity(city));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">ID:</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    onChange={handleChange}
                  />
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
