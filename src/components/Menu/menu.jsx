import { menu } from "../../Data/menu";
import {SectionMenu, Logo, MenuList, MenuItem, Login, SignIn, WraperMenu} from "./menu.styles";
import BurgerMenu from "../BurgerMenu/burgerMenu";



const Menu = () =>{

    return(
        <SectionMenu>
            <Logo></Logo>
            <WraperMenu>
                <MenuList>
                    {menu.map((item,id) =><MenuItem key={id} isLogin={false}>{item}</MenuItem>)}
                </MenuList>
                <Login>Login</Login>
                <SignIn>Sign Up</SignIn>
             </WraperMenu>
           
           
        </SectionMenu>
    )

}

export default Menu;