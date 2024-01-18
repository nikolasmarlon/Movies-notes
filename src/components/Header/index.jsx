import { HeaderContainer, Profile, Search } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useNavigate } from 'react-router-dom'



export function Header (){

    const { logout, user, updateSearchQuery, search } = useAuth()


    const navigate = useNavigate()


    // Lidar com logout
    function handleLogout(){
        navigate("/")
        logout()
    }


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
                    <button onClick={handleLogout}>sair</button>
                </div>
                <img src={avatarUrl}  alt={user.name} />
            </Profile>
        </HeaderContainer>
    )
}