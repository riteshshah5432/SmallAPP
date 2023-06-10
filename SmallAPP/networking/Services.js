import { APIHandler } from '../networking'
const GET = async (url) => {
    try {
        let URL = APIHandler.BaseURL + url
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': APIHandler.token,
            }
        });
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

const POST = async (url, body) => {
    try {
        let URL = APIHandler.BaseURL + url
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': APIHandler.token,
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

const PUT = async (url, body) => {
    try {
        let URL = APIHandler.BaseURL + url
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': APIHandler.token,
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default {
    GET,
    POST,
    PUT
}