import React from "react";
import styled from "styled-components";
import sectionHeader from '../Header/sectionHeader';
import Menu from "../Menu/menu";

const Wraper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 375px ){
        width: 100vw;
        height: 100%;
    }
    @media (min-width: 375px) and (max-width: 992px){
        width: 100vw;
        height: 100%;
    }
    @media (min-width: 992px) and (max-width: 1440px) {
        width: 1440px;
        height: 100%;
    }
`;

class Root extends React.Component{

    render(){
        return(
            <Wraper>
                <Menu />
                <sectionHeader />
            </Wraper>
        )
    }

}

export default Root;