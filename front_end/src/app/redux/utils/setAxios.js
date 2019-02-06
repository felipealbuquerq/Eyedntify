 import axios from 'axios';

 export const setAxiosToken = token => {
   if (token)
     axios.defaults.headers.common['Authorization'] = token;
   else
     delete axios.defaults.headers.common['Authorization'];
 }

 export const resetJSON = (timeout = 500) => {
   axios.defaults.headers.common['Content-Type'] = "multipart/form-data";
   setTimeout(() => {
     axios.defaults.headers.common['Content-Type'] = "application/json";
   }, timeout);
 }

 export const PROXY = "http://localhost:5000";