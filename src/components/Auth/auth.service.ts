import {authData} from "./types.ts";
import $api from "../../config/axios.ts";





export const login = async (email: string, password: string) => {
    try {
        return await $api.post<authData>('/login', {email, password})
    }
    catch (error) {
        console.log(error)
    }
}

