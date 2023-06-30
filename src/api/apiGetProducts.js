import apiInstance from "../baseApi/apiInstance"

export const apiGetProducts = () => new Promise((resolve , reject) =>{
    apiInstance({
        method : 'GET',
        url : '/api/getProducts'
    }).then(res =>{
        !res.error ? resolve({status : res.status , data : res.data}) : resolve(404)
    }).catch(error =>{
        resolve(error.response.status)
    })
})