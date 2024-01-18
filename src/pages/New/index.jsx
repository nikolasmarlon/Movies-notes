import { Header } from "../../components/Header";
import { Marcador } from "../../components/Marcador";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Textarea } from "../../components/Textarea";
import { Button} from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom'



export function New(){

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ rating, setRating] = useState("")

    const [ tags, setTags] = useState([])
    const [ newTag, setNewTag] = useState("")

    function handleAddTag(){
        setTags(state => [...state, newTag])
        setNewTag("")
    }


    function handleRemoveTag(deleted){

        // filter retorn um nova listagem sem a tag deletada
        setTags(state => state.filter(tag => tag != deleted))
    }

    const navigate = useNavigate()

    async function handleNewMovieNote(){

        
        // verificar campos vazios
        if(!title || !description || !rating ){
            return alert("Prencha todos os campos")
            
        }
        // verificar nota 
        if(rating > 5 || rating < 0){
            return alert('A nota dever ser um valor de 0 e 5')
        }
        
        if(tags.length === 0){
            console.log(tags)
            return alert("Adicione ao menos um marcador")
        }
        
        // verificação marcador
        if(newTag){
            return alert("Clique em adicionar marcador")
        }
        


        await api.post("/movie", {
            title,
            rating,
            description,
            movie_tags: tags,
        })

        alert("Filme cadastrado com sucesso!")
        navigate('/')
        
    }


    return(
        <Container>
            <Header />

            <main>

                <Form>
                    <header>
                    <Link to="/">
                        <FiArrowLeft/>
                        Voltar
                    </Link>
                        <h1>Novo Filme</h1>
                    </header>

                    <div>
                        <Input required type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} />
                        <Input required type="number" min="0" max="5" placeholder="Sua nota(de 0 a 5)" onChange={e => setRating(e.target.value)} />
                    </div>

                    <Textarea required type="textarea" placeholder="Observações" onChange={e => setDescription(e.target.value)} />

                    <div id="marcadores">
                        <h2>Marcadores</h2>

                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <Marcador key={index} value={tag} onClick={()=>{handleRemoveTag(tag)}} />
                                    
                                ))
                                
                            }
                            
                            <Marcador isNew placeholder="Novo marcador" onChange={ e => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag} />
                        </div>
                    </div>


                                      
                    <Button isNew title="Salvar alterações" onClick={handleNewMovieNote} />
                    
                </Form>
            </main>

        </Container>
    )
}