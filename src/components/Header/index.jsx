import { HeaderContainer, Profile, Search } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'



export function Header (){

    const { logout, user } = useAuth()


    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <HeaderContainer>
            <Search type="search" placeholder="Pesquise pelo título" />

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={logout}>sair</button>
                </div>
                <img src={avatarUrl}  alt={user.name} />
            </Profile>
        </HeaderContainer>
    )
}