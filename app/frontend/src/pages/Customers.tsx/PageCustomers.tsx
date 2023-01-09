import React from 'react';
import Header from '../../components/Header';
import Customers from '../../components/Customers';
import CreateCustomers from '../../components/CreateCustomers';

function PageCustomers() {
  return (
    <div>
      <Header />
      <h4>Clientes: </h4>
      <CreateCustomers />
      <Customers />
    </div>
  );
}

export default PageCustomers;
