
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { AiOutlineClockCircle, AiOutlineArrowLeft} from 'react-icons/ai'
import { Tag } from "../../components/Tag";
import { Content, DivContainer } from "./styles";
import { StarRating } from "../../components/StarRating";

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button } from "../../components/Button";

export function MoviePreview(){

    const params = useParams()

    const [data, setData ] = useState("")

    const { user } = useAuth()
    // atualiza a URl do avatar
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

 

    const formatarData = (dataString) => {
        // Verifica se a string de data não é undefined
        if (!dataString) {
          return ''; // Retorna uma string vazia se a data for undefined
        }
      
        // Converte para formato ISO 8601
        const iso8601String = dataString.replace(' ', 'T');
      
        // Cria um objeto Date a partir da string reformulada
        const data = new Date(iso8601String);
      
        // Formata a data no formato desejado (excluindo a parte dos segundos)
        return format(data, 'dd/MM/yyyy HH:mm', { locale: ptBR });
    };

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente remover o filme?")

        if(confirm){
            await api.delete(`/movie/${params.id}`)
            navigate(-1)
        }
    }


    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/movie/${params.id}`)
            setData(response.data)
            console.log(data)
        }

        fetchMovies()
    }, [])
    return(
        <DivContainer>

            <Header />

            {
                <main>
                    <Content>
                        <ButtonText onClick={handleBack} icon={AiOutlineArrowLeft} title="Voltar" />                        
                        

                        <div className="header-moovie" >
                            
                            <div id="classification" >
                                <h1>{data.title}</h1>
                                <div className="stars">
                                    <StarRating nota={4} />
                                </div>
                            </div>

                            <div className="header-profile">
                                <img src={avatarUrl}  alt={user.name} />
                                <p>Por {user.name}</p>
                                <span><AiOutlineClockCircle /> {formatarData(data.created_at)}</span>
                            </div>

                            <div id="tags">
                                {
                                   data.movie_tags && data.movie_tags.map( tag =>  <Tag key={String(tag.id)} title={tag.name} />)
                                    
                                }
                            </div>

                        </div>     
                        
                        <p>
                            {data.description}
                        </p>


                        <div id="rodape">
                            <Button onClick={handleRemove} title="Excluir" /> 
                        </div>
                    </Content>
                </main>
            }
                
        </DivContainer>
    )
}