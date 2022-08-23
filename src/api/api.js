import axios from "axios";

const baseUrl =  "https://assessment.api.vweb.app";

export const getProducts = () => {
    try {
        const data  = axios.get(`${baseUrl}/products`);
        return data;
    } catch (error) {
        console.log(error)  
    }
}


export const getUsers = () => {
    try {
        const data  = axios.get(`${baseUrl}/users`);
        return data;
    } catch (error) {
        console.log(error)  
    }
}


export const getOrders = () => {
    try {
        const data  = axios.get(`${baseUrl}/orders`);
        return data;
    } catch (error) {
        console.log(error)  
    }
}
