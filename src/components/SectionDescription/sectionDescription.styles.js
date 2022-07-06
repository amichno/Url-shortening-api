import styled from "styled-components";

export const SectionDes = styled.div`
    width: 100%;
    min-height: 25rem;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -3.5rem;
    background-color: hsla(0, 0%, 75%, 0.5);
    max-height: 40rem;
`;


export const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    min-height: 3rem;
    color: ${props => props.isWhite? "hsl(0,0%,100%)": "hsl(100%, 0, 0)"};
    max-height: 8rem;
    text-align: center;

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
    max-height: 15rem;
    overflow-y:auto;
    margin-top:3rem;
    margin-bottom: 1.5rem;
    scrollbar-width: thin;
            ::-webkit-scrollbar {
            width: 5px;
            }
            ::-webkit-scrollbar-track {
            background: transparent;
            }
            ::-webkit-scrollbar-thumb {
            background-color: rgba(155, 155, 155, 0.5);
            border-radius: 20px;
            border: transparent;
            }
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
    box-shadow: 0px 2px 10px hsla(220, 16%, 50%, 0.5);
    margin-left: 0.5%;
    @media (max-width: 650px) {
        flex-direction: column;
        align-items: flex-start;
        
    }
`;

export const Paragraph = styled.p`
    flex:4;
    text-align: ${props => props.isRight? 'right':'left'};
    padding-right: 1rem;
    color: ${props=>props.isBlue?"hsl(180, 66%, 49%)":"black"};
    overflow: auto;
`;

