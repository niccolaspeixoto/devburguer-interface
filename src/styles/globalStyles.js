import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css'

const globalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: ${(props) => props.theme.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

button, a {
    cursor: pointer;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: ${(props) => props.theme.secondWhite};
}

::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.purple};
    border-radius: 10px;
}
`

export default globalStyles;