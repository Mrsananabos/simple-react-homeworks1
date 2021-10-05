import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.inputError : ''

    return (
        <div className={s.greeting}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onBlur={() => setNameCallback}/>
                <div className={error ? s.error : ''}>{error}</div>
            </div>
            <button disabled={!name}
                    onClick={e => addUser(name)}>add
            </button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
