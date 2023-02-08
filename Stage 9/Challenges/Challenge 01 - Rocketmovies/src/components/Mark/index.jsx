import { FiX } from "react-icons/fi"

import { Container } from "./styles"

export function Mark({ name, isNew = false }) {
    return (
        <Container isNew={isNew}>
            {isNew ? (
                <input type="text" placeholder="Novo marcador" />
            ) : (
                <input type="text" value={name} readOnly />
            )}
            <FiX size={22} />
        </Container>
    )
}
