import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    margin-right: .6rem;
    padding: .5rem 1.4rem;

    border-radius: .5rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;