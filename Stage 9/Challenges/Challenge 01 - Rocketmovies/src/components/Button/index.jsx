import { Container } from "./styles"

export function Button({ title, icon: Icon, size = "100%", ...rest }) {
    return (
        <Container size={size} {...rest}>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}
