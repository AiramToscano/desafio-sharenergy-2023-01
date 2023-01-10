import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import style from './cats.module.scss';

function HttpCats() {
  const navigate = useNavigate();
  const URL_CATS = 'https://http.cat/';
  const [code, setCode] = useState('');
  const [codeHttp, setCodeHttp] = useState(String(0));

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    setCodeHttp(code);
  }

  useEffect(() => {
    const userId = window.localStorage.getItem('user');
    if (!userId) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Header />
      <div className={style.divButton}>
        <input
          className={style.fieldclass}
          type="username"
          value={code}
          placeholder="digite o codigo"
          autoComplete="on"
          onChange={(event) => setCode(event.target.value)}
        />
      </div>
      <div className={style.divButton}>
        <button
          className={style.button}
          type="submit"
          onClick={handleSubmit}
        >
          Buscar
        </button>
      </div>
      <div className={style.divImage}>
        <img
          className={style.card__image}
          src={codeHttp !== '' ? `${URL_CATS}${codeHttp}` : `${URL_CATS}${0}`}
          alt={`CATS/${codeHttp}`}
        />
      </div>
    </div>
  );
}

export default HttpCats;
