import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input } from 'the-mask-input';
import Header from '../components/Header';
import { MainContext } from '../Context/Context';
import { AppContext } from '../interfaces/IContext';
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

  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

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
      <form id="login_form" onSubmit={loginClick}>
        <div>
          <input
            type="name"
            value={name}
            placeholder="Nome do cliente"
            autoComplete="on"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            name="cpf"
            placeholder="cpf do cliente"
            mask="cpf"
            value={cpf}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCpf(event.target.value)}
          />
          <input
            type="phone"
            value={phone}
            placeholder="+99 (99) 9999-9999"
            autoComplete="on"
            onChange={(event) => setPhone(event.target.value)}
          />
          <input
            type="addres"
            autoComplete="on"
            placeholder="Endereço do cliente"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <input
            type="email"
            autoComplete="on"
            placeholder="Email do cliente"
            name="address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
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
      </form>
      <div className="error-message">
        <p>
          {msgApi}
        </p>
      </div>
    </div>
  );
}

export default UpdateCustomers;
