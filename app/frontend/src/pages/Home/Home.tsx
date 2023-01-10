import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Users from '../../components/Users/Users';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = window.localStorage.getItem('user');
    if (!userId) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Header />
      <Users />
    </div>
  );
}

export default Home;
