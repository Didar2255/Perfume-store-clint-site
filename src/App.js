import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/AboutUs/About';
import DashBoard from './Components/Dashboard/DashBoard/DashBoard';
import ContactUs from './Components/ContactUs/ContactUs';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
