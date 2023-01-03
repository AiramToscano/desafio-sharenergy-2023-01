import axios from 'axios';

export async function apiLogin(username: string, password: string) {
  try {
    const response = await axios.post('http://localhost:3001/login', { username, password });
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiRandomUsers1(page: number) {
  try {
    const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`);
    return response.data;
  } catch (err) {
    return false;
  }
}
