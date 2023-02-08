import { Container, Form, Background } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Faça seu login</h2>

                <Input icon={FiMail} placeholder="E-mail" />

                <Input icon={FiLock} placeholder="Senha" />

                <Button title="Entrar" type="submit" />

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background />
        </Container>
    )
}
