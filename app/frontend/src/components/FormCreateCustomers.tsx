/* eslint-disable no-useless-escape */
import React, { useEffect, useCallback, useState } from 'react';
import { Input } from 'the-mask-input';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { apiCreateCustomers, apiGetCustomers } from '../utils/Apis';
import useCustomers from '../hooks/useCustomers';
import Customers from './Customers';

function PageCustomers() {
  const [name, setName] = useState('');
  const { customers, setCustomers } = useCustomers();
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const userId = window.localStorage.getItem('user');
    if (userId) {
      const findUserIdAccont = JSON.parse(userId);
      console.log(findUserIdAccont);
      const obj = {
        name,
        cpf,
        address,
        email,
        phone,
      };
      const api = await apiCreateCustomers(obj, findUserIdAccont.token);
      const customersData = await apiGetCustomers();
      setCustomers(customersData);
    }
    const userLogin = 'd';
    if (userLogin) {
      setError(false);
    }
    setError(true);
  }
  return (
    <div>
      <form id="login_form" onSubmit={loginClick}>
        <div>
          <input
            type="name"
            value={name}
            required
            placeholder="name"
            autoComplete="on"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            name="cpf"
            placeholder="cpf"
            mask="cpf"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCpf(event.target.value)}
          />
          <input
            type="phone"
            required
            value={phone}
            placeholder="phone"
            autoComplete="on"
            onChange={(event) => setPhone(event.target.value)}
          />
          <input
            type="addres"
            autoComplete="on"
            required
            placeholder="address"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <input
            type="email"
            autoComplete="on"
            placeholder="email"
            required
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
        {error && (
        <div className="error-message">
          <p>
            Campos Invalidos, tente novamente.
          </p>
        </div>
        )}
      </form>
    </div>
  );
}

export default PageCustomers;
