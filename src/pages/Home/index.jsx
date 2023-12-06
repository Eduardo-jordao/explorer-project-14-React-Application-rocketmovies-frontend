import { Container, Content } from "./styles";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Movie } from '../../components/Movie';


export function Home() {
    return (
        <Container>
            <Header />

            <main>
            <Content>
            <h1>Meus filmes</h1>
            <Button title="+ Adicionar filme"/>
            </Content>
            <Movie data={{
                title: 'Interestellar',
                tags: [
                    { id: '1', name: 'Ficção científica'},
                    { id: '2', name: 'Drama'},
                    { id: '3', name: 'Familia'},
                ]    
            }}
            />
            <Movie data={{
                title: 'Interestellar',
                tags: [
                    { id: '1', name: 'Ficção científica'},
                    { id: '2', name: 'Drama'},
                    { id: '3', name: 'Familia'},
                ]    
            }}
            />
            <Movie data={{
                title: 'Interestellar',
                tags: [
                    { id: '1', name: 'Ficção científica'},
                    { id: '2', name: 'Drama'},
                    { id: '3', name: 'Familia'},
                ]    
            }}
            />
            <Movie data={{
                title: 'Interestellar',
                tags: [
                    { id: '1', name: 'Ficção científica'},
                    { id: '2', name: 'Drama'},
                    { id: '3', name: 'Familia'},
                ]    
            }}
            />
            </main>
            
        </Container>
    );
}