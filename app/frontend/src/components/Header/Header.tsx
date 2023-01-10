import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './header.module.scss';

function Header() {
  const navigate = useNavigate();

  function handleSubmitLogoff() {
    localStorage.removeItem('user');
    navigate('/login');
  }

  function handleSubmithttpcat() {
    navigate('/httpcat');
  }

  function handleSubmiRadomDog() {
    navigate('/randomdog');
  }

  function handleSubmitHome() {
    navigate('/home');
  }

  function handleSubmitCustomer() {
    navigate('/customers');
  }

  return (
    <div>
      <header className={style.header}>
        <button
          type="button"
          className={style.buttom}
          onClick={handleSubmithttpcat}
        >
          HTTP CAT
        </button>
        <button
          className={style.buttom}
          type="button"
          onClick={handleSubmitHome}
        >
          Home
        </button>
        <button
          type="button"
          className={style.buttom}
          onClick={handleSubmiRadomDog}
        >
          Random Dog
        </button>
        <button
          type="button"
          className={style.buttom}
          onClick={handleSubmitCustomer}
        >
          Customers
        </button>
        <button
          type="button"
          className={style.buttom}
          onClick={handleSubmitLogoff}
        >
          Logoff
        </button>
      </header>
    </div>
  );
}

export default Header;
