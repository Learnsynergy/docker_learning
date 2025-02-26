import axios from "axios";
import { useNavigate } from 'react-router-dom'
const token = localStorage.getItem('token')
const client = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        Authorization: `Bearer ${token}`
    }
}

)
client.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            const navigate = useNavigate();
            navigate('/onboarding/login');
            return Promise.reject('Unauthorized');
        }

        return Promise.reject(error);
    }
);

export default client;