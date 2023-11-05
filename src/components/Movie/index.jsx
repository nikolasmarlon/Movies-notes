import { Container } from "./styles";
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle, AiOutlineArrowLeft} from 'react-icons/ai'
import { Tag } from "../Tag";

export function Movie ({ data, ...rest }) {
    return(
        <Container>

            <h1>{data.title}</h1>
            <div>

                {
                    data.note && 
                    <span>
                    { data.note }
                    
                    < AiOutlineStar />
                    
                    </span>

                    
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