import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, DivContainer, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
    return(
        <DivContainer>
            <header>
                <a href="#">
                    <FiArrowLeft/>
                    Voltar
                </a>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/nikolasmarlon.png" alt="Imagem do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>

                <Input required type="text" icon={FiUser} value="Nikolas Marlon" />
                <Input required type="email" icon={FiMail} value="cunha@gsdf.com" />
                <Input type="password" icon={FiLock} placeholder="Senha atual" />
                <Input type="password" icon={FiLock} placeholder="Nova senha" />

                <Button title="Salvar" />

            </Form>
        </DivContainer>
    )
}