import { Container } from "./styles";
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle, AiOutlineArrowLeft} from 'react-icons/ai'
import { Tag } from "../Tag";
import { StarRating } from "../StarRating";

export function Movie ({ data, ...rest }) {
    return(
        <Container>

            

            <h1>{data.title}</h1>
            <div>

                {
                    data.note &&                    
                    <div>
                        {
                            <StarRating nota={data.note} tamanho={18} />
                        }
                    </div>                    
                }
            </div>

            <p>
                {data.description}
            </p>  


            {
                data.tags &&
                <footer>
                    {
                        data.tags.map( tag =>  <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

        </Container>
    )
}