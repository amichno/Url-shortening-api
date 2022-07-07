import styled from "styled-components";


export const SectionMenu = styled.div`
    width:100%;
    display: flex;
    margin-top: 1rem;
    color: hsl(257, 27%, 26%);
    align-items: baseline;
`;

export const Logo = styled.div`
    width:121px;
    flex:1;
    height: 33px;
    background-image: url('../../images/logo.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 1rem;
`;

export const WraperMenu = styled.div`
    //width:100%;
    display: flex;
    flex:7;
    align-items: baseline;
`;

export const MenuList = styled.ul`
   align-items: flex-start;
   @media (max-width:620px)
    {
        color: white;
        display: flex;
        flex-direction: column;
        z-index: 1000;
        width: 80vw;
        height: 80vh;
        background-color: hsl(257, 27%, 26%);
        position: absolute;
        right: 10%;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        justify-content:center;
        align-items: center;
    }


`;

export const MenuItem = styled.li`
    width: ${props=>props.isLogin?"fit-content%":"fit-content"};
    list-style: none;
    display: inline-block;
    margin-left: ${props=>props.isLogin?"30%":"1rem"};
    margin-right:  ${props=>props.isLogin?"0":"1rem"};;
    color: hsl(257, 27%, 26%);
    @media (max-width:620px){
        color: white;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
    }
`;



export const Login = styled.div`
    width: 3rem;
    margin-left: auto;
    margin-right: 0rem;
    @media (max-width:620px){
        color: white;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
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
    margin-right: 0rem;
    align-content: flex-end;
    cursor: pointer;
    &:hover{
        background-color: hsla(180, 66%, 49%, 0.5);
    }

`;

