import React from 'react';
import './Clock.css'

const Clock=props=>{
    return (
        <div className="clock">{props.time > 9 ? props.time:`0${props.time}`}</div>
    )
}

export default Clock