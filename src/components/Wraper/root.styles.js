import styled from "styled-components";
/* autoprefixer grid: autoplace */

export const Wraper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 375px ){
        width: 100vw;
        height: 100%;
    }
    @media (min-width: 375px) and (max-width: 992px){
        width: 98vw;
        height: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @media (min-width: 992px) and (max-width: 1440px) {
        width: 98vw;
        height: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1440px){
        max-width: 1440px;
        height: 100%;
        margin: 1rem auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
