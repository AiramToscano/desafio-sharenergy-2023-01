import React from 'react';
import Header from '../../components/Header/Header';
import Customers from '../../components/Customers/Customers';
import CreateCustomers from '../../components/Customers/CreateCustomers';
import style from '../../components/Customers/customers.module.scss';

function PageCustomers() {
  return (
    <div>
      <Header />
      <CreateCustomers />
      <h4 className={style.infodiv}>CLIENTES: </h4>
      <Customers />
    </div>
  );
}

export default PageCustomers;
