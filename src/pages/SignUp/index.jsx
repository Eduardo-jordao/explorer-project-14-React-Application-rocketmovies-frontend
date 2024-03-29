import { useState } from "react";
import { Container, Form, Background } from "./styles";
import {  FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
          return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password }).then( () => {
            alert("Usuario cadastrado com sucesso")
            navigate("/");
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.massage);
            } else {
                alert("Nao foi possivel cadastrar")
            }
        });

    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser} 
                    onChange={e => setName(e.target.value)}
                />
                <br></br>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)} 
                />
                <br></br>
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock} 
                    onChange={e => setPassword(e.target.value)}
                />
                <br></br>
                <Button title="Cadastrar" onClick={handleSignUp}/>
                
                <div className="link">
                <Link to="/">
                <ButtonText title="Voltar para o login"/>
                </Link>
                </div>
            </Form>

            <Background />
        </Container>
    );
}