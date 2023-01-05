import React, { useEffect, useCallback } from 'react';
import useCustomers from '../hooks/useCustomers';
import { apiGetCustomers } from '../utils/Apis';

function Users() {
  const { customers, setCustomers } = useCustomers();

  const ApiCustomers = useCallback(async () => {
    const customersData = await apiGetCustomers();
    setCustomers(customersData);
  }, []);

  useEffect(() => {
    ApiCustomers();
  }, []);

  return (
    <div>
      {customers.length >= 1 ? customers.map((e) => (
        <div key={e.id}>
          <p>{e.name}</p>
          <button
            type="button"
          >
            Ver Detalhes
          </button>
        </div>
      )) : <h3>Nenhum usuario cadastrado</h3>}
    </div>
  );
}

export default Users;
