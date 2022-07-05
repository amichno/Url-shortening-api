
import { UrlWrapper, Input, ButtonShorten, AddLink } from "./sectionUrl.styles";



const SectionUrl = (props)=>{
    const showHide = props.showHidePleaseAddLink;
    //console.log(showHide);
    return(
        <UrlWrapper className={showHide}>
            <Input className={showHide} type="text" placeholder="Shorten a link here..." onChange={props.onChange}></Input>
            <ButtonShorten isHalf={false} idDark={false} onClick={props.onClick}>Shorten It!</ButtonShorten>
        </UrlWrapper>
    )
}

export default SectionUrl; 