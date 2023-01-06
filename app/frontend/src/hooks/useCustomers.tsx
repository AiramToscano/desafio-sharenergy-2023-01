import React, { useEffect, useCallback, useState } from 'react';
import { apiGetCustomers } from '../utils/Apis';
import { ICustomers } from '../interfaces/ICustomers';

function useCustomers() {
  const [customers, setCustomers] = useState<ICustomers[]>([]);
  const [objcustomers, setObjCustomers] = useState<ICustomers>({
    name: '',
    email: '',
    cpf: '',
    address: '',
    phone: '',
    _id: '',
  });

  const ApiCustomers = useCallback(async () => {
    const customersData = await apiGetCustomers();
    setCustomers(customersData);
  }, []);

  useEffect(() => {
    ApiCustomers();
  }, [customers]);

  return {
    customers,
    setCustomers,
    objcustomers,
    setObjCustomers,
  };
}

export default useCustomers;
