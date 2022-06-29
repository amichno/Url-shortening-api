import React, { useEffect } from "react";
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
import { useState } from "react";



const Root = () =>
{
        const [inputField, setInputField] = useState('');
        const [shortLink, setLinksList] = useState('');
        const [pleaseAddLink, setPleaseAddLink] = useState('Hide');
        const lista = [{"jeden":"short_link"}, {"dwa": "short_link2"}, {"trzy":"short_link3"}];

     const onClickHandler = () =>
        {
             fetch(`https://api.shrtco.de/v2/shorten?url=${inputField}`).
             then(response => response.json()).
             then( JSONresp =>{
                    const data = JSON.stringify(JSONresp);
                    const dataJS = JSON.parse(data);
                    setLinksList(dataJS.result.short_link);

                  });    
         };

      useEffect(()=>{
         const tabJson = JSON.stringify(lista);
         localStorage.setItem("ShortLink", tabJson);
         console.log( JSON.parse(localStorage.getItem("ShortLink")));
      }
      ,[shortLink])
     

     const onSearchChange = (event) =>{
        setInputField(event.target.value);
     }

        return(
            <Wraper>
                <Menu />
                <SectionHeader caption={caption}/>
                <SectionUrl showHidePleaseAddLink={pleaseAddLink} onClick={onClickHandler} onChange={onSearchChange}/>
                <SectionDescription description={description} linkList = {shortLink}/>   
                <SectionAdvantages />
                <BoostLinks />
                <Footer />
            </Wraper>
        )
    

        

}

export default Root;