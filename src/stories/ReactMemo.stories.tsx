import React, {memo, useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo"
}


export const DifficultCountingExample = () => {
    let [a, setA] = useState(3)
    let [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i

        }
        return tempResultA
    }, [a])

    /* for (let i = 1; i <= a; i++) {
         let fake = 0
         while (fake < 100000000) {
             fake++
             const fakeValue = Math.random()
         }
         resultA = resultA * i
     }*/

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>Result A = {resultA}</div>
        <div>Result B = {resultB}</div>
    </>
}

const Users = React.memo((props: { users: string[] }) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const UseMemoExample = () => {
    console.log('UseMemoExample')
    let [counter, setCounter] = useState(0)
    let [users, setUsers] = useState(['Sveta', 'Artem', 'Viktor', 'Sergei'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addU = () => {
        const newU = [...users, 'Sveta 1' + new Date().getTime()]
        setUsers(newU)
    }

    return <>
        <button onClick={() => setCounter(counter++)}>+</button>
        <button onClick={() => addU()}> add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


const Books = React.memo((props: { addBook: () => void }) => {
    console.log('Books')
    return <div>
        <button onClick={() => props.addBook()}> add book</button>

        {/*{props.books.map((b, i) => <div key={i}>{b}</div>)}*/}
    </div>
})


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    let [counter, setCounter] = useState(0)
    let [books, setBooks] = useState(['React', 'JS', 'GP', 'LofR'])

    const addBook = useCallback(() => {
        console.log(books)
        const newU = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newU)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter++)}>+</button>
        {counter}
        <Books addBook={addBook}/>
    </>
}