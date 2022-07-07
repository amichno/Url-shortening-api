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
    background-color: pink;
    position: absolute;
    right: 10%;

`;