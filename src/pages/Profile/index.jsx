import { FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';



export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                <ButtonText title="Voltar"/> 
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/Eduardo-Jordao.png" alt="Foto do usuario" />


                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />

                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser} 
                />
                <br></br>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail} 
                />
                <br></br>
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock} 
                />
                <br></br>
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock} 
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}