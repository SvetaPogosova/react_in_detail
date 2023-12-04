import {ChangeEvent, FormEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input'
};

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input onChange={onChange}/> - {value}
    </>
}
export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - - - {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <><input value={parentValue} onChange={onChange}/>
        {parentValue}</>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <>
        <input type={'checkbox'} checked={parentValue}
               onChange={onChange}
               onClick={action('checked')}/>
    </>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChange = (e: FormEvent<HTMLOptionElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <>
        <select>
            <option value={parentValue} onChange={onChange}>none</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>

        </select>
    </>
}

export const ControlledInputWithFixedValue = () => <input value={'Controlled Input With Fixed Value'}/>

