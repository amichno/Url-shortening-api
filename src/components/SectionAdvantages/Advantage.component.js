import { Fragment } from "react";
import { Adv } from "./sectionAdvantages.styles";

const Advantage = (props)=>{
    const advList = props.advantages;
    return(
        <Adv>
            {advList.map(({title, text, url}) =>
            
             <Fragment>
                 {console.log("w petli")}
                <div>
                    <img src={url} />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{text}</p>

                </div>
                {console.log(title)}
             </Fragment>

            )}

        </Adv>
    )

}
export default Advantage;