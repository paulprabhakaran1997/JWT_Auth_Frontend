import './App.css';
import Login from './components/Login';
import AddUser from './components/AddUser';
import AddProduct from './components/AddProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRouting from './safeRouting/PrivateRouting';
import PublicRouting from './safeRouting/PublicRouting';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {

  console.log("VERSION = ",process.env.REACT_APP_VERSION);

  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Public Routing */}

          <Route path='/login' element={
            <PublicRouting>
              <Login />
            </PublicRouting>
          } />

          {/* Private Routing */}

          <Route path={`/v${process.env.REACT_APP_VERSION}/*`} element={
            <PrivateRouting>
              <Dashboard />
            </PrivateRouting>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
