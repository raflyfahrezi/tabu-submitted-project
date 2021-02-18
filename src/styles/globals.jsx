import { createGlobalStyle } from 'styled-components'

const globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }

    ::-webkit-scrollbar-thumb {
    background: #fca3cc; 
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    } 
`

export default globals
