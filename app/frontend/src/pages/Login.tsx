import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../utils/Apis';

function Login() {
  const MIN_LENGTH_PASSWORD = 8;
  const MIN_USERNAME = 3;
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [remember, setRemember] = useState(false);

  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const userLogin = await apiLogin(username, password);
    if (userLogin) {
      const pessoa = {
        token: userLogin,
        rememberStatus: remember,
      };
      setError(false);
      window.localStorage.setItem('user', JSON.stringify(pessoa));
      navigate('/home');
    }
    setError(true);
  }

  useEffect(() => {
    const userId = window.localStorage.getItem('user');
    if (userId) {
      const findremember = JSON.parse(userId);
      const { rememberStatus } = findremember;
      if (rememberStatus) navigate('/home');
      if (!rememberStatus) localStorage.clear();
    }
  }, []);

  return (
    <div>
      <form id="login_form" onSubmit={loginClick}>
        <h4> Sign In</h4>
        <div>
          <input
            type="username"
            value={username}
            placeholder="Username"
            autoComplete="on"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            autoComplete="on"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p>Remember-me</p>
        <input
          type="checkbox"
          onChange={(event) => setRemember(event.target.checked)}
        />
        <div className="btn">
          <button
            type="submit"
            disabled={password.length < MIN_LENGTH_PASSWORD || username.length < MIN_USERNAME}
            onClick={handleSubmit}
          >
            Entrar
          </button>
        </div>
        {error && (
        <div className="error-message">
          <p>
            Não foi possível fazer login.
          </p>
        </div>
        )}
      </form>
    </div>
  );
}

export default Login;
