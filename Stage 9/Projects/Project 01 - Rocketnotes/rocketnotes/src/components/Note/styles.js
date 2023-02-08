import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 10px;

    padding: 2.2rem;
    margin-bottom: 1.6rem;

    > h1 {
        flex: 1;

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 700;
        text-align: left;
    }

    > footer {
        width: 100%;

        display: flex;
        
        margin-top: 2.4rem;
    }
`;