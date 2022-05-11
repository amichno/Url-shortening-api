import styled from "styled-components";
import { menu } from "../../Data/menu";

const menuList = styled.ul`
    display: inline-block;
`;

const menuItem = styled.li`
    list-style: none;

`;

const logo =styled.div`
    width:121px;
    height: 33px;
    background-image: url('../../images/logo.svg');
`;

const Menu = () =>{

    return(
        <>
        <logo></logo>
        <menuList>
            {menu.map(item =>
                <menuItem>{item}</menuItem>)}
        </menuList>
        </>
    )

}

export default Menu;