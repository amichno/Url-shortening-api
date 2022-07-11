import styled from "styled-components";

export const AdvantagesSection = styled.div`
    width:100%;
    min-height:500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 2rem;
    background-color: hsla(0, 0%, 75%, 0.5);
    flex-wrap: wrap;
    max-height: fit-content;
`;

export const Adv = styled.div`
    flex: 1;
    margin: 1rem 1rem;
    max-height:400px;
    max-width: 400px;
    background-color: white;
    position: relative;
    max-height: fit-content;
    
    .Icon{
        background-color: hsl(255, 11%, 22%) ;
        z-index: 5;
        position: absolute;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        margin-top: -35px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5%;
        img{
           width: 60%;
           height: 60%;
        }
        @media screen and (max-width: 900px) {
           margin-left: 40%;
            
        }
    }
    .TextAdv{
        padding: 2rem 2rem;
        overflow: auto;
    }
    
    p{
        padding-top: 2rem;
        overflow: auto;
    }

    @media screen and (max-width: 620px) {
            text-align:center;
            
        }
    
`;