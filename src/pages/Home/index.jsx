import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { FiPlus } from "react-icons/fi";

import { Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    const handleSearch = async (searchTerm) => {
        setSearch(searchTerm);
      };


    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/notes?title=${search}`)
            setNotes(response.data)
        }

        fetchMovies();
    }, [search])

    function handleDetails(id) {
        navigate(`/details/${id}`)
        
    }

    return (
        <Container>
            <Header onSearch={handleSearch}/>

            <main>
                <Content>
                    <div>
                        <h1>Meus filmes</h1>
                        <NewMovie to="/new">
                            <FiPlus />
                            Adiconar filme
                        </NewMovie>
                    </div>
                    {
                        notes.map(note => (
                            <Movie
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Content>
            </main>
        </Container>
    );
}