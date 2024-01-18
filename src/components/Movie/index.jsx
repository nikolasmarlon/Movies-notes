import { Container } from "./styles";
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle, AiOutlineArrowLeft} from 'react-icons/ai'
import { Tag } from "../Tag";
import { StarRating } from "../StarRating";

export function Movie ({ data, ...rest }) {
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
                {data.description} 
            </p>  


            {
                data.movie_tags &&
                <footer>
                    {
                        data.movie_tags.map( tag =>  <Tag key={tag.id} title={tag.name} />)
                        
                    }
                </footer>
            }

        </Container>
    )
}