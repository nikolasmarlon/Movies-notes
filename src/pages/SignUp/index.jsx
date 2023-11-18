import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Background, DivContainer, Form } from "./styles";
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'


export function SignUp(){
    return(
        <DivContainer>
            <Form>
                <h1>Movies Notes</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>
                <Input required type="text" icon={FiUser} placeholder="Nome" />
                <Input required type="email" icon={FiMail} placeholder="E-mail" />
                <Input required type="password" icon={FiLock} placeholder="Senha" />

                <Button isNew title="Cadastrar" />

                <Link to="/"> <FiArrowLeft size={20}/>Voltar para o login</Link>
            </Form>

            <Background/>

        </DivContainer>
    )
}