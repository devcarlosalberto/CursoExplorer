import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;
    
    margin-top: 1.6rem;
    border-radius: 1rem;
    padding: 0 1.6rem;

    border: 0;

    font-weight: 500;
    
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    &:disabled {
        opacity: (0.5);
    }

    &:hover {
        filter: brightness(0.9);
    }
`;