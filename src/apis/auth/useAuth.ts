import { useMutation } from '@tanstack/react-query';
import { LoginRequestInterface } from '../../types/types';
import apiRequest from '../apiRequest';

export const fetchLogin = async (credentials: LoginRequestInterface) => {
  try {
    const response = await apiRequest.post('/auth/login', credentials);
    if (response.status === 200) return response.data;
    else throw new Error(`Login failed with status: ${response.status}`);
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: fetchLogin,
  });
};

export default useLogin;
