import React from 'react';
import './SwitchStopper.css'

const SwitchStopper=props=>{
    return (
        <button 
            className={props.active ? "stop":"start"}
            onClick={props.onOff}
        >
        {props.active ? "Stop":"Start"}
        </button>
    )
}

export default SwitchStopper