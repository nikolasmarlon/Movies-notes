import { useState } from "react";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, DivContainer, Form } from "./styles";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";

import { useAuth } from '../../hooks/auth'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useNavigate } from 'react-router-dom'


import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { AiOutlineArrowLeft } from "react-icons/ai";

export function Profile(){

    const { user, updateProfile } = useAuth()

    const [name, setName ] = useState(user.name)
    const [email, setEmail ] = useState(user.email)
    const [passwordOld, setPasswordOld ] = useState()
    const [passwordNew, setPasswordNew ] = useState()



    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [ avatar, setAvatar ] = useState(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState(null)
    


    async function handleUpdate(){


        const updated  = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated, avatarFile})
    }

    const navigate = useNavigate()
    
    function handleBack(){
        navigate(-1)
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]

        // para guardar 
        setAvatarFile(file)

        // para exibir o avatar
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <DivContainer>
            <header>
                <ButtonText onClick={handleBack} icon={AiOutlineArrowLeft} title="Voltar" />
            </header>

            <Form>

                <Avatar>
                    <img src={avatar} alt="Imagem do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" onChange={handleChangeAvatar} />
                    </label>
                </Avatar>

                <Input required type="text" icon={FiUser} value={name} onChange={e => setName( e.target.value) } />
                <Input required type="email" icon={FiMail} value={email} onChange={e => setEmail( e.target.value) } />
                <Input type="password" icon={FiLock} placeholder="Senha atual" onChange={e => setPasswordOld( e.target.value) } />
                <Input type="password" icon={FiLock} placeholder="Nova senha" onChange={e => setPasswordNew( e.target.value) } />

                <Button isNew title="Salvar" onClick={handleUpdate} />

            </Form>
        </DivContainer>
    )
}