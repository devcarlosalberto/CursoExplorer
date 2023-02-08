import { Container, Content, Top, Sections } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <Top>
                    <h2>Meus filmes</h2>
                    <Link to="/newMovie">
                        <Button
                            icon={FiPlus}
                            title="Adicionar filme"
                            size="20.7rem"
                        />
                    </Link>
                </Top>
                <Sections>
                    <Section
                        title="Interestellar"
                        text="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se.."
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "1", name: "Família" },
                        ]}
                    />

                    <Section
                        title="Interestellar"
                        text="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se.."
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "1", name: "Família" },
                        ]}
                    />

                    <Section
                        title="Interestellar"
                        text="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se.."
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "1", name: "Família" },
                        ]}
                    />

                    <Section
                        title="Interestellar"
                        text="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se.."
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "1", name: "Família" },
                        ]}
                    />
                </Sections>
            </Content>
        </Container>
    )
}
