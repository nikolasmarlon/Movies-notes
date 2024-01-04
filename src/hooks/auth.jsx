import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [data, setData] = useState({})


    async function login({ email, password }){
        // mandar para o backend


       try {
            const response = await api.post('/sessions', { email, password})

            const { user, token } = response.data


            // trabalha com chave e valor
            localStorage.setItem("@moviesnotes:user", JSON.stringify(user)) // só aceita texto 
            localStorage.setItem("@moviesnotes:token", token)

            api.defaults.headers.common['authorization'] = `Bearer ${token}`
            setData({ user, token})


       } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível entrar!")
            }
       }
    }


    function logout(){
        localStorage.removeItem("@moviesnotes:token")
        localStorage.removeItem("@moviesnotes:user")


        // mudar o estado para vazio
        setData({})
    }

    async function updateProfile({ user }){
        try {
            await api.put('/users', user)

            localStorage.setItem("@moviesnotes:user", JSON.stringify(user))

            setData({ user, token: data.token})
            alert("Perfil atualizado")

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível atualizar o perfil!")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@moviesnotes:token")
        const user = localStorage.getItem("@moviesnotes:user")

        
        if(token && user ){
            api.defaults.headers.common['authorization'] = `Bearer ${token}`
            
            setData({
                token,
                user: JSON.parse(user)
            })
            console.log(user, token)
        }
   }, [])


    return(
        <AuthContext.Provider value={{ login, logout, updateProfile, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }