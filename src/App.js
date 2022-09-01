
import Intro from "./pages/home/Intro";
import HomePage from "./pages/home/HomePage";
import Employees from "./pages/home/Employees";
import OrderDetails from "./pages/home/OrderDetails";
import Orders from "./pages/home/Orders";
import ProductLines from "./pages/home/ProductLines";
import Products from "./pages/home/Products";
import Offices from "./pages/home/Offices";
import Payments from "./pages/home/Payments";
import {Navbar} from "../src/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/Intro'  element={<Intro/>} />
          <Route path='/HomePage'  element={<HomePage/>} />
          <Route path='/Employees' element={<Employees/>} />
          <Route path='/Offices'  element={<Offices/>} />
          <Route path='/OrderDetails' element={<OrderDetails/>} />
          <Route path='/Orders'  element={<Orders/>} />
          <Route path='/Payments' element={<Payments/>} />
          <Route path='/ProductLines' element={<ProductLines/>} />
          <Route path='/Products'  element={<Products/>} />
        </Routes>
    </Router>

  );
}

export default App;
