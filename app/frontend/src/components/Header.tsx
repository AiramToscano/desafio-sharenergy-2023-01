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

  function handleSubmithome() {
    navigate('/home');
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
          onClick={handleSubmithome}
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
          onClick={handleSubmitLogoff}
        >
          Logoff
        </button>
      </header>
    </div>
  );
}

export default Header;
