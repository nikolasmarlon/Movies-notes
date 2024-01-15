import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";



// contexto para compartilhar com a aplicação
export const AuthContext = createContext({})

function AuthProvider({children}){

    const [data, setData] = useState({})

    const [ search, setSearch ] = useState("")


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

    async function updateProfile({ user, avatarFile }){
        try {


            if(avatarFile){

                // enviar como arquivo com new formadata
                const fileUploadForm = new FormData()

                // esperando campo avatar
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)

                user.avatar = response.data.avatar
            }

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

    function updateSearchQuery(query){
        setSearch(query)
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
            
        }
   }, [])


   // children vai ser as rotas da aplicação no arquivo app.js
    return(
        <AuthContext.Provider value={{ login, logout, updateProfile, updateSearchQuery, user: data.user, search }}>
            {children} 
        </AuthContext.Provider>
    )
}


// use context
function useAuth(){
    const context = useContext(AuthContext) // contexto criado acima ( topo )

    return context
}

export { AuthProvider, useAuth }