import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";


import { Background, DivContainer, Form } from "./styles";
import { FiLock, FiMail } from 'react-icons/fi'


export function Login(){

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    // desestruturação contexto 
    const { login }= useAuth()  

    // Lidar com login(do contexto)
    function handleLogin(){
        login({ email, password})
    }
   

    return(
        <DivContainer>      
            <Form>
                <h1>Movies Notes</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input required type="text" icon={FiMail} placeholder="E-mail" onChange={ evento => setEmail(evento.target.value)} />
                <Input required type="password" icon={FiLock} placeholder="Senha"  onChange={ e => setPassword(e.target.value)} />                

                <Button isNew title="Entrar" onClick={handleLogin} />

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background/>

        </DivContainer>
    )
}