import { SpanContainer } from "./styles";


export function Tag({ title , ...rest}){
    return(
        <SpanContainer {...rest}>
            {title}
        </SpanContainer>
    )
}