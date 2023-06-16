// authService.js
import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000/api';
export const signup = async (firstName, lastname, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, { firstName, lastname, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    console.log(response.data);
    return response.data;
    
  } catch (error) {
    throw new Error(error.response.data.message);
  
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};






