import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
  },
});
export default instance;
