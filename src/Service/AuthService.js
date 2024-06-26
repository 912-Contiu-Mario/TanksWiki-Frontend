import axios from 'axios';

class AuthService {
    async login(credentials) {
        try {
            const response = await axios.post('/api/auth/login', credentials);
            return response.data;
        } catch (error) {
            if(error.response != undefined )
                throw error.response.data;
            else throw error;
        }
    }

    async register(user) {
        try {
            const response = await axios.post('/api/auth/register', user);
            return response.data;
        } catch (error) {
            if(error.response != undefined )
                throw error.response.data;
            else throw error;
        }
    }





    
}

export default new AuthService();

