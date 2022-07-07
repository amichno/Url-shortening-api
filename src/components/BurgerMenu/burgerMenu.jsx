import { BurgerWraper, MobileMenu } from "./burgerMenu.styles";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const BurgerMenu = () =>{

    return(
        <BurgerWraper>
            <FontAwesomeIcon icon={faBars} 
                             size={"2x"}/>
            <MobileMenu />
        </BurgerWraper>
    )

}

export default BurgerMenu;