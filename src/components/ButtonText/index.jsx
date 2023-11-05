import { ButtonContainer } from "./styles";


export function ButtonText({ title, icon: Icon, ...rest }){
    return(
        <ButtonContainer type="button" {...rest}>

            {Icon && <Icon size={16} />}
            {title}
        </ButtonContainer>
    )
}