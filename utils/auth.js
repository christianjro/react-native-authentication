import axios from 'axios';
import { API_KEY as apiKey} from '@env';

export async function createUser(email, password) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey, {
        email: email,
        password: password,
        returnSecureToken: true
    })
}