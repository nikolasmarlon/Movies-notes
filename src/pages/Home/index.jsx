import { AdicionarFilme, Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom"


export function Home(){

    const { search } = useAuth()    
   
  
    const [movies, setMovies] = useState([]);  

    const navigate = useNavigate()

    function handleDetails(id){        
        navigate(`/details/${id}`)
    }

    useEffect( () => { 
        async function fetchMovies(){
            const response = await api.get(`/movie?title=${search}`)
            setMovies(response.data.movieNotesWithTags)
        }

        fetchMovies()
    }, [ search])

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
                            <Movie key={String(movie.id)} data={movie} onClick={() => handleDetails(movie.id)} /> 
                        ))                        
                    }
                </Content>  
            </main>
        </Container>
    )

    
}