
import { Container, Profile, Logout } from "./styles";

import { Input } from '../Input';

export function Header(){
    return(
        <Container>
            <div>RocketMovies</div>
            
            <Input placeholder="Pesquisar pelo título"/>
                    
            
            <Profile to="/profile">

                <div>
                    <strong>Eduardo Jordao</strong>
                    <Logout>
                        <span>Sair</span>
                    </Logout>
                </div>
                <img 
                src="https://github.com/Eduardo-jordao.png"
                alt="Foto de perfil do usuario"
                />
            </Profile>


        </Container>
    );
}