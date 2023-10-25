import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rocketnotes-api-n708.onrender.com'
});