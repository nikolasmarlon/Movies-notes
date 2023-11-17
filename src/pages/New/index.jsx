import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Textarea } from "../../components/Textarea";



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

                </Form>
            </main>

        </Container>
    )
}