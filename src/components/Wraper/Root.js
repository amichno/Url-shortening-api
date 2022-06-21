import React from "react";
import SectionHeader from '../Header/sectionHeader';
import Menu from "../Menu/menu";
import SectionUrl from "../SectionUrl/SectionUrl";
import SectionDescription from "../SectionDescription/sectionDescription";
import { caption } from "../../Data/caption";
import { description } from "../../Data/description";
import { Wraper } from "./root.styles";
import SectionAdvantages from "../SectionAdvantages/sectionAdvantages.component";
import Footer from "../Footer/footer.component";
import BoostLinks from "../BoostLinks/boostLinks.component";
import { useEffect, useState } from "react";



const Root = () =>
{
        const [inputField, setInputField] = useState('');
        const [links, setLinksList] = useState([]);
        const [PleaseAddLink, showPleaseAddLink] = useState('false');
    
        return(
            <Wraper>
                <Menu />
                <SectionHeader caption={caption}/>
                <SectionUrl showHidePleaseAddLink={PleaseAddLink}/>
                <SectionDescription description={description}/>   
                <SectionAdvantages />
                <BoostLinks />
                <Footer />
            </Wraper>
        )
    

        

}

export default Root;