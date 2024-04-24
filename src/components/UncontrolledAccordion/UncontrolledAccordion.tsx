import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>)
}

type AccordionTitlePropsType = {
    title: string
    // collapsed: boolean
    // setCollapsed: (collapsed: boolean) => void
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1 Lorem ipsum dolor sit amet</li>
            <li>2 Ratione ipsum dolor sit amet</li>
            <li>3 Eos ipsum dolor sit amet</li>
        </ul>
    );
}