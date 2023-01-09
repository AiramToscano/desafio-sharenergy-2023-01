import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import HttpCats from './Cats/HttpCats';
import UpdateCustomers from './Customers.tsx/UpdateCustomers';
import RandomDog from './Dogs/RandomDog';
import PageCustomers from './Customers.tsx/PageCustomers';

function App() {
  return (
    <Routes>
      <Route path="/customers/:id" element={<UpdateCustomers />} />
      <Route path="/customers" element={<PageCustomers />} />
      <Route path="/randomdog" element={<RandomDog />} />
      <Route path="/httpcat" element={<HttpCats />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
