import { commonApi } from "./commonApi"
import { SERVER_URL } from "./Serverurl"


// users 
export const registerApi = async (user)=>{
    return await commonApi("POST",`${SERVER_URL}/register`, user, "")
}
export const loginApi = async (user)=>{
    return await commonApi("POST",`${SERVER_URL}/login`, user, "")
}

export const getProfileApi = (useremail) => {
    return commonApi("GET", `${SERVER_URL}/profile?email=${useremail}`,);
}

// doctors
export const addDoctorApi = async (doctor)=>{
    return await commonApi("POST",`${SERVER_URL}/adddoctor`, doctor, "")
}

export const getDoctorApi = async (doctor)=>{
    return await commonApi("GET",`${SERVER_URL}/getdoctor`, doctor, "")
}