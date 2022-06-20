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
                    <LinksListItem isFirst={true}>Features</LinksListItem>
                    <LinksListItem>Link Shortening</LinksListItem>
                    <LinksListItem>Branded Links</LinksListItem>
                    <LinksListItem>Analytics</LinksListItem>
               </LinksList>
            </LinksWraper> 
            <LinksWraper>
                <LinksList>
                        <LinksListItem isFirst={true}>Features</LinksListItem>
                        <LinksListItem>Link Shortening</LinksListItem>
                        <LinksListItem>Branded Links</LinksListItem>
                        <LinksListItem>Analytics</LinksListItem>
                </LinksList> 
            </LinksWraper> 
            <Social>
                <LogoFacebook   alt="logo Facebook"/>
                <SMImages fill="#FFFFFF" src={TwitterPath}></SMImages>
                <LogoPinterest   className="LightBlueOnHover" alt ="Logo Pinterest" />
                <LogoInstagram   className="LightBlueOnHover" alt = "logo Instagram"/>
            </Social>
        </FooterWraper>
    )
}

export default Footer;