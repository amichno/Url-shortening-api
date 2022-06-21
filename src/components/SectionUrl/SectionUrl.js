
import { UrlWrapper, Input, ButtonShorten, AddLink } from "./sectionUrl.styles";



const SectionUrl = (props)=>{
    const showHide = props.showHidePleaseAddLink;
    console.log(showHide);
    return(
        <UrlWrapper isShown={showHide}>
            <Input type="text" placeholder="Shorten a link here..."></Input>
            <ButtonShorten>Shorten It!</ButtonShorten>
        </UrlWrapper>
    )
}

export default SectionUrl; 