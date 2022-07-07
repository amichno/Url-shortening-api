import styled from "styled-components";

export const BurgerWraper = styled.div`
    @media screen and (max-width: 680px){
        width: 2rem;
        height:2rem;
        margin-left: auto;
    }
    @media (min-width:681px) {
        display: none;  
    }   
`;

export const MobileMenu =styled.div`
    width: 80vw;
    height: 80vh;
    background-color: hsl(257, 27%, 26%);
    position: absolute;
    right: 10%;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;

`;