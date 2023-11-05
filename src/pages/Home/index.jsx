import { AdicionarFilme, Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Movie } from "../../components/Movie";


export function Home(){
    return(
        <Container>
            <Header />

            <main>
                <AdicionarFilme>
                    <h1>Meus filmes</h1>

                    <Button icon={AiOutlinePlus} title="Adicionar filme" />
                </AdicionarFilme>

                <Content>

                    <Movie data={{
                        title: 'Interestellar',
                        note: '4',
                        description: 'ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}                        
                        ]
                    }} />

                </Content>
            </main>
        </Container>
    )

    
}