import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from './Components/Products/Products/Products';
import About from './Components/AboutUs/About';
import DashBoard from './Components/Dashboard/DashBoard/DashBoard';
import ContactUs from './Components/ContactUs/ContactUs';
import Blogs from './Components/Blogs/Blogs';
import MyOrder from './Components/Dashboard/MyOrder/MyOrder';
import Payment from './Components/Dashboard/Payment/Payment';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import ManageProduct from './Components/Dashboard/ManageProduct/ManageProduct';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrder from './Components/Dashboard/ManageOrder/ManageOrder';
import Home from './Components/Home/Home';
import Login from './Components/Account/LogIn/Login';
import NavBar from './Share/Nevation/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<DashBoard />}>
            <Route path='myOrder' element={<MyOrder />} />
            <Route path='payment' element={<Payment />} />
            <Route path='addProducts' element={<AddProduct />} />
            <Route path='manageProducts' element={<ManageProduct />} />
            <Route path='manageOrder' element={<ManageOrder />} />
            <Route path='makeAdmin' element={<MakeAdmin />} />
          </Route>
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
