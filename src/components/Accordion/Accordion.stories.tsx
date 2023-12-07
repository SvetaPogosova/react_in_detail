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
const onClickHandler = action('onClick')

export const CollapsedAccordion = () => {
    return <Accordion title={"-CollapsedAccordion-"}
                      collapsed={true}
                      onChange={onChangeHandler}
                      items={[]}
                      onClick={onClickHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion title={"-OpenedAccordion-"}
                      collapsed={false}
                      onChange={() => {
                      }}
                      items={[
                          {title: 'str 1', value: 1},
                          {title: 'str 2', value: 2},
                          {title: 'str 3', value: 3}
                      ]}
                      onClick={onClickHandler}/>
}

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <Accordion title={"-AccordionDemo-"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[
                          {title: 'str 1', value: 1},
                          {title: 'str 2', value: 2},
                          {title: 'str 3', value: 3}
                      ]}
                      onClick={(value) => {
                          alert(`user with ID ${value} should be clicked`)
                      }}/>
}