import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    const {value, setRatingValue} = props
    return (
        <div>
            <h3>Rating</h3>
            <Star selected={value > 0} setRatingValue={setRatingValue} value={1}/>
            <Star selected={value > 1} setRatingValue={setRatingValue} value={2}/>
            <Star selected={value > 2} setRatingValue={setRatingValue} value={3}/>
            <Star selected={value > 3} setRatingValue={setRatingValue} value={4}/>
            <Star selected={value > 4} setRatingValue={setRatingValue} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setRatingValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType & RatingPropsType) {
    return <span onClick={() => props.setRatingValue(props.value)}>{props.selected ? <b>star </b> : 'star '}</span>
}