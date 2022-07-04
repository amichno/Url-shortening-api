import { Fragment } from "react";
import { Adv } from "./sectionAdvantages.styles";

const Advantage = (props)=>{
    const advList = props.advantages;
    return(
        <Fragment>
            {advList.map(({title, text, url}) =>         
             <Adv key={title}> 
                <div className="Icon">
                    <img src={url} alt={title}/>
                </div>
                <div className="TextAdv">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
             </Adv>
            )}
            </Fragment>
        
    )

}
export default Advantage;