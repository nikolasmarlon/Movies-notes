import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { Background, DivContainer, Form } from "./styles";
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { useState } from "react";

import { api } from '../../services/api' // configurações do axios 



export function SignUp(){
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()
    
    function lidarComCadastro(){
        if(!nome || !email || !senha){
           return alert("Preencha todos os campos")
        }

        api.post("/users", { nome, email, senha})
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(
            error => {
                if(error.response){
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar!")
                }
            }
        )


    }
    
    return(
        <DivContainer>
            <Form>
                <h1>Movies Notes</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>
                <Input required type="text" icon={FiUser} placeholder="Nome" onChange={e => setNome(e.target.value)} />
                <Input required type="email" icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                <Input required type="password" icon={FiLock} placeholder="Senha"  onChange={e => setSenha(e.target.value)} />

                <Button isNew title="Cadastrar" onClick={lidarComCadastro} />

                <Link to="/"> <FiArrowLeft size={20}/>Voltar para o login</Link>
            </Form>

            <Background/>

        </DivContainer>
    )
}