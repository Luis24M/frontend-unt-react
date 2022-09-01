import React, { useState } from "react";

export const Form = ({ data }) => {
  const [currentData, setCurrentData] = useState(data);

  const handleChange = (event) => {
    setCurrentData([data[0], event.target.value])
    console.log(currentData)
  };

  return (
    <div className="row mb-3">
      <label className="col-sm-3 col-form-label">{data[0]}</label>
      <div className="col-sm-9">
        <input
          type="text"
          className="form-control"
          placeholder="Jhon"
          value={
            currentData[1] == null || currentData === undefined
              ? ""
              : currentData[1]
          }
          name={data[0]}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
