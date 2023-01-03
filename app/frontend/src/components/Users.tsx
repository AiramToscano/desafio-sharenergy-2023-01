import React, { useState, useEffect, useCallback } from 'react';
import { apiRandomUsers } from '../utils/Apis';
import { IUsers } from '../interfaces/IUsers';
import usePaginations from '../hooks/usePagination';

function Users() {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [filterbyname, setFilterbyName] = useState('');
  const { setActualPage, actualPage } = usePaginations();

  const ApiRandom = useCallback(async (page: number) => {
    const apiRandom = await apiRandomUsers(page);
    setUsers(apiRandom.results);
  }, []);

  useEffect(() => {
    ApiRandom(actualPage);
  }, [actualPage]);

  return (
    <div>
      <div>
        <input
          onChange={(e) => setFilterbyName(e.target.value)}
          name="filterByName"
          placeholder="Digite o nome, email ou username"
          value={filterbyname}
          type="username"
        />
      </div>
      <div>
        {users.filter((filter) => filter.email.includes(filterbyname) || filter.name.first
          .includes(filterbyname) || filter.login.username
          .includes(filterbyname)).map((e) => (
            <div key={e.email}>
              <img src={e.picture.medium} alt={e.login.username} />
              <p>{`${e.name.title} ${e.name.first} ${e.name.last}`}</p>
              <p>{e.email}</p>
              <p>{e.login.username}</p>
              <p>{`${e.dob.age} years`}</p>
            </div>
        ))}
      </div>
      {Array(5).fill('').map((_e, index) => (
        <button
          onClick={() => setActualPage(index + 1)}
          type="button"
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Users;
