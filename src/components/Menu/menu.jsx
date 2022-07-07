import { menu } from "../../Data/menu";
import {SectionMenu, Logo, MenuList, MenuItem, Login, SignIn} from "./menu.styles";
import BurgerMenu from "../BurgerMenu/burgerMenu";


const Menu = () =>{

    return(
        <SectionMenu>
            <Logo></Logo>
            <MenuList>
                {menu.map((item,id) =><MenuItem key={id}>{item}</MenuItem>)}
            </MenuList>
            <Login>Login</Login>
            <SignIn>Sign in</SignIn>
            <BurgerMenu />
        </SectionMenu>
    )

}

export default Menu;