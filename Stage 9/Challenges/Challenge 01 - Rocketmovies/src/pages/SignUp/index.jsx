import { Container, Form, Background } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Crie sua conta</h2>

                <Input icon={FiUser} placeholder="Nome" />

                <Input icon={FiMail} placeholder="E-mail" />

                <Input icon={FiLock} placeholder="Senha" />

                <Button title="Cadastrar" type="submit" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

            <Background />
        </Container>
    )
}
