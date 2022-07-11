import { BurgerWraper, MobileMenu } from "./burgerMenu.styles";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Login, SignIn } from "../Menu/menu.styles";
import { menu } from "../../Data/menu";


const BurgerMenu = () =>{

    return(
        <BurgerWraper>
            <FontAwesomeIcon icon={faBars} 
                             size={"2x"}/>
            <MobileMenu>
               
            </MobileMenu>
        </BurgerWraper>
    )

}

export default BurgerMenu;