import { commonApi } from "./commonApi"
import { SERVER_URL } from "./Serverurl"

export const registerApi = async (user)=>{
    return await commonApi("POST",`${SERVER_URL}/register`, user, "")
}
export const loginApi = async (user)=>{
    return await commonApi("POST",`${SERVER_URL}/login`, user, "")
}

