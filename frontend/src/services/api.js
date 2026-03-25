import axios from 'axios';
import { getAuthToken } from './authStorage';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000';

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = getAuthToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
