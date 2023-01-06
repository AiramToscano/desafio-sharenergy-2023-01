import React from 'react';
import Header from '../components/Header';
import Customers from '../components/Customers';
import FormCustomers from './CreateCustomers';

function PageCustomers() {
  return (
    <div>
      <Header />
      <h4>Clientes: </h4>
      <FormCustomers />
      <Customers />
    </div>
  );
}

export default PageCustomers;
