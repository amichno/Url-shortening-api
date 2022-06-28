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
    display: inline-block;
`;

export const LinkListItem = styled.li`
    
`;
