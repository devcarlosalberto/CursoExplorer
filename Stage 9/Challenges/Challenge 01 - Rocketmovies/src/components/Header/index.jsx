import { Container, Profile } from "./styles"
import { Input } from "../../components/Input"

import { Link } from "react-router-dom"

export function Header() {
    return (
        <Container>
            <Link to="/">RocketMovies</Link>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>Carlos Alberto</strong>
                    </Link>
                    <a href="#">sair</a>
                </div>
                <Link to="/profile">
                    <img
                        src="https://github.com/devcarlosalberto.png"
                        alt="Foto do usuário"
                    />
                </Link>
            </Profile>
        </Container>
    )
}
