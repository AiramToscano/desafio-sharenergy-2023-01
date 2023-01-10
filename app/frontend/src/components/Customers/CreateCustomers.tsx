import React, { useState } from 'react';
import { apiCreateCustomers, apiGetCustomers } from '../../utils/Apis';
import useCustomers from '../../hooks/useCustomers';
import FormCustomers from './FormCustomers';
import style from './customers.module.scss';

function PageCustomers() {
  const [name, setName] = useState('');
  const { setCustomers } = useCustomers();
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [msgApi, setMsgApi] = useState('');

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
      <div className={style.infodiv}>
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
      </div>
      <div className={style.infodiv}>
        <button
          className={style.submitclass}
          type="submit"
          disabled={email === '' || address === '' || phone === '' || name === ''}
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default PageCustomers;
