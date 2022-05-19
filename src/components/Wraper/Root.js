import React from "react";
import styled from "styled-components";
import SectionHeader from '../Header/sectionHeader';
import Menu from "../Menu/menu";
import { caption } from "../../Data/caption";
import { description } from "../../Data/description";
import SectionUrl from "../SectionUrl/SectionUrl";
import SectionDescription from "../SectionDescription/sectionDescription";
/* autoprefixer grid: autoplace */

const Wraper = styled.div`
    
    width: 100vw;
    //max-width: 1440px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //margin: 1rem 2rem;
    //margin-left: 2rem;
   // padding-left: 2rem;
    @media (max-width: 375px ){
        width: 100vw;
        height: 100%;
    }
    @media (min-width: 375px) and (max-width: 992px){
        width: 90vw;
       // max-width: 1440px;
        height: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
        //margin-left: auto;
        //margin-right: auto;
    }
    @media (min-width: 992px) and (max-width: 1440px) {
        width: 90vw;
        //max-width: 1440px;
        height: 100%;
        //margin: 1rem auto;
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

class Root extends React.Component{

    render(){
        return(
            <Wraper>
                <Menu />
                <SectionHeader caption={caption}/>
                <SectionUrl />
                <SectionDescription description={description}/>
                
            </Wraper>
        )
    }

}

export default Root;