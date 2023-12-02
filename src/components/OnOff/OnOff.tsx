import React from 'react';

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}


export const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        margin: '0 4px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicateStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '20px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    return (
        <div>
            <button style={onStyle} onClick={() => props.setOn(!props.on)}>- ON -</button>
            <button style={offStyle} onClick={() => props.setOn(!props.on)}>- OFF -</button>
            <button style={indicateStyle}></button>
        </div>
    );
};
