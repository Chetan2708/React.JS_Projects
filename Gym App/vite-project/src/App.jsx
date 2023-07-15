import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Box} from '@mui/material'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Excercisedetails from './Pages/Excercisedetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m="auto">
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercise/:id" element={<Excercisedetails/>} />
    </Routes>
    <Footer/>
  </Router>
  </Box>
  )
}

export default App
