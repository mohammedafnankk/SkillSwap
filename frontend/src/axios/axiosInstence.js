import axios from 'axios'

const axiosInstencs = axios.create({
    baseURL: "http://localhost:8020"
})

axiosInstencs.interceptors.response.use(
    (response)=>(response),
    (error) =>{
        if(error.response.status===403){
            console.log(error,"ERROR====")
        }
        return Promise.reject(error)
    }
)
export default axiosInstencs