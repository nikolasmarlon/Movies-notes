
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { DivContainer } from "./styles";


export function MoviePreview(){
    return(
        <DivContainer>

            <Header />
            
            <h2>MoviePreview</h2>

            <Tag title="Ficção Científica" />
            <Tag title="Drama" />
            <Tag title="Família" />
            
        </DivContainer>
    )
}