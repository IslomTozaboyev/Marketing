import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Nunito+Sans:wght@400;600;800;900&family=Poppins:wght@400;600&family=RocknRoll+One&family=Varela+Round&display=swap');


body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    *{
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif !important;
    }

    a, a:hover {
        display: inline-block;
        text-decoration: none;
        color: #000;
    }

    ul{
        list-style: none
    }
    
`;
export default GlobalStyle;
