import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Pages/About'
import Inventory from './Pages/Inventory';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Inventory" element={<Inventory/>} />
        <Route path ="/About" element={<About />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
