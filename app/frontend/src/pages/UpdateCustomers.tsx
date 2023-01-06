import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { MainContext } from '../Context/Context';
import { AppContext } from '../interfaces/IContext';
import FormCustomers from '../components/FormCustomers';
import { apiGetCustomer, apiUpateCustomer, apiDeleteCustomer } from '../utils/Apis';

function UpdateCustomers() {
  const navigate = useNavigate();
  const location = useLocation();
  const { custumer } = useContext(MainContext) as AppContext;
  const [email, setEmail] = useState(custumer.email);
  const [cpf, setCpf] = useState(custumer.cpf);
  const [address, setAddress] = useState(custumer.address);
  const [phone, setPhone] = useState(custumer.phone);
  const [name, setName] = useState(custumer.name);
  const [tokenUser, setTokenUser] = useState('');
  const [msgApi, setMsgApi] = useState('');

  const ApiCustomer = useCallback(async (token: string) => {
    const queryParams = location.pathname.split('/');
    const api = await apiGetCustomer(queryParams[2], token);
    if (api.response) navigate('/customers');
  }, []);

  useEffect(() => {
    const userId = window.localStorage.getItem('user');
    if (userId) {
      const findUserIdAccont = JSON.parse(userId);
      ApiCustomer(findUserIdAccont.token);
      setTokenUser(findUserIdAccont.token);
    }
    if (!userId) navigate('/login');
  }, []);

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const { _id } = custumer;
    const obj = {
      name,
      cpf,
      address,
      email,
      phone,
    };
    const updateUser = await apiUpateCustomer(obj, _id, tokenUser);
    if (updateUser.response) setMsgApi(updateUser.response.data.message);
    setTimeout(() => { setMsgApi(''); }, 3000);
    if (!updateUser.response) navigate('/customers');
  }

  async function handleSubmitDelete(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const { _id } = custumer;
    await apiDeleteCustomer(_id, tokenUser);
    navigate('/customers');
  }

  return (
    <div>
      <Header />
      <FormCustomers
        setName={setName}
        setCpf={setCpf}
        setAddress={setAddress}
        setEmail={setEmail}
        setPhone={setPhone}
        email={email}
        phone={phone}
        name={name}
        cpf={cpf}
        address={address}
        msgApi={msgApi}
      />
      <div className="btn">
        <button
          type="submit"
          disabled={
                email === '' || address === '' || phone === '' || name === '' || cpf === ''
            }
          onClick={handleSubmit}
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => navigate('/customers')}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleSubmitDelete}
        >
          Deletar Cliente
        </button>
      </div>
    </div>
  );
}

export default UpdateCustomers;
