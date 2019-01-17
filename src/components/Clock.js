import React from 'react';
import './Clock.css'

const Clock=props=>{
    return (
        <div className="clock">{props.time}</div>
    )
}

export default Clock