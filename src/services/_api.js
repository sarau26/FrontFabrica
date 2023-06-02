
const API_URL = import.meta.env.VITE_API_URL_CODE_FACTORY;

class ApiService {

    static get = async (path) => {
        const resp = await fetch(`${API_URL}${path}`);
    
        return await resp;
    }
    
    static post = async (data, path) => {
    
        const url = `${API_URL}${path}`;
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            redirect: 'follow'
        };
    
        return  await fetch(url, requestOptions);
    }
    
    static put = async (data, path) => {
    
        const url = `${API_URL}${path}`;
    
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            redirect: 'follow'
        };
    
        return  await fetch(url, requestOptions);
    }
    
    static deleteApi = async (data, path) => {
    
        const url = `${API_URL}${path}`;
    
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            redirect: 'follow'
        };
       return await fetch(url, requestOptions);
    }
}

export default ApiService
