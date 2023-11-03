import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { DivContainer } from "./styles";


export function MoviePreview(){
    return(
        <DivContainer>

            <Header />
            
            <h2>MoviePreview</h2>
            <Button title="Enviar" loading />
        </DivContainer>
    )
}