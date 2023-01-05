import axios from 'axios';

export async function apiLogin(username: string, password: string) {
  try {
    const response = await axios.post('http://localhost:3001/login', { username, password });
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiRandomUsers(page: number) {
  try {
    const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`);
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiRandomDogs() {
  const response = await axios.get('https://random.dog/doggos');
  return response.data;
}

export async function apiGetCustomers() {
  const response = await axios.get('http://localhost:3001/customers');
  return response.data;
}

export async function apiCreateCustomers(obj: object, token: string) {
  try {
    const response = await axios.post(
      'http://localhost:3001/customers',
      { obj },
      {
        headers: {
          authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}
