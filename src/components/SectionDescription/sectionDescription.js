import {SectionDes, Title, Desc, SectionList, LinkList, LinkListItem, Paragraph} from './sectionDescription.styles.js';
import { ButtonShorten } from '../SectionUrl/sectionUrl.styles.js';


const SectionDescription = (props) => {
    const descr = props.description[0];
    const linklist = props.links;
    const keyList = props.keys;
    
    return(
        <SectionDes>
            <SectionList>
              <LinkList>
                      <LinkListItem> 
                            {
                                linklist.map((value, id)=>{
                                    <LinkListItem> 
                                        <Paragraph isRight={false} isBlue={false}>{value}</Paragraph>
                                        <Paragraph isRight={true} isBlue={true}>{id}</Paragraph>
                                        <ButtonShorten isHalf={true}>Copy</ButtonShorten>
                                    </LinkListItem>
                                })
                            }
                            <Paragraph isRight={false} isBlue={false}>Link</Paragraph>
                            <Paragraph isRight={true} isBlue={true}>short link</Paragraph>
                          <ButtonShorten isHalf={true}>Copy</ButtonShorten>
                      </LinkListItem>
              </LinkList>
              
            </SectionList>
            <Title isWhite={false}>{descr.caption} </Title>
            <Desc>{descr.text}</Desc>
        </SectionDes>
    )
}

export default SectionDescription;