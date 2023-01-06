import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import HttpCats from './HttpCats';
import UpdateCustomers from './UpdateCustomers';
import RandomDog from './RandomDog';
import PageCustomers from './PageCustomers';

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
