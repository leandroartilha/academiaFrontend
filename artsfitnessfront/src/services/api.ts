import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const ApiLogin = axios.create({
    baseURL: "http://localhost:5197/",
});

ApiLogin.interceptors.request.use(

    (config) => {
const user = getUserLocalStorage();

config.headers.Authorization = user?.token;

return config;

},
(error) =>{
    return Promise.reject(error);
}
);