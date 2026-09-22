import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

//Function to call API endpoints

//1 User Register
export const userRegisterAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody, {});
}

//2 User Login
export const userLoginAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{});
}

//3 User Profile
export const userProfileAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getprofile`,{},reqHeader);
}

//4 Udate User
export const updateProfileAPI = async(reqBody, reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/editprofile`,reqBody,reqHeader)
}

//5 Get Home Plant
export const getHomePlantAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/gethomeplant`,{},reqHeader);
}

//6 Get Plant
export const getAllPlantAPI = async(type, reqHeader)=>{
    const url = type
        ? `${serverURL}/api/getplant?type=${encodeURIComponent(type)}`
        : `${serverURL}/api/getplant`;
    return await commonAPI('GET', url, {}, reqHeader);
}

//7 View Plant
export const viewPlantAPI = async(id, reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewplant/${id}`,{},reqHeader);
}

//8 Get Pot
export const getPotAPI = async(type, reqHeader)=>{
    const url = type
        ? `${serverURL}/api/getpot?type=${encodeURIComponent(type)}`
        : `${serverURL}/api/getpot`;
    return await commonAPI('GET', url, {}, reqHeader);
} 

//9 View Pot
export const viewPotAPI = async(id, reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewpot/${id}`,{},reqHeader);
}

//10 Order Product
export const orderProductAPI = async(reqBody, reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/order`,reqBody,reqHeader);
}

export const viewOrderAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/vieworder`,{},reqHeader);
}

//Add Favorites
export const addFavoritesAPI = async(reqBody, reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/fav`,reqBody,reqHeader);
} 

//Get Favorites 
export const getFavoritesAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewfav`,{},reqHeader);
}
//10 Testimonial
export const addReviewAPI = async(reqBody, reqHeader)=>{
    return await commonAPI('POST', `${serverURL}/api/review`,reqBody,reqHeader);
}

//11 get Testimonial
export const getReviewAPI = async(productName, reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getreview?productName=${encodeURIComponent(productName)}`,productName,reqHeader);
}