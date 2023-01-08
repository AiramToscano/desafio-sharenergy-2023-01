export interface IFormsProps {
    setName: React.Dispatch<React.SetStateAction<string>>,
    setCpf: React.Dispatch<React.SetStateAction<string>>,
    setAddress: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    phone: string,
    name: string,
    cpf: string,
    address: string,
    msgApi: string,
}
