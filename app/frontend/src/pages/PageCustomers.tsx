import React from 'react';
import Header from '../components/Header';
import Customers from '../components/Customers';
import FormCustomers from '../components/FormCreateCustomers';

function PageCustomers() {
  return (
    <div>
      <Header />
      <FormCustomers />
      <h4>Clientes: </h4>
      <Customers />
    </div>
  );
}

export default PageCustomers;
