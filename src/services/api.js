// configurações do axios

import axios from "axios";

export const api = axios.create({
    // objeto de configurações
    baseURL: "http://localhost:3333", // incluir a url que se repete na api(backend)
    
})