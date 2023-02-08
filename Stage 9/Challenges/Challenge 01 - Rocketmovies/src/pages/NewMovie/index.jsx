import {
    Container,
    Content,
    Form,
    TwoCol,
    MarksWrapper,
    Marks,
    Buttons,
} from "./styles"
import { ButtonDark } from "../../components/ButtonDark"
import { TextButton } from "../../components/TextButton"
import { Textarea } from "../../components/Textarea"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Mark } from "../../components/Mark"

import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

export function NewMovie() {
    return (
        <Container>
            <Header />
            <Content>
                <Link to="/">
                    <TextButton icon={FiArrowLeft} title="Voltar" />
                </Link>

                <h1>Novo filme</h1>

                <Form>
                    <TwoCol>
                        <Input type="text" placeholder="Título" />
                        <Input type="text" placeholder="Sua nota (de 0 a 5)" />
                    </TwoCol>

                    <Textarea rows={10} placeholder="Observações" />

                    <MarksWrapper>
                        <span>Marcadores</span>

                        <Marks>
                            <Mark name="React" />
                            <Mark name="React" isNew />
                        </Marks>
                    </MarksWrapper>

                    <Buttons>
                        <ButtonDark title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </Buttons>
                </Form>
            </Content>
        </Container>
    )
}
