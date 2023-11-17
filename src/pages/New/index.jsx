import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Container } from "./styles";
import { AiOutlineArrowLeft} from 'react-icons/ai'



export function New(){
    return(
        <Container>
            <Header />

            <main>
                <ButtonText icon={AiOutlineArrowLeft} title="Voltar" /> 
            </main>

        </Container>
    )
}