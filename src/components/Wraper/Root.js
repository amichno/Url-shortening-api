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
        const [PleaseAddLink, setPleaseAddLink] = useState('Hide');
        const [ShortLinkPressed, setShortLinkPressed] = useState('false'); 

     const onClickHandler = () =>{
        fetch(`https://api.shrtco.de/v2/shorten?url=${inputField}`).
            then(response => response.json()).then( JSONresp =>{
                    const data = JSON.stringify(JSONresp);
                    const dataJS = JSON.parse(data);
                    console.log(dataJS.result.short_link);
            });
       
     }

     const onSearchChange = (event) =>{
        setInputField(event.target.value);
     }

        return(
            <Wraper>
                <Menu />
                <SectionHeader caption={caption}/>
                <SectionUrl showHidePleaseAddLink={PleaseAddLink} onClick={onClickHandler} onChange={onSearchChange}/>
                <SectionDescription description={description}/>   
                <SectionAdvantages />
                <BoostLinks />
                <Footer />
            </Wraper>
        )
    

        

}

export default Root;