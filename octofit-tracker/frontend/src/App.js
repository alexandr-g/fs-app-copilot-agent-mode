import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <NavLink className="navbar-brand d-flex align-items-center" to="/">
              <img src="/octofitapp-small.png" alt="OctoFit Logo" className="app-logo me-2" />
              <span>OctoFit Tracker</span>
            </NavLink>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/activities">Activities</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/leaderboard">Leaderboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/teams">Teams</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/workouts">Workouts</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
