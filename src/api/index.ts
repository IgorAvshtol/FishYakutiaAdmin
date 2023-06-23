import axios from 'axios';
import { FormData } from '@/interfaces';

export const instance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const loginUser = async (loginData: FormData) => {
  try {
    const response = await instance.post('/auth/login', loginData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const me = async () => {
  try {
    const response = await instance.get('/auth/me');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

export const logoutUser = async () => {
  try {
    const response = await instance.post('/auth/logout');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

export const getAllUsersOrders = async () => {
  try {
    const response = await instance.get('/orders');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
