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
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        -webkit-font-smoothing: antialiased;
    }

    a,
    body,
    input,
    button,
    textarea {
        font-family: "Roboto Slab";
        text-decoration: none;
        border-radius: 1rem;
        border: none;
    }
`;