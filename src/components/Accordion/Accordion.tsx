import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <h3>--Accordion--</h3>
            <AccordionTitle title={props.title}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>)
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}