
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from './components/HomePage';
import Movies from './components/Movies';
import ScanWithDevices from './components/ScanWithDevices';

function App() {

  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/scan' element={<ScanWithDevices />} />
        </Routes>
   
   </div>
    </Router>
  );
}

export default App;
