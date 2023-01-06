import React, { useState } from 'react';
import { Input } from 'the-mask-input';
import { apiCreateCustomers, apiGetCustomers } from '../utils/Apis';
import useCustomers from '../hooks/useCustomers';

function PageCustomers() {
  const [name, setName] = useState('');
  const { setCustomers } = useCustomers();
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [msgApi, setMsgApi] = useState('');

  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const userId = window.localStorage.getItem('user');
    if (userId) {
      const findUserIdAccont = JSON.parse(userId);
      const obj = {
        name,
        cpf,
        address,
        email,
        phone,
      };
      const api = await apiCreateCustomers(obj, findUserIdAccont.token);
      if (api.message) setMsgApi(api.message);
      if (api.response) setMsgApi(api.response.data.message);
      const customersData = await apiGetCustomers();
      setTimeout(() => { setMsgApi(''); }, 3000);
      setCustomers(customersData);
    }
  }

  return (
    <div>
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
            disabled={email === '' || address === '' || phone === '' || name === ''}
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
        </div>
        <div className="error-message">
          <p>{msgApi}</p>
        </div>
      </form>
    </div>
  );
}

export default PageCustomers;
