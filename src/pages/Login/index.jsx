import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Background, DivContainer, Form } from "./styles";
import { FiLock, FiMail } from 'react-icons/fi'


export function Login(){
    return(
        <DivContainer>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input required type="text" icon={FiMail} placeholder="E-mail" />
                <Input required type="password" icon={FiLock} placeholder="Senha" />

                <Button title="Entrar" />

                <a href="#">Criar conta</a>
            </Form>

            <Background/>

        </DivContainer>
    )
}