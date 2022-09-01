import { useNavigate } from "react-router-dom";

const ViewComponent = () => {

  const data = JSON.parse(localStorage.getItem('data'))
  const navigate = useNavigate()
  console.log(data)

  const handleBack = () => {
    navigate("/HomePage")
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            {
              Object.keys(data).map((key, index) => {
                return (
                  <th scope="col" key={index}>{key}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              Object.values(data).map((value, index) => {
                return (
                  <td key={index}>{value}</td>
                )
              })
            }
          </tr>
        </tbody>
      </table>
      
      <button className="btn btn-dark" onClick={handleBack}>Back</button>
    </div>
  );
};

export default ViewComponent;
