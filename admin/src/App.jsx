import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CustomAllocation from './pages/CustomAllocation';
import HallRecords from './pages/HallRecords';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route exact path="/home" element={<Home />} />

          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/allocation" element={<CustomAllocation />} />
          <Route exact path="/records" element={<HallRecords />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
