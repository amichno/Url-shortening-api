import { menu } from "../../Data/menu";
import {SectionMenu, Logo, MenuList, MenuItem, Login, SignIn, WraperMenu, Line, BurgerWraper} from "./menu.styles";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Menu = (props) =>{
    const showMobile = props.showMobileMenu

    return(
        <SectionMenu>
            <Logo></Logo>
            <BurgerWraper onClick={props.onClick}>
                <FontAwesomeIcon icon={faBars}  size={"2x"}/>
            </BurgerWraper>
            <WraperMenu style={{display:`${showMobile}`}}>
                <MenuList>
                    {menu.map((item,id) =>
                            <MenuItem key={id} isLogin={false}>{item}</MenuItem>)}
                </MenuList>
                <Line></Line>
                <Login>Login</Login>
                <SignIn>Sign Up</SignIn>
             </WraperMenu>
           
           
        </SectionMenu>
    )

}

export default Menu;