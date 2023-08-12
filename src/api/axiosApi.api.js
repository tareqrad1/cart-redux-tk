import axios from 'axios'
export const axiosApi = axios.create({
    baseURL:'http://localhost:9000'
    // baseURL:'https://fakestoreapi.com'
})