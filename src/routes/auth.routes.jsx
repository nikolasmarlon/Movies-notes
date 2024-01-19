import { Routes, Route, Navigate} from 'react-router-dom'


import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";



export function AuthRoutes(){

    // pegando usuádo do local estorage para corrigir rota 
    const user = localStorage.getItem("@moviesnotes:user")

    return(
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<SignUp />} />     
            {
                // só renderiza a rota, se nao tiver usuário logado
                // Sem isto, toda vez que atualizar a página, a aplicação redireciona para a home
                !user && <Route path='*' element={<Navigate to="/" />} /> 
            }    
        </Routes>
    )
}