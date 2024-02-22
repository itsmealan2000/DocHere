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

export const getAllUsersApi = async (user)=>{
    return await commonApi("GET",`${SERVER_URL}/getallusers`, user, "")
}

// doctors
export const addDoctorApi = async (doctor)=>{
    return await commonApi("POST",`${SERVER_URL}/adddoctor`, doctor, "")
}

export const getDoctorApi = async (doctor)=>{
    return await commonApi("GET",`${SERVER_URL}/getdoctor`, doctor, "")
}

//pharmacy
export const addMedicineApi = async (medicine)=>{
    return await commonApi("POST",`${SERVER_URL}/addmedicine`, medicine, "")
}

export const removeMedicineApi = async (medicine)=>{
    return await commonApi("DELETE",`${SERVER_URL}/removemedicine`, medicine, "")
}

export const searchMedicineApi = (medicine)=> {
    return commonApi("GET", `${SERVER_URL}/searchmedicine`, medicine, "");
}

export const changeStockApi = async (medicine)=>{
    return await commonApi("PUT",`${SERVER_URL}/changestock`, medicine, "")
}

//bills
export const addBillApi = async (bill)=>{
    return await commonApi("POST",`${SERVER_URL}/addbill`, bill, "")
}

export const getUserBillApi = async (bill)=>{
    return await commonApi("GET",`${SERVER_URL}/getuserbill`, bill, "")
}