import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocalStorage';

export async function hasAuthenticated(){
    const token =  getItem('mksToken');
    const refreshtoken = getItem('mksRefreshToken');

     token ? await tokenIsValid(token) : await generateToken(refreshtoken) ;
    
}

export function login(credentials) {
    return axios
        .post('http://192.168.1.10:4005/user/login', credentials)
        .then(response => response.data)
        .then(data => {
            addItem('mksToken', data.token);
            addItem('mksRefreshToken', data.refreshtoken)
            return true;
        });
}

export function register(credentials) {
        return axios
            .post('http://192.168.1.10:4005/user/register', credentials)
            .then(response => response.data.token)
            .then(token => {
                addItem('mksToken', token);
                // addItem('mksrefreshToken', refreshtoken)
    
                return true;
            });
    }

export function logout() {
    removeItem('mksToken');
}

function  tokenIsValid (token) {

    
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }else{
        return false;
    }
    
    // else{
    //     console.log("token expiré!!!")
    //      generateToken();
    // }
}

// La fonction pour generer les token et refreshtoken a partir du refresh token

function generateToken(refreshtoken){

    console.log("Voila le refresh token",refreshtoken)

    try {
        axios
        .post('http://192.168.1.10:4005/user/refreshtoken', {refresh_token:refreshtoken})
        .then(response => response.data)
        .then(data => {
            addItem('mksToken', data.token);
            addItem('mksRefreshToken', data.refreshtoken)
            return true;
        })
    } catch (error) {
        return false
    }
    
    

}
