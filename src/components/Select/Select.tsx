import React, {useState} from "react";
import styles from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}
type PropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: PropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = () => {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                setHoveredElementValue(props.items[i+1].value)
                break
            }
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItems && selectedItems.title}</span>
            {active &&
                <div className={styles.items}>
                    {props.items.map(el =>
                        <div
                            onMouseEnter={() => setHoveredElementValue(el.value)}
                            className={styles.item + ' ' +
                                (hoveredItem === el ? styles.selected : '')}
                            key={el.value}
                            onClick={() => {
                                onItemClick(el.value)
                            }}>
                            {el.title}
                        </div>)}
                </div>}
        </div>
    )
}