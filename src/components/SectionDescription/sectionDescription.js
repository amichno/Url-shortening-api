import {SectionDes, Title, Desc, SectionList, LinkList, LinkListItem, Paragraph} from './sectionDescription.styles.js';
import { ButtonShorten } from '../SectionUrl/sectionUrl.styles.js';


const SectionDescription = (props) => {
    const descr = props.description[0];
    const linkList = props.links;
    const keyList = props.keys;
   
    return(
        <SectionDes>
            <SectionList>
              <LinkList>
                      {
                                linkList.map((value, id)=>
                                    <LinkListItem key={id}> 
                                        <Paragraph isRight={false} isBlue={false}>
                                          {keyList[id]}
                                        </Paragraph>
                                        <Paragraph isRight={true} isBlue={true}>
                                            {linkList[id]}
                                        </Paragraph>
                                        <ButtonShorten isHalf={true}>Copy</ButtonShorten>  
                                    </LinkListItem>
                                )
                            }
              </LinkList>
              
            </SectionList>
            <Title isWhite={false}>{descr.caption} </Title>
            <Desc>{descr.text}</Desc>
        </SectionDes>
    )
}

export default SectionDescription;