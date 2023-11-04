import { SectionContainer } from "./styles";


export function Section ({ title, children}) {
    return(
        <SectionContainer>
            {title}
            {children}
        </SectionContainer>
    )
}