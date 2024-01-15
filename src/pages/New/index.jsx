import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";

import { api } from '../../services/api';


import { Container, Form } from "./styles";

export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie() {
        if (!title) {
            return alert("Digite o titulo do filme")
        }
        if (!rating) {
            return alert("Digite a nota do filme")
        }
        if (!description) {
            return alert("Digite um resume do filme")
        }
        if (newTag) {
            return alert("Certifique-se de que todas as Tags foram adicionadas")
        }

        await api.post('/notes', {
            title,
            rating,
            description,
            tags
        })

        alert("Filme cadastrado com sucesso!");
        navigate("/");
    }


    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <Link to="/">
                    <ButtonText title="Voltar"/>
                    </Link>
                    <header>
                        <h1>Novo Filme</h1>
                    </header>

                    <div>
                    <Input 
                    placeholder="Título"
                    onChange={e => setTitle(e.target.value)}
                    />
                    <Input 
                    placeholder="Sua nota (de 0 a 5)"
                    onChange={e => setRating(e.target.value)}
                    />

                    </div>
                    <Textarea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <MovieItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                        <MovieItem 
                        isNew 
                        placeholder="Novo marcador" 
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                        />

                        </div>

                    </Section>

                    <div className="buttons">
                        <button className="delete">Excluir filme</button>
                        <Button 
                        title="Salvar filme"
                        onClick={handleNewMovie}
                        />
                    </div>
                </Form>
            </main>
        </Container>
    )
}