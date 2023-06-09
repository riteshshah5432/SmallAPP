import { APIHandler } from '../networking'
const GET = async (url) => {
    try {
        let URL = APIHandler.BaseURL + url
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default {
    GET
}