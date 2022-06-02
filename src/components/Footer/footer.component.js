import { Logo } from "../Menu/menu.styles";
import { FooterWraper } from "./footer.styles";
import {ReactComponent as LogoShortly} from "../../images/logo.svg"

const Footer = () =>{
    return(
        <FooterWraper>
            <LogoShortly fill="#FFFFFF" alt="Logo"/>

        </FooterWraper>
    )
}

export default Footer;