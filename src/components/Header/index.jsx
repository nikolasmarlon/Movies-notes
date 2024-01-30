import { HeaderContainer, Profile, Search } from "./styles";
import { useEffect, useRef } from 'react'; // Importe o useEffect e useRef
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useNavigate } from 'react-router-dom'



export function Header (){

    const { logout, user, updateSearchQuery, search } = useAuth()

    const searchInputRef = useRef(null);

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
        navigate("/")
        updateSearchQuery(e.target.value);
    }


    // Focar no campo de pesquisa quando a página é redirecionada
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [search]);


    return(
        <HeaderContainer>
            <Search  ref={searchInputRef} value={search} type="search" placeholder="Pesquise pelo título" onChange={handleSearchChange} />

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