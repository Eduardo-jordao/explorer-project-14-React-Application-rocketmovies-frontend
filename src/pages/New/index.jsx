import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";

import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

export function New() {
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
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>

                    </div>
                    <Textarea placeholder="Observações"/>

                    <Section title="Marcadores">
                        <div className="tags">
                        <MovieItem value="React"/>
                        <MovieItem isNew placeholder="Novo marcador" />

                        </div>

                    </Section>

                    <div className="buttons">
                        <button className="delete">Excluir filme</button>
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}