import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)
    const style = (priorityName: string) => {
        return
    }

    return (
        <div style={{display: 'flex'}}>
            <div className="name" style={{margin: '10px', width: '100px'}}>{props.affair.name}</div>
            <div className="priority" style={{margin: '10px', width: '100px'}}>{props.affair.priority}</div>
            <button style={{margin: '10px', width: '100px'}} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
