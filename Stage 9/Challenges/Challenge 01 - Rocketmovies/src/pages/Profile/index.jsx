import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <TextButton icon={FiArrowLeft} title="Voltar" />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/devcarlosalberto.png"
                        alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome de usuário"
                    type="text"
                    icon={FiUser}
                />
                <Input placeholder="E-mail" type="text" icon={FiMail} />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input placeholder="Nova senha" type="password" icon={FiLock} />

                <Button title="Salvar" type="submit" />
            </Form>
        </Container>
    )
}
