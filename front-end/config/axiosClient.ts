import axios, {AxiosInstance} from "axios";

const clienteAxios:AxiosInstance = axios.create({
  baseURL: "https://rocketlabs-crud.herokuapp.com",
});

export default clienteAxios;
