import { Header } from "../../components/Header";
import { Marcador } from "../../components/Marcador";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Textarea } from "../../components/Textarea";
import { Button} from "../../components/Button";



export function New(){
    return(
        <Container>
            <Header />

            <main>

                <Form>
                    <header>
                    <a href="#">
                        <FiArrowLeft/>
                        Voltar
                    </a>
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
                            <Marcador value="Ficção científica"  />
                            <Marcador value="Ficção"  />
                            <Marcador value="Terror"  />
                            <Marcador value="Ação"  />
                            <Marcador isNew placeholder="Novo marcador" />
                        </div>
                    </div>


                    <div className="botoes">
                    <Button title="Excluir filme" />
                    <Button isNew title="Salvar alterações" />
                    </div>
                </Form>
            </main>

        </Container>
    )
}