import React from "react";
import SectionHeader from '../Header/sectionHeader';
import Menu from "../Menu/menu";
import SectionUrl from "../SectionUrl/SectionUrl";
import SectionDescription from "../SectionDescription/sectionDescription";
import { caption } from "../../Data/caption";
import { description } from "../../Data/description";
import { Wraper } from "./root.styles";
import SectionAdvantages from "../SectionAdvantages/sectionAdvantages.component";



class Root extends React.Component{
    render(){
        return(
            <Wraper>
                <Menu />
                <SectionHeader caption={caption}/>
                <SectionUrl />
                <SectionDescription description={description}/>   
                <SectionAdvantages />
            </Wraper>
        )
    }

}

export default Root;