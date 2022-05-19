import styled from "styled-components";

export const UrlWrapper = styled.div`
    width:80%;
    height: 7rem;
    background-color: hsl(255, 11%, 22%);
    background-image: url("../../images/bg-boost-desktop.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    flex-wrap: wrap;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;

export const Input = styled.input`
    height: 3rem;
    width: 60%;
    padding-left: 0.5rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-weight: 700;
    color: hsl(257, 7%, 63%);
    margin: 0.25rem auto;
    border: none;
    &:focus{
        outline: none;
    }
`;

export const ButtonShorten = styled.button`
    width: 10rem;
    height: 3rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-color: hsl(180, 66%, 49%);
    color:white;
    border: none;
    margin: 0.25rem auto;
    font-weight: 700;
`;
