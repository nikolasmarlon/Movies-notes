import { ButtonContainer } from "./styles";


export function ButtonText({ title, ...rest }){
    return(
        <ButtonContainer type="button" {...rest}>
            {title}
        </ButtonContainer>
    )
}