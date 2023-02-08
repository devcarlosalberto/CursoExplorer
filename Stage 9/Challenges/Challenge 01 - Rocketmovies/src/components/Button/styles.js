import styled from "styled-components"

export const Container = styled.button`
    width: ${({ size }) => size};
    height: 5.2rem;

    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        filter: brightness(0.8);
    }
`
