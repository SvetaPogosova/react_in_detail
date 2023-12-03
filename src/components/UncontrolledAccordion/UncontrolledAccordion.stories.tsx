import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

export const Accordion = () => <UncontrolledAccordion titleValue={'1'}/>