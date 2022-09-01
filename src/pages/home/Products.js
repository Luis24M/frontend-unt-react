import { useState, useEffect } from "react";
import TableProducts from "../../components/TableProducts";

function Products() {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [field, setField] = useState("");
  const [value, setValue] = useState("");

  const productParameters = [
    "productCode",
    "productName",
    "productLine",
    "productScale",
    "productVendor",
    "productDescription",
    "quantityInStock",
    "buyPrice",
    "msrp",
  ];

  useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setShowProducts(data);
      });
  }, [field]);

  const filterProductByFieldAndValue = (field, value) => {
    if (field === "") {
      return products;
    }
    if (value === "") {
      return [];
    }
    return products.filter((order) =>
      order[field].toString().toLowerCase().includes(value.toLowerCase())
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
    setShowProducts(filterProductByFieldAndValue(field, value));
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
                  <select
                    className="form-select"
                    value={field}
                    onChange={handleChangeField}
                  >
                    <option defaultValue="">Select Product field</option>
                    {productParameters.map((param) => {
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
      <TableProducts products={showProducts} />
    </div>
  );
}

export default Products;
