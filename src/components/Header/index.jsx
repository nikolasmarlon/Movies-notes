import { HeaderContainer, Profile, Search } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'



export function Header (){

    const { logout, user, updateSearchQuery, search } = useAuth()


    // atualiza a URl do avatar
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    // lidar com a pesquisa
    const handleSearchChange = (e) => {
        updateSearchQuery(e.target.value);
    }


    return(
        <HeaderContainer>
            <Search type="search" placeholder="Pesquise pelo título" onChange={handleSearchChange} />

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