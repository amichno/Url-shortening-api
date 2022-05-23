import {ReactComponent as HeaderIllustration} from '../../images/illustration-working.svg'
import { Header, HeaderText, Caption, Text, GetStartedButton, Banner } from './sectionHeader.styles';

const SectionHeader = (props) =>{
    const caption=props.caption[0];
    return(
        <Header>
            <HeaderText>
                <Caption>{caption.caption}</Caption>
                <Text>{caption.text}</Text>
                <GetStartedButton>{caption.banner}</GetStartedButton>
            </HeaderText>
            <Banner >
                <HeaderIllustration />
            </Banner>
        </Header>
    )
}

export default SectionHeader;


