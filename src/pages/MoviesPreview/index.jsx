import { Button } from "../../components/Button";
import { DivContainer } from "./styles";


export function MoviePreview(){
    return(
        <DivContainer>
            <h2>MoviePreview</h2>
            <Button title="Enviar" loading />
        </DivContainer>
    )
}