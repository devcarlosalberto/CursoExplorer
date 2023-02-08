import { FiStar } from "react-icons/fi"

import { Container, Note, SectionText, Tags } from "./styles"
import { Tag } from "../../components/Tag"

export function Section({ title, note, text, tags }) {
    return (
        <Container>
            <h2>{title}</h2>

            <Note>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
            </Note>

            <SectionText>{text}</SectionText>

            <Tags>
                {tags.map((tag) => (
                    <Tag name={tag.name} />
                ))}
            </Tags>
        </Container>
    )
}
