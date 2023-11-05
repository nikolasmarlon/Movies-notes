import { ButtonContainer } from "./styles";


export function Button ({title, icon: Icon, loading = false, ...rest}){
    return(
        <ButtonContainer type="button" disabled={loading} {...rest}>
            {Icon && <Icon size={16} />}
            {loading? 'Carregando...' : title}
        </ButtonContainer>
    )
}