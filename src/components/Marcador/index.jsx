import { Container } from "./styles";
import { FiPlus, FiX } from 'react-icons/fi'


// as propriedados sao passadas separadas, pq cada tag dentro do componente recebe uma propriedade( button o onclick e input o value)
export function Marcador({ isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input type="text"
            value={value}
            readOnly={!isNew}
            {...rest} />

            <button type="button" onClick={onClick}>{isNew ? <FiPlus/> : <FiX/>}</button>
        </Container>
    )
}