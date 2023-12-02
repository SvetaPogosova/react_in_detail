import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating"

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    return (
        <div className={"App"}>
            <Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<Accordion title={"Users"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <OnOff on={on} setOn={setOn}/>
            {/*<UncontrolledAccordion title={"Menu2"} collapsed={accordionCollapsed}*/}
            {/*                       setAccordionCollapsed={setAccordionCollapsed}/>*/}
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Uncontrolled Accordion'}/>

            {/*<PageTitle title="This is App"/>*/}
            {/*<Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<Accordion title={"Menu"} collapsed={accordionCollapsed}
            setAccordionCollapsed={setAccordionCollapsed}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledOnOff onChange={setOn}/>{on.toString()}*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
