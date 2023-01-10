import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { apiRandomDogs } from '../../utils/Apis';
import style from './dogs.module.scss';

function RandomDog() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const URL_DOGS = 'https://random.dog/';

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const dogs = await apiRandomDogs();
    const DogsRandoms = Math.floor(Math.random() * 200);
    setCode(dogs[DogsRandoms]);
  }

  const DogsRandom = useCallback(async () => {
    const dogs = await apiRandomDogs();
    const DogsRandoms = Math.floor(Math.random() * 200);
    setCode(dogs[DogsRandoms]);
  }, []);

  useEffect(() => {
    DogsRandom();
    const userId = window.localStorage.getItem('user');
    if (!userId) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Header />
      <div className={style.divButton}>
        <button
          type="submit"
          className={style.button}
          onClick={handleSubmit}
        >
          Refresh
        </button>
      </div>
      <div className={style.divImage}>
        <img
          className={style.card__image}
          src={`${URL_DOGS}${code}`}
          alt="dogs"
        />
      </div>
    </div>
  );
}

export default RandomDog;
