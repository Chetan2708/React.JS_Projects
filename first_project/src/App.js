import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Components/Head"
import Home from "./Components/home"
import Contact from "./Components/Contact"

import "./Styles/App.scss"
import "./Styles/head.scss"
import "./Styles/home.scss"
import "./Styles/contact.scss"
import "./Styles/mediaquerry.scss"
function App() {
  return (
    <Router>
      <Head/>
      <Routes >
        <Route path ="/" element ={ <Home/> } />
        <Route path ="/contact" element ={ <Contact/> } />
      </Routes>
    </Router>
  );
}
export default App;
