import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    *{
        font-family: 'Poppins';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: $fontSize;
        font-family: 'Poppins', sans-serif;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        min-width:375px;
    }
`