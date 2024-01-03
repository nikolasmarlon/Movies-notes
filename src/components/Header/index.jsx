import { HeaderContainer, Profile, Search } from "./styles";

import { useAuth } from "../../hooks/auth";


export function Header (){

    const { logout } = useAuth()
    return(
        <HeaderContainer>
            <Search type="search" placeholder="Pesquise pelo título" />

            <Profile to="/profile">
                <div>
                    <strong>Nikolas Marlon</strong>
                    <button onClick={logout}>sair</button>
                </div>
                <img src="https://github.com/nikolasmarlon.png"  alt="" />
            </Profile>
        </HeaderContainer>
    )
}