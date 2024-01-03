

import { BrowserRouter } from "react-router-dom";

// do contexto
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";



export function Rotas() {

    const { user } = useAuth()
    return(
        <BrowserRouter>
           { user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}