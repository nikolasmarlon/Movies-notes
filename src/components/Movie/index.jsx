import { Container } from "./styles";
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle, AiOutlineArrowLeft} from 'react-icons/ai'
import { Tag } from "../Tag";
import { StarRating } from "../StarRating";






export function Movie ({ data, ...rest }) {


    // Função auxiliar para limitar o número de palavras em uma string
    const limitarPalavras = (texto, limite) => {
        const palavras = texto.split(' ');
        const resumo = palavras.slice(0, limite).join(' ');
        return `${resumo}...`;
    }

    const descricaoResumida = limitarPalavras(data.description, 50);


    return(
        <Container {...rest}>

            

            <h1>{data.title}</h1>
            <div>

                {
                    data.rating &&                    
                    <div>
                        {
                            <StarRating nota={data.rating} tamanho={18} />
                        }
                    </div>                    
                }
            </div>

            <p>
                {descricaoResumida} 
            </p>  


            {
                data.movie_tags &&
                <footer>
                    {
                        data.movie_tags.map( tag =>  <Tag key={String(tag.id)} title={tag.name} />)
                        
                    }
                </footer>
            }

        </Container>
    )
}