import styled from "styled-components";
import { caption } from "../../Data/caption";

const Header = styled.div`
    width:100%;
    max-height: 482px;
    height: 482px;
    display: flex;
`;

const HeaderText = styled.div`
    flex:1;
    width: 50%;
    height: 100%;
`;

const Caption = styled.h1`
    width:50%;
`;

const Text = styled.p`
    font-size: 2rem;
`;

const GetStartedButton = styled.button`
`;

const Banner = styled.div`
    flex:1;
    height:3rem;
    max-height: 100%;
    height: 100%;
    background-image: url('../../images/illustration-working.svg');
`;

const SectionHeader = () =>{

    return(
        <Header>
            <HeaderText>
                <Caption>{caption.caption}</Caption>
                <Text>{caption.text}</Text>
                <GetStartedButton>{caption.banner}</GetStartedButton>
            </HeaderText>
            <Banner></Banner>
        </Header>
    )
}

export default SectionHeader;


