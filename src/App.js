import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home';
import Leaderbord from './components/Leaderbord';
import Challenges from './components/Challenges';
import Users from './components/Users';
import Profile from './components/Profile';
import Signin from './components/Siginin';
import Register from './components/Register';
import Challenge from './components/Challenge';
import Forgit from './components/Forgit';
import './App.css';
import Solution from './components/Solution';
import Comment from './components/Comment';
import ChallengeId from './components/ChallengeId';
import User from './components/User/insex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/leaderbord" element={<Leaderbord />} />
        <Route exact path="/challenges" element={<Challenges />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/Users" element={<Users />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/forgit" element={<Forgit />} />
        <Route exact path="/comment/:id" element={<Comment />} />
        <Route exact path="/solution/:id" element={<Solution />} />
        <Route exact path="/challenge" element={<Challenge />} />
        <Route exact path="/challengeid/:id" element={<ChallengeId />} />
        <Route exact path="/user/:id" element={<User />} />
      </Routes>
      
  
    </div>
  );
}

export default App;
