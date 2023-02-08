import styled from "styled-components";

export const Container = styled.button`
    font-size: 1.6rem;
    
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

    
    border: none;

    background: none;
`;