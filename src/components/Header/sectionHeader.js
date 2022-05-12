
import styled from "styled-components";

const Header = styled.div`
    width:100%;

`;

const Caption = styled.div`
    width:50%;
`;

const Banner = styled.div`
    height:3rem;
`;

const SectionHeader = () =>{

    return(
        <Header>
            <Caption></Caption>
            <Banner></Banner>
        </Header>
    )
}

export default SectionHeader;


