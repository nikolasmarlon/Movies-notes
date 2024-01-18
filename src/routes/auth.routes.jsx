import { Routes, Route, Navigate} from 'react-router-dom'


import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";



export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<SignUp />} />     
            <Route path='*' element={<Navigate to="/" />} />     
        </Routes>
    )
}