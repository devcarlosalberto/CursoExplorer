import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: .8rem;
    border-radius: 1rem;
    padding-right: 1.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "None"};
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

    > button {
        border: none;
        background: none;
    }

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        outline: none;

        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
        background: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;