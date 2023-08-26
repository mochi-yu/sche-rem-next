import axios from "axios";

const instance = axios.create({
  baseURL: "http://mochi-yu.com:5001",

});
  
export default instance;