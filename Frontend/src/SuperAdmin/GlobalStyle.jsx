import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    h2{
        font-size: 20px;
    }
    body{
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a{
        text-decoration: none;
    }

    button, input, textarea{
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }

`;