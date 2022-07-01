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
        const [keyShortLinkList, setKeyShortLinkList] = useState([]);
        const [pleaseAddLink, setPleaseAddLink] = useState('Hide');
        const lista = [{"cokolwiek.pl":"short_link"}, {"ktokolwiek": "short_link2"}, {"gdziekolwiek":"short_link3"}];
        const listaKluczy = ["wp.pl", "cos.pl", "gdziekolwiek"];


      const ApiConnection = () =>{
         fetch(`https://api.shrtco.de/v2/shorten?url=${inputField}`).
         then(response => response.json()).
         then( JSONresp =>{
               const data = JSON.stringify(JSONresp);
               const dataJS = JSON.parse(data);
              // let linklist = {[inputField] : dataJS.result.short_link};
               //const keyList = inputField;
               setKeyShortLinkList(prevKeyList => [...prevKeyList, [inputField]]);
               setLinksList(prevLinkList =>[...prevLinkList, [dataJS.result.short_link]]);
            }); 
      }

     const onClickHandler = () =>
        {
              ApiConnection(); 
              GetFromLocalStorage(); 
        };

      const ArrayToString =(array)=>{
         return JSON.stringify(array);
      }
      
      const SaveToLocalStorage = (storageName, array)=>{
         localStorage.setItem(storageName, ArrayToString(array) );
      }

      const StringToJSON = ()=>{

      }

      const GetFromLocalStorage = (storageName, array, id) =>{
         const data = localStorage.getItem(storageName);
        if(data !== null) {
         const dataJS = JSON.parse(data);
         return dataJS[id];}
      }

      useEffect(()=>{  
            SaveToLocalStorage("Links",shortLinksList);
            SaveToLocalStorage("Keys", keyShortLinkList);
            /*const test = (localStorage.getItem("Links"));
            const test2 = JSON.parse(test);
            console.log(test2[0]);*/
         }
      ,[shortLinksList, keyShortLinkList]);


      /*useEffect(()=>{
            SaveToLocalStorage("Keys", keyShortLinkList);
      },[keyShortLinkList]);*/
     

     const onSearchChange = (event) =>{
        setInputField(event.target.value);
     }

        return(
            <Wraper>
                <Menu />
                <SectionHeader caption={caption}/>
                <SectionUrl showHidePleaseAddLink={pleaseAddLink} onClick={onClickHandler} onChange={onSearchChange}/>
                <SectionDescription description={description} links={shortLinksList} keys={setKeyShortLinkList} getFromStorage={GetFromLocalStorage}/>   
                <SectionAdvantages />
                <BoostLinks />
                <Footer />
            </Wraper>
        )
    

        

}

export default Root;