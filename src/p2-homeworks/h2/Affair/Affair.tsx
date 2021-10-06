import React from 'react'
import {AffairType} from "../HW2";
import s from './Affair.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)
    const priorityStyle = s.item + ' ' + s[props.affair.priority];

    return (
        <div className={s.content}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityStyle}>{props.affair.priority}</div>
            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
