import { Input } from "../../components/Input";
import { DivContainer, Form } from "./styles";
import { FiLock, FiMail } from 'react-icons/fi'


export function Login(){
    return(
        <DivContainer>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input icon={FiMail} placeholder="E-mail" />
                <Input icon={FiLock} placeholder="Senha" />
            </Form>
        </DivContainer>
    )
}