import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import React, {useState} from "react";
import {Accordion} from "./Accordion";

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;
// type Story = StoryObj<typeof Accordion>;
// export const FirstStory: Story = {
//     args: {
//         title: ' ',
//         collapsed: true,
//     },
// }
export default {
    component: Accordion
}
const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion title={"-CollapsedAccordion-"}
                      collapsed={true}
                      onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion title={"-OpenedAccordion-"}
                      collapsed={false}
                      onChange={() => {
                      }}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <Accordion title={"-AccordionDemo-"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}