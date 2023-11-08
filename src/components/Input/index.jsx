import { DivContainer } from "./styles";



export function Input({ icon: Icon, ...rest}){
    return(
        <DivContainer>
            {Icon && <Icon size={20}/>}
            <input {...rest} />
        </DivContainer>
    )
}