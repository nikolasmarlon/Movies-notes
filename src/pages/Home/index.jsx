import { AdicionarFilme, Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


export function Home(){

    const { search } = useAuth()    
   
    const [movies, setMovies] = useState([]);  

    useEffect( () => { 
        async function fetchMovies(){
            const response = await api.get(`/movie?title=${search}&tags${search}`)
            setMovies(response.data.movieNotesWithTags)
        }

        fetchMovies()
    }, [ search ])

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
                    
                    {
                        movies.map( movie => (
                            <Movie key={String(movie.id)} data={movie} /> 
                        ))                        
                    }
                </Content>  
            </main>
        </Container>
    )

    
}