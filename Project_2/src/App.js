import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:id" element={<Details />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
