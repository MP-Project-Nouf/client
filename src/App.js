import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home';
import Leaderbord from './components/Leaderbord';
import Challenges from './components/Challenges';
import Users from './components/Users';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/leaderbord" element={<Leaderbord />} />
        <Route exact path="/challenges" element={<Challenges />} />
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/register" element={<Register />} />
        <Route exact path="/signin" element={<SignIn />} /> */}
        <Route exact path="/Users" element={<Users />} />
        <Route exact path="/user/:id" element={<Profile />} />
      </Routes>
      
  
    </div>
  );
}

export default App;
