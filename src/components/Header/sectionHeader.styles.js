import styled from "styled-components";


export const Header = styled.div`
    width:100%;
    height: 522px;
    display: flex;
    padding-top: 2rem;
    align-items: center;

    @media (max-width: 376px ){
        display: flex;
        flex-direction: column-reverse;
        height: fit-content;
        justify-content: center;
    }
    @media (min-width: 376px) and (max-width: 992px){
        flex-direction: column-reverse;

    }
`;

export const HeaderText = styled.div`

    width: 50%;
    height: 100%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 376px ){
        width: 90%;
    }
    @media (min-width: 376px) and (max-width: 992px){
        width: 100%;
       
    }
`;

export const Caption = styled.p`
    font-size: 6vw;
    font-weight: 700;
    width:100%;
    max-height: 20vw;
    min-height: 6vw;
`;

export const Text = styled.p`
    font-size: 1.5vw;
    height: 5rem;
    width: 100%;
    padding-right: 3rem;
    min-height: fit-content;
    color:hsl(257, 27%, 26%);
    @media (min-width: 376px) and (max-width: 992px){
        font-size: 2vw;
        
    }
`;

export const GetStartedButton = styled.button`
    width:7rem;
    height: 2rem;
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    background-color: hsl(180, 66%, 49%);
    color: white;
    font-weight: 700;
    @media (min-width: 376px) and (max-width: 992px){ 
       margin-bottom: 10%;

    }
`;

export const Banner = styled.div`
    max-height: 100%;
    height: 100%;
    width:50%;
    overflow: hidden;
    @media (max-width: 375px ){
        width: 100%;   
        height:50%; 
    }

    @media (min-width: 376px) and (max-width: 992px){
       flex-direction: column-reverse;
       width:100%;
       height:50%; 
       margin-bottom: 10%;
    }

