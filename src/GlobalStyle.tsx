import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        font-family: 'Poppins', sans-serif;
    }
    button {
        cursor: pointer;
        border: none;
        outline: none;
    }
`
