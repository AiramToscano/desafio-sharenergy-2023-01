import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { apiRandomDogs } from '../../utils/Apis';

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
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Refresh
        </button>
      </div>
      <img
        src={`${URL_DOGS}${code}`}
        alt="dogs"
      />
    </div>
  );
}

export default RandomDog;
