import { Container, Content, Links } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details() {
    return (
        <Container>

            <Header />

            <main>
                <Content>
                    <ButtonText title="Excluir nota" />

                    <h1>
                        Introdução ao React
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit voluptates accusantium itaque consequuntur sequi magnam reiciendis soluta labore hic nihil atque repudiandae sed magni, impedit voluptate, incidunt cum repellat, adipisci quam necessitatibus. Rem incidunt nobis repudiandae blanditiis, neque doloremque fuga explicabo quia voluptatem soluta libero, dolore fugit dolor officia eligendi quae quaerat ipsum eveniet omnis. Aliquid fuga pariatur reiciendis distinctio facere obcaecati fugiat? Error autem itaque quidem quae possimus doloremque perferendis, laboriosam, porro temporibus debitis adipisci tenetur ex quisquam eaque facere velit repellendus nam quis? Ut quis officiis, reiciendis doloribus sint sit quae laudantium dicta ducimus esse fuga nam corrupti quos nulla! Modi rem aliquam cumque, magni eveniet asperiores ratione dignissimos, repellendus ipsum doloremque fugit expedita, eum magnam officia error praesentium voluptatem iste quibusdam commodi maxime. Temporibus, obcaecati. Laudantium velit tempora culpa expedita consequuntur distinctio! Esse, est! Esse eligendi beatae dolorum, natus dolorem iusto temporibus adipisci totam laborum id.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://www.rocketseat.com.br</a></li>
                            <li><a href="#">https://www.rocketseat.com.br</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express" />
                        <Tag title="nodejs" />
                    </Section>

                    <Button title="Acessar" />
                </Content>
            </main>

        </Container>
    );
};