import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Users from '../components/Users';

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
      <Users />
    </div>
  );
}

export default Home;
