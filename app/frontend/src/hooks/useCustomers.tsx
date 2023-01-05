import React, { useEffect, useCallback, useState } from 'react';
import { apiGetCustomers } from '../utils/Apis';
import { ICustomers } from '../interfaces/ICustomers';

function useCustomers() {
  const [customers, setCustomers] = useState<ICustomers[]>([]);

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
  };
}

export default useCustomers;
