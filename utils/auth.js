import axios from 'axios';
import { API_KEY as apiKey} from '@env';

export async function createUser(email, password) {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    })
    const token = response.data.idToken
    return token
}

export async function login(email, password) {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiKey
    const response = await axios.post(url, {
        email: email, 
        password: password,
        returnSecureToken: true
    })
    console.log(response)
    const token = response.data.idToken
    return token
}