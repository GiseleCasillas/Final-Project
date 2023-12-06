import React from "react";
import "./App.css";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import Locations from "./pages/Locations";
import Subscriptions from "./pages/Subcriptions";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuItemImage from "./pages/MenuItemImage";
import ReviewPage from "./pages/ReviewPage";

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/subscriptions">Subscriptions</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/menu/:id" element={<MenuItemImage />} />
      <Route path="/reviews" element={<ReviewPage />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
    </Routes>
  </Router>
);

export default App;
