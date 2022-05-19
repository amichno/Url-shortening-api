import styled from "styled-components";
import { menu } from "../../Data/menu";

const MenuList = styled.ul`
   // display: inline-block;
   align-items: flex-start;
`;

const MenuItem = styled.li`
    list-style: none;
    display: inline-block;
    margin-left: 1rem;
    margin-right: 1rem;
    color: hsl(257, 27%, 26%);
`;

const Logo = styled.div`
    width:121px;
    height: 33px;
    background-image: url('../../images/logo.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 1rem;
`;

const SectionMenu = styled.div`
    width:100%;
    display: flex;
    margin-top: 1rem;
    color: hsl(257, 27%, 26%);
    align-items: baseline;
`;

const Login = styled.div`
    width: 5rem;
    margin-left: auto;
`;

const SignIn = styled.div`
    width: 5rem;  
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    background-color: hsl(180, 66%, 49%);
    text-align: center;
    color: white;
    padding: 0.5rem 0.5rem;
`;

const Menu = () =>{

    return(
        <SectionMenu>
            <Logo></Logo>
            <MenuList>
                {menu.map((item,id) =><MenuItem key={id}>{item}</MenuItem>)}
            </MenuList>
            <Login>Login</Login>
            <SignIn>Sign in</SignIn>
        </SectionMenu>
    )

}

export default Menu;