import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

import Projects from "./components/Projects";
import Themes from "./components/Themes";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Themes />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Projects />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
