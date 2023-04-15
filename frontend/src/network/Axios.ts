import axios from "axios";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const Axios = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
});

export default Axios;
