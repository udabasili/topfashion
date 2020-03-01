import axios from "axios";

export function TokenHeader (token) {    
    console.log(token);
    
    if(token){
        axios.defaults.headers.get["Accept"] = "application/json";
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
    }
    else{
        delete axios.defaults.headers.common["Authorization"];
    }
} 

export function restApi(method, path, data){
    return new Promise((resolve, reject) => {
        return axios[method](path, data)
            .then((response) => {                
                return resolve(response.data.message)
            })
            .catch(error => {              
                  
                return reject(error.response.data)
            })
    })
}