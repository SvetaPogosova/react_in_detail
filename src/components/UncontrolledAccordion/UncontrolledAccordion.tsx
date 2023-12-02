import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>)
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
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