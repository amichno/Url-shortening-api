import styled from "styled-components";

export const MenuList = styled.ul`
   align-items: flex-start;
`;

export const MenuItem = styled.li`
    list-style: none;
    display: inline-block;
    margin-left: 1rem;
    margin-right: 1rem;
    color: hsl(257, 27%, 26%);
`;

export const Logo = styled.div`
    width:121px;
    height: 33px;
    background-image: url('../../images/logo.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 1rem;
`;

export const SectionMenu = styled.div`
    width:100%;
    display: flex;
    margin-top: 1rem;
    color: hsl(257, 27%, 26%);
    align-items: baseline;
`;

export const Login = styled.div`
    width: 5rem;
    margin-left: auto;
`;

export const SignIn = styled.div`
    width: 5rem;  
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    background-color: hsl(180, 66%, 49%);
    text-align: center;
    color: white;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    &:hover{
        background-color: hsla(180, 66%, 49%, 0.5);
    }
`;

