import { FooterWraper, LinksWraper, FooterLogo, LinksListItem, LinksList, Social, SMImages } from "./footer.styles";
import {ReactComponent as LogoShortly} from "../../images/logo.svg";
import {ReactComponent as LogoFacebook} from "../../images/icon-facebook.svg";
import {ReactComponent as LogoTwitter} from "../../images/icon-twitter.svg";
import {ReactComponent as LogoPinterest} from "../../images/icon-pinterest.svg";
import {ReactComponent as LogoInstagram} from "../../images/icon-instagram.svg";
import TwitterPath from "../../images/icon-twitter.svg";

const Footer = () =>{
    return(
        <FooterWraper>
            <FooterLogo>
                 <LogoShortly fill="#FFFFFF" alt="Logo"/>
            </FooterLogo>
            <LinksWraper>
               <LinksList>
                    <LinksListItem isFirst={true}>Features</LinksListItem>
                    <LinksListItem>Link Shortening</LinksListItem>
                    <LinksListItem>Branded Links</LinksListItem>
                    <LinksListItem>Analytics</LinksListItem>
               </LinksList>
            </LinksWraper> 
            <LinksWraper>
            <LinksList>
                    <LinksListItem isFirst={true}>Resources</LinksListItem>
                    <LinksListItem>Blog</LinksListItem>
                    <LinksListItem>Developers</LinksListItem>
                    <LinksListItem>Support</LinksListItem>
               </LinksList>
            </LinksWraper> 
            <LinksWraper>
                <LinksList>
                        <LinksListItem isFirst={true}>Company</LinksListItem>
                        <LinksListItem>About</LinksListItem>
                        <LinksListItem>Our Team</LinksListItem>
                        <LinksListItem>Careers</LinksListItem>
                        <LinksListItem>Contact</LinksListItem>
                </LinksList> 
            </LinksWraper> 
            <Social>
                <LogoFacebook  className="LightBlueOnHover" alt="logo Facebook"/>
                <SMImages className="LightBlueOnHover" src={TwitterPath}></SMImages>
                <LogoPinterest   className="LightBlueOnHover" alt ="Logo Pinterest" />
                <LogoInstagram   className="LightBlueOnHover" alt = "logo Instagram"/>
            </Social>
        </FooterWraper>
    )
}

export default Footer;