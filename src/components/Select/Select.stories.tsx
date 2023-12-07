import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: "Select"
}
export const WithValue = () => {
    const [value, setValue] = useState(2)
    return <div>
        <Select value={value}
                onChange={setValue}
                items={[
                    {title: '1', value: 1},
                    {title: '2', value: 2},
                    {title: '3', value: 3},
                    {title: '4', value: 4},
                ]}/>
    </div>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select value={value} onChange={setValue} items={[
            {title: '1', value: 1},
            {title: '2', value: 2},
            {title: '3', value: 3},
            {title: '4', value: 4},
        ]}/>
    </>
}
