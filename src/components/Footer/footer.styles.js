import styled from "styled-components";

export const FooterWraper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: hsl(266, 10%, 14%);
    padding: 2rem 2rem;
    flex-wrap: wrap;
    @media screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterLogo = styled.div`
    flex:2;
    height: 100%;
    padding-left: 10%;
    @media screen and (max-width: 900px){
        padding-left: 0px;
    }
`;


export const LinksWraper = styled.div`
    color: white;
    flex:1;
    @media (max-width: 900px) {
        width: 100%;
        text-align: center; 
    }
`;

export const LinksList = styled.ul`
    list-style: none;
    display: block;
    padding-left:0.5rem;
    padding-right: 0.5rem;
    
`;

export const LinksListItem = styled.li`
    font-weight: ${props => props.isFirst? 700:"normal"};
    padding-bottom: ${props => props.isFirst? "1rem":"0.5rem"};
    font-size: 0.8rem;
    cursor: pointer;
    &:hover{
        color: hsl(180, 66%, 49%);
    }
`;

export const Social = styled.div`
    flex:2;
    display: flex;
    justify-content: space-around;
    padding-right:10%;
    svg{
        fill: white;
        cursor: pointer;
        :hover{
            fill: #00FFFF; 
            color: red;
        }
    }

    @media (max-width: 900px) {
        width: 60%;
        text-align: center; 
        padding-right: 0;
        margin-top: 1rem;
    }
`;

export const SMImages = styled.img`
   width:24px;
   height: 24px;
   fill: #FFFFFF;
   
   :hover{
        fill: #00FFFF;
        cursor: pointer;
        color: green;
   }
`;

