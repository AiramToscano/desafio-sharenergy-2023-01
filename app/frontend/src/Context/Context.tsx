import React, {
  createContext, useState, useCallback,
} from 'react';
import { AppContext, MainProvide } from '../interfaces/IContext';
import { ICustomers } from '../interfaces/ICustomers';

export const MainContext = createContext({} as AppContext);

export function AppProvide({ children }: MainProvide) {
  const [custumer, setObjCustomers] = useState<ICustomers>({
    name: '',
    email: '',
    cpf: '',
    address: '',
    phone: '',
    _id: '',
  });

  const setUpdateConsumer = useCallback(async (obj: ICustomers) => {
    setObjCustomers(obj);
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const provider = { custumer, setUpdateConsumer };

  return (
    <MainContext.Provider value={provider}>
      {children}
    </MainContext.Provider>
  );
}
