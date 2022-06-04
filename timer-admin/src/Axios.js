import axios from "axios";
const tokenString = localStorage.getItem('token')
const token = JSON.parse(tokenString)
const client = axios.create({
    baseURL: "http://localhost:8080/api/",
});

client.defaults.headers.common['Authorization'] = `Bearer ` + token?.authorisation.token;
export default client