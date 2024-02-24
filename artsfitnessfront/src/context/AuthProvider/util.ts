import { ApiLogin } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem("u", JSON.stringify(user))
}

export function getUserLocalStorage(){
    const json = localStorage.getItem("u");

    if(!json){
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest(username: string, password: string ){
    try {
        const request = await ApiLogin.post("login", null,{
            params: {
                Username: username,
                Password: password,
              },
              headers: {
                'Accept': '*/*',
              },
        })

        // axios.post('http://localhost:5197/login', null,{
        //     params: {
        //         Username: user.Username,
        //         Password: user.Password,
        //       },
        //       headers: {
        //         'Accept': '*/*',
        //       },
        // })

        return request.data;
    } catch (error) {
        return null;
    }
}