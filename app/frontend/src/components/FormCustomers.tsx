import React from 'react';
import { Input } from 'the-mask-input';
import { IFormsProps } from '../interfaces/IFormsCustomers';

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
            value={cpf}
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
        <div className="error-message">
          <p>{msgApi}</p>
        </div>
      </form>
    </div>
  );
}

export default FormCustomers;
