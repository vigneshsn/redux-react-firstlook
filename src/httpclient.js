import Axios from "axios";

const axiosClient = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

axiosClient.interceptors.request.use(config => {
  const token = "dummy"; //get this from local storage
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
