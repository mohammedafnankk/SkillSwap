import axios from "axios";
import { Navigate } from "react-router-dom";

// const refreshToken = localStorage.getItem("refresh_token");
// console.log(refreshToken);

const axiosInstencs = axios.create({
  baseURL: "http://localhost:8020",
});

axiosInstencs.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
    //   axiosInstencs.post('/refresh-token',{
    //       token:refreshToken,
    //   }).then((res)=>{
    //       localStorage.setItem("access_token",res.data.accessToken)
    //       localStorage.setItem("refresh_token",res.data.refreshToken)
    //   }).catch((err)=>{
    //       console.log(err)
    //       // localStorage.clear()
    //   })
    
    }
    return Promise.reject(error);
  }
);
export default axiosInstencs;
