import axios from "axios";

const apiInstance = axios.create({
    baseURL : 'http://localhost:5000/auth'
});

apiInstance.interceptors.request.use(
    (req) =>{
        const token = localStorage.getItem('tokenId');
        if(token){
            console.log("Token = ",token)
            req.headers['authorization'] = "Bearer "+JSON.parse(token);
        }
        return req
    },
    (err) =>{
        return Promise.reject(err)
    }
);

apiInstance.interceptors.response.use(
    (req) =>{       
        return req
    },
    (err) =>{
        return Promise.reject(err)
    }
);




 export default apiInstance;