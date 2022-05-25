import {AdvantagesSection} from './sectionAdvantages.styles';
import Advantage from './Advantage.component';
import { advantages } from '../../Data/advantages';

const SectionAdvantages = () =>{
    return(
        <AdvantagesSection>
            {console.log("ok")}
            <Advantage advantages={advantages}/>
        </AdvantagesSection>
    )

}

export default SectionAdvantages;