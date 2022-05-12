import styled from "styled-components";
import { caption } from "../../Data/caption";

const Header = styled.div`
    width:100%;
    max-height: 482px;
    height: 482px;
    display: flex;
    padding-top: 2rem;

`;

const HeaderText = styled.div`
    
    flex:1;
    width: 50%;
    height: 100%;
    font-size: 1rem;
`;

const Caption = styled.p`
    font-size: 3rem;
    font-weight: 700;
    //padding-top: 10%;
    width:100%;
    max-height: 30%;
    min-height: 12rem;
`;

const Text = styled.p`
    font-size: 1rem;
    height: 5rem;
    width: 100%;
    padding-right: 3rem;
    min-height: fit-content;
    color:hsl(257, 27%, 26%);
`;

const GetStartedButton = styled.button`

    width:6rem;
    height: 2rem;
    border: none;
`;

const Banner = styled.div`
    flex:1;
    height:3rem;
    max-height: 100%;
    height: 100%;
    background-image: url('../../images/illustration-working.svg');
`;

const SectionHeader = (props) =>{
    const caption=props.caption;
    return(
        <Header>
            <HeaderText>
                <Caption>{caption[0].caption}</Caption>
                <Text>{caption[0].text}</Text>
                <GetStartedButton>{caption[0].banner}</GetStartedButton>
                {console.log(props)}
            </HeaderText>
            <Banner></Banner>
        </Header>
    )
}

export default SectionHeader;


