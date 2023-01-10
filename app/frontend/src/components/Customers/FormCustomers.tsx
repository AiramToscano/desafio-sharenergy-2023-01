import React from 'react';
import { Input } from 'the-mask-input';
import { IFormsProps } from '../../interfaces/IFormsCustomers';
import style from './customers.module.scss';

function FormCustomers(object : IFormsProps) {
  const {
    setName, setCpf, setAddress, setEmail, setPhone, email,
    phone,
    name,
    cpf,
    address,
    msgApi,
  } = object;

  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div>
      <form className={style.submitclass} id="login_form" onSubmit={loginClick}>
        <div>
          <input
            type="name"
            className={style.fieldclass}
            value={name}
            placeholder="Nome do cliente"
            autoComplete="on"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            name="cpf"
            placeholder="Cpf do cliente"
            value={cpf}
            mask="cpf"
            className={style.fieldclass}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCpf(event.target.value)}
          />
          <input
            type="phone"
            value={phone}
            className={style.fieldclass}
            placeholder="+99 (99) 9999-9999"
            autoComplete="on"
            onChange={(event) => setPhone(event.target.value)}
          />
          <input
            type="addres"
            autoComplete="on"
            className={style.fieldclass}
            placeholder="Endereço do cliente"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <input
            type="email"
            autoComplete="on"
            className={style.fieldclass}
            placeholder="Email do cliente"
            name="address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="error-message">
          <p>{msgApi}</p>
        </div>
      </form>
    </div>
  );
}

export default FormCustomers;
