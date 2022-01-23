import axios from 'axios';
import { API_ENDPOINT } from './config';

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: 'LOGIN_START' });
    try {
        const res = await axios.post(`${API_ENDPOINT}/auth/login`, userCredential);
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error })
    }
}