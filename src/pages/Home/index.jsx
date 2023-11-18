import { AdicionarFilme, Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { FiPlus } from "react-icons/fi";


export function Home(){
    return(
        <Container>
            <Header />

            <main>
                <AdicionarFilme>
                    <h1>Meus filmes</h1>

                    <NewMovie to="/new">
                        <FiPlus />
                        Adicionar filme
                    </NewMovie>
                </AdicionarFilme>

                <Content>

                    <Movie data={{
                        title: 'Interestellar',
                        note: '1',
                        description: 'ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, ',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}                        
                        ]
                    }} />

                    <Movie data={{
                        title: 'Interestellar',
                        note: '3',
                        description: 'ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, ',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}                        
                        ]
                    }} />

                    <Movie data={{
                        title: 'Interestellar',
                        note: '4',
                        description: 'ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, ',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}                        
                        ]
                    }} />

                    <Movie data={{
                        title: 'Interestellar',
                        note: '4',
                        description: 'ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, ',
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