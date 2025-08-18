import axios from "axios";

export const api = axios.create({
    baseURL: 'https://backendforfront-production.up.railway.app/'
})