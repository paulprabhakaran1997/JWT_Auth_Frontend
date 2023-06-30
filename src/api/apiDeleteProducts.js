import apiInstance from "../baseApi/apiInstance"

export const apiDeleteProducts = (id) => new Promise((resolve , reject) =>{
    console.log(id);
    apiInstance({
        method : 'DELETE',
        url : '/api/deleteProducts/'+id,
    }).then(res =>{
        !res.error ? resolve(res.status) : resolve(404)
    }).catch(error =>{
        resolve(error.response.status)
    })
})