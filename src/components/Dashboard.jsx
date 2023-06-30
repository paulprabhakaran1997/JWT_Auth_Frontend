import React from 'react';
import {Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct';
import AddUser from './AddUser';
import Header from './common/Header';
import Footer from './common/Footer';

const Dashboard = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path='/' element={ <AddUser /> } />
        </Routes>
        <Routes>
            <Route path='/product' element={ <AddProduct /> } />
        </Routes>
        <Footer />
    </div>
  )
}

export default Dashboard
