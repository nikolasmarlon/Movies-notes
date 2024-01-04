import { Header } from "../../components/Header";
import { Marcador } from "../../components/Marcador";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Textarea } from "../../components/Textarea";
import { Button} from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";



export function New(){

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
                        <Input type="text" placeholder="Título" />
                        <Input type="text" placeholder="Sua nota(de 0 a 5)" />
                    </div>

                    <Textarea type="textarea" placeholder="Observações" />

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


                                      
                    <Button isNew title="Salvar alterações" />
                    
                </Form>
            </main>

        </Container>
    )
}