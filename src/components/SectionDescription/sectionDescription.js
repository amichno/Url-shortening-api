import {SectionDes, Title, Desc} from './sectionDescription.styles.js';


const SectionDescription = (props) => {
    const descr = props.description[0];

    return(
        <SectionDes>
            <Title>{descr.caption} </Title>
            <Desc>{descr.text}</Desc>
        </SectionDes>
    )
}

export default SectionDescription;