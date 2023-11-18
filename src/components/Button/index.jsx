import { ButtonContainer } from "./styles";


export function Button ({title, isNew, icon: Icon, loading = false, ...rest}){
    return(
        <ButtonContainer isNew={isNew} type="button" disabled={loading} {...rest}>
            {Icon && <Icon size={16} />}
            {loading? 'Carregando...' : title}
        </ButtonContainer>
    )
}