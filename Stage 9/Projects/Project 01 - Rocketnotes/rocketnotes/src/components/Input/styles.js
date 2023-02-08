import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        width: 100%;
        height: 5.6rem;

        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

    }

    > svg {
        margin-left: 1.6rem;
    }
`