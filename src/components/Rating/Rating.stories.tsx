import React, {useState} from "react";
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
}

export const EmptyStart = () => <Rating value={0} onClick={x => x}/>

export const Rating1 = () => <Rating value={1} onClick={x => x}/>
export const Rating2 = () => <Rating value={2} onClick={() => {}}/>

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating}/>
}
