import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://rocketlabs-crud.herokuapp.com",
});

export default clienteAxios;
