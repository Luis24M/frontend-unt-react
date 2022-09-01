import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../context/dataContext";

const UpdateComponent = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const [currentData, setCurrentData] = useState(data);

  const [contextData, setContextData] = useContext(DataContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCurrentData({
      ...currentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/customers/${currentData.customerNumber}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentData),
    })
      .then((response) => response.json())
      .then((dataUpdated) => setContextData(dataUpdated))
      .then(navigate("/HomePage"));
  };

  // addressLine1: "54, rue Royale"
  // addressLine2: null
  // city: "Nantes"
  // contactFirstName: "Carine "
  // contactLastName: "Schmitt"
  // country: "France"
  // creditLimit: 21000
  // customerName: "Atelier graphique"
  // customerNumber: 103
  // phone: "40.32.2555"
  // postalCode: "44000"
  // state: null

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">"addressLine1"</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value={currentData.addressLine1}
              name="addressLine1"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">"addressLine2"</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value={
                currentData.addressLine2 === null
                  ? ""
                  : currentData.addressLine2
              }
              name="addressLine2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">"customerName"</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value={currentData.customerName}
              name="customerName"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">""</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value=""
              name=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">""</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value=""
              name=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">""</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value=""
              name=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">""</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value=""
              name=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">""</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value=""
              name=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">""</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value=""
              name=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">""</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value=""
              name=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">""</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Jhon"
              value=""
              name=""
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

export default UpdateComponent;
