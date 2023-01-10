import React, { useState, useEffect, useCallback } from 'react';
import { apiRandomUsers } from '../../utils/Apis';
import { IUsers } from '../../interfaces/IUsers';
import usePaginations from '../../hooks/usePagination';
import style from './users.module.scss';

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
          className={style.fieldclass}
          onChange={(e) => setFilterbyName(e.target.value)}
          name="filterByName"
          placeholder="Digite o nome, email ou username desejado"
          value={filterbyname}
          type="username"
        />
      </div>
      <div className={style.cards}>
        {users.filter((filter) => filter.email.includes(filterbyname) || filter.name.first
          .includes(filterbyname) || filter.login.username
          .includes(filterbyname)).map((e) => (
            <div className={style.card} key={e.email}>
              <img className={style.card__image} src={e.picture.medium} alt={e.login.username} />
              <div className={style.container}>
                <p>{`Nome: ${e.name.title} ${e.name.first} ${e.name.last}`}</p>
                <p>{`Email: ${e.email}`}</p>
                <p>{`Username: ${e.login.username}`}</p>
                <p>{`Idade: ${e.dob.age} years`}</p>
              </div>
            </div>
        ))}
      </div>
      <div className={style.divButton}>
        {Array(5).fill('').map((_e, index) => (
          <button
            className={style.next}
            onClick={() => setActualPage(index + 1)}
            type="button"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Users;
