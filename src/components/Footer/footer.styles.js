import styled from "styled-components";

export const FooterWraper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: hsl(266, 10%, 14%);
    //align-items: center;
    padding: 2rem 2rem;
    flex-wrap: wrap;
`;

export const FooterLogo = styled.div`
    flex:2;
    height: 100%;
    padding-left: 10%;
`;


export const LinksWraper = styled.div`
    color: white;
    flex:1;
`;

export const LinksList = styled.ol`
    list-style: none;
    display: block;
`;

export const LinksListItem = styled.li`
    font-weight: ${props => props.isFirst? 700:"normal"};
    padding-bottom: ${props => props.isFirst? "1rem":"0.5rem"};
    font-size: 0.8rem;
`;

export const Social = styled.div`
    flex:2;
    display: flex;
    justify-content: space-around;
    padding-right:10%;
`;