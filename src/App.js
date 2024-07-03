import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import './styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { username, password });
      if (response.data.token) {
        setIsLoggedIn(true);
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };
  
  const handleSignup = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', { username, password });
      if (response.status === 201) {
        // Automatically log the user in after signup
        handleLogin(username, password);
      }
    } catch (error) {
      console.error('Signup error', error);
    }
  };
  

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/" /> : <Signup onSignup={handleSignup} />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
