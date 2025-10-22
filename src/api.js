import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Centraliza a URL base da API para uso em toda a aplicação
export const API_BASE_URL = "https://parkingapisenai.azurewebsites.net";

// Função utilitária para obter o token salvo
export async function getToken() {
  return await AsyncStorage.getItem('token');
}

// Função utilitária para criar um axios com o header Authorization correto
export async function getAxiosWithToken() {
  const token = await getToken();
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: token ? { 'Authorization': `Bearer ${token}` } : {},
  });
  return instance;
}
