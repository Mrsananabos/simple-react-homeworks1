import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.messageWrapper}>
            <div className={s.message}>
                <img alt={'userIcon'} src={props.avatar}/>
            </div>
            <div className={s.box}>
                <div className={s.userName}>{props.name}:</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>
        </div>
    )
};

export default Message
