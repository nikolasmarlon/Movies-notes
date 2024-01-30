// configurações do axios

import axios from "axios";

export const api = axios.create({
    // objeto de configurações
    baseURL: "https://service-api-filmes.onrender.com", // incluir a url que se repete na api(backend)
    
})