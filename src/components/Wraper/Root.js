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
        const [shortLinksList, setLinksList] = useState([]);
        const [keyShortLinkList, setKeyShortLinkList] = useState('');
        const [pleaseAddLink, setPleaseAddLink] = useState('Hide');
        const lista = [{"cokolwiek.pl":"short_link"}, {"ktokolwiek": "short_link2"}, {"gdziekolwiek":"short_link3"}];
        const listaKluczy = ["cokolwiek.pl", "ktokolwiek", "gdziekolwiek"];


      const apiConnection = () =>{
         fetch(`https://api.shrtco.de/v2/shorten?url=${inputField}`).
         then(response => response.json()).
         then( JSONresp =>{
               const data = JSON.stringify(JSONresp);
               const dataJS = JSON.parse(data);
               let linklist = [{[inputField] : dataJS.result.short_link}];
              // localStorage.setItem("ShortLinks", dataJS.result.short_link)
             // console.log(shortLinksList);
               //const cokolwiek = [{inputField: dataJS.result.short_link}]
               const keyList = inputField;
               console.log (linklist);
               setLinksList(prevLinkList =>[...prevLinkList, {[keyList]: dataJS.result.short_link}]);
               //localStorage.setItem("ShortLinks", shortLinksList);
               //console.log(shortLinksList);
               //console.log(linklist);
            }); 
      }

     const onClickHandler = () =>
        {
              apiConnection();  
        };

      useEffect(()=>{
         //const tabJson = JSON.stringify(lista);
        // console.log(`ue ${shortLinksList}`);
         localStorage.setItem("Links", shortLinksList);
        /* const JSONsparsowany = JSON.parse(localStorage.getItem("ShortLinks"));
         listaKluczy.map((value, id) =>{
            const cos = JSONsparsowany[id]
           //console.log(cos[value]);
         })*/
      }
      ,[shortLinksList])
     

     const onSearchChange = (event) =>{
        setInputField(event.target.value);
     }

        return(
            <Wraper>
                <Menu />
                <SectionHeader caption={caption}/>
                <SectionUrl showHidePleaseAddLink={pleaseAddLink} onClick={onClickHandler} onChange={onSearchChange}/>
                <SectionDescription description={description} linkList = {shortLinksList}/>   
                <SectionAdvantages />
                <BoostLinks />
                <Footer />
            </Wraper>
        )
    

        

}

export default Root;