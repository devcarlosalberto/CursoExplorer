import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    button,
    textarea {
        font-family: "Roboto Slab", serif;
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }

    button,
    a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a:hover {
        filter: brightness(0.9);
    }
`;