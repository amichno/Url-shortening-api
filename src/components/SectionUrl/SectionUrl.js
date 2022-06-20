
import { UrlWrapper, Input, ButtonShorten, AddLink } from "./sectionUrl.styles";



const SectionUrl = ()=>{
    return(
        <UrlWrapper>
            <Input type="text" placeholder="Shorten a link here..."></Input>
           
            <ButtonShorten>Shorten It!</ButtonShorten>
        </UrlWrapper>
    )
}

export default SectionUrl;