import { ICustomers } from './ICustomers';

export interface AppContext {
    custumer: ICustomers,
    setUpdateConsumer: (boolean: ICustomers) => void,
}

export interface MainProvide {
    children: React.ReactNode
}
