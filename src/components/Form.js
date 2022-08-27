import React from "react";

export const Form = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <form>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">ID:</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Jhon"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
