import React, {memo, useState} from "react";

export default {
    title: "React.memo demo"
}

const C = (props: { count: number }) => {
    console.log('C')
    return <div>{props.count}</div>
}

const U = memo((props: { users: Array<string> }) => {
    console.log('U')
    return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
})

export const Example1 = () => {
    let [counter, setCounter] = useState(0)
    let [users, setUsers] = useState(['u-1', 'u-2', 'u-3'])

    const addUser = () => {
        const newUsers = [...users, 'u-' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(counter++)
        }}>+
        </button>
        <button onClick={addUser}>add users
        </button>
        <C count={counter}/>
        <U users={users}/>
    </>
}

