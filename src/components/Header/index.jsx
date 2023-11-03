import { HeaderContainer, Profile, Search } from "./styles";
import { } from 'react-icons/ri'


export function Header (){
    return(
        <HeaderContainer>
            <Search type="search" placeholder="Pesquise pelo título" />

            <Profile>
                <div>
                    <strong>Nikolas Marlon</strong>
                    <button>sair</button>
                </div>
                <img src="https://github.com/nikolasmarlon.png"  alt="" />
            </Profile>
        </HeaderContainer>
    )
}