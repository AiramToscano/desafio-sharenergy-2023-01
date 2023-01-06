import React, {
  useEffect, useCallback, useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomers from '../hooks/useCustomers';
import { MainContext } from '../Context/Context';
import { AppContext } from '../interfaces/IContext';
import { apiGetCustomers } from '../utils/Apis';
import { ICustomers } from '../interfaces/ICustomers';

function Users() {
  const navigate = useNavigate();
  const {
    customers, setCustomers,
  } = useCustomers();
  const { setUpdateConsumer } = useContext(MainContext) as AppContext;

  const ApiCustomers = useCallback(async () => {
    const customersData = await apiGetCustomers();
    setCustomers(customersData);
  }, []);

  function handleSubmit(obj : ICustomers) {
    const { _id } = obj;
    setUpdateConsumer(obj);
    navigate(`/customers/${_id}`);
  }

  useEffect(() => {
    ApiCustomers();
  }, []);

  return (
    <div>
      {customers.length >= 1 ? customers.map((e) => (
        <div key={e.cpf}>
          <p>{e.name}</p>
          <button
            type="button"
            onClick={() => handleSubmit(e)}
          >
            Ver Detalhes
          </button>
        </div>
      )) : <h3>Nenhum usuario cadastrado</h3>}
    </div>
  );
}

export default Users;
