
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from "react";
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Input } from '../Input';



export function Header({onSearch = () => {}}){
    const [search, setSearch] = useState("");
    const { signOut, user } = useAuth();
    

    
    
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;



    useEffect(() => {
        onSearch(search);
        }, [search,onSearch])
    
    return(
        
        <Container>
            <div>RocketMovies</div>
            
            
            
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
     
            
                    
            
            <div>
            <Profile to="/profile">

                <div>
                    <strong>{user.name}</strong>
                </div>
                <img 
                src={avatarUrl}
                alt={user.name}
                />
            </Profile>
            <Logout 
                onClick={signOut}
             >
                <span>Sair</span>
            </Logout>
            </div>


        </Container>
        
    );
}