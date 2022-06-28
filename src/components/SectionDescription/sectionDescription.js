import {SectionDes, Title, Desc, SectionList, LinkList, LinkListItem} from './sectionDescription.styles.js';


const SectionDescription = (props) => {
    const descr = props.description[0];

    return(
        <SectionDes>
            <SectionList>
              <LinkList>
                {
                    props.linkList.map( item =>
                        <LinkListItem>{item}
                            <button>Button</button>
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