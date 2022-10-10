import React from 'react'
import { IMG_BASE_URL } from '../Services/Variables.js';

const returnData = (data) => {
    data.map(data => <p>{data.height}</p>)
}


export function ImageList(props) {

    return returnData(props.data)
}

export function VideoList(props) {
    return (
        <div>

        </div>
    )
}