import styled from "styled-components";

export const SectionDes = styled.div`
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -3.5rem;
    background-color: hsla(0, 0%, 75%, 0.5);
`;


export const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    height: fit-content;
    color: ${props => props.isWhite? "hsl(0,0%,100%)": "hsl(100%, 0, 0)"}
`;

export const Desc = styled.div`
    font-size: 1rem;
    max-height: fit-content;
    width:50%;
    text-align: center;
`;

export const SectionList = styled.div`
    width:100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const LinkList = styled.ul`
    list-style: none;
    width: 80%;
    margin: auto;
    margin-bottom:1rem;
`;

export const LinkListItem = styled.li`
    width:100%;
    background-color: hsl(0,0%,100%);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.5rem;
    display: flex;
    align-content: space-between;
    align-items: center;
`;

export const Paragraph = styled.p`
    flex:4;
    text-align: ${props => props.isRight? 'right':'left'};
    padding-right: 1rem;
    color: ${props=>props.isBlue?"hsl(180, 66%, 49%)":"black"}
`;

