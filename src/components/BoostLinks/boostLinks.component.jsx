import { GetStartedButton } from "../Header/sectionHeader.styles"
import { Title } from "../SectionDescription/sectionDescription.styles";
import { BoostLinksWraper} from "./boostLinks.styles"

const BoostLinks = () =>{
    return(
        <BoostLinksWraper>
            <Title isWhite={true}>Boost your links today</Title>
            <GetStartedButton>Get Started</GetStartedButton>
        </BoostLinksWraper>
    )
}

export default BoostLinks;