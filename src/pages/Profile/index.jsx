import { useState } from "react";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, DivContainer, Form } from "./styles";

import { useAuth } from '../../hooks/auth'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile(){

    const { user, updateProfile } = useAuth()

    const [name, setName ] = useState(user.name)
    const [email, setEmail ] = useState(user.email)
    const [passwordOld, setPasswordOld ] = useState()
    const [passwordNew, setPasswordNew ] = useState()
    


    async function handleUpdate(){


        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        await updateProfile({user})
    }

    return(
        <DivContainer>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/nikolasmarlon.png" alt="Imagem do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>

                <Input required type="text" icon={FiUser} value={name} onChange={e => setName( e.target.value) } />
                <Input required type="email" icon={FiMail} value={email} onChange={e => setEmail( e.target.value) } />
                <Input type="password" icon={FiLock} placeholder="Senha atual" onChange={e => setPasswordOld( e.target.value) } />
                <Input type="password" icon={FiLock} placeholder="Nova senha" onChange={e => setPasswordNew( e.target.value) } />

                <Button title="Salvar" onClick={handleUpdate} />

            </Form>
        </DivContainer>
    )
}