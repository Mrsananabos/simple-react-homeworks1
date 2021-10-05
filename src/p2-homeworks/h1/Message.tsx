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

            <div className={s.angle}/>

            <div className={s.content}>
                <div className={s.userName}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
};

export default Message
