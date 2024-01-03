import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";


import { Background, DivContainer, Form } from "./styles";
import { FiLock, FiMail } from 'react-icons/fi'


export function Login(){


    const dadosDoContexto = useAuth()

    
   

    return(
        <DivContainer>      
            <Form>
                <h1>Movies Notes</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input required type="text" icon={FiMail} placeholder="E-mail" />
                <Input required type="password" icon={FiLock} placeholder="Senha" />

                <p>{dadosDoContexto.email}</p>

                <Button isNew title="Entrar" />

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background/>

        </DivContainer>
    )
}