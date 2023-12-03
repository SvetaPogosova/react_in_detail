import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('On or Off clicked')
export const OnMode = () => <OnOff on={true} setOn={callback}/>
export const OffMode = () => <OnOff on={false} setOn={callback}/>
export const ChangeOnOff = () => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} setOn={setOn}/>
}

