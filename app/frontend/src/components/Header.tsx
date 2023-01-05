import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      <header>
        <button
          type="button"
          onClick={handleSubmithttpcat}
        >
          HTTP CAT
        </button>
        <button
          type="button"
          onClick={handleSubmitHome}
        >
          Home
        </button>
        <button
          type="button"
          onClick={handleSubmiRadomDog}
        >
          Random Dog
        </button>
        <button
          type="button"
          onClick={handleSubmitCustomer}
        >
          Customers
        </button>
        <button
          type="button"
          onClick={handleSubmitLogoff}
        >
          Logoff
        </button>
      </header>
    </div>
  );
}

export default Header;
