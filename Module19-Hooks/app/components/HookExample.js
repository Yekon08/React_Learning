import React, {useState, useEffect} from 'react'

function HookExample () {

    const [count, setCount] = useState(1)
    const [countOver, setCountOver] = useState(0)
    const [name, setName] = useState('test')
    const [todo, setTodo] = useState([{text: 'faire ceci'}])

    console.log('Nom: ', name)
    console.log('Todo: ', todo)

    useEffect(() => {
        document.title = `Hook Example click : ${count}`
    })

    return(
        <div>
            <p style={{color: 'blue'}}>Vous avez cliqué {count} fois</p>
            <p style={{color: 'blue'}}>Vous avez hover {countOver} fois</p>
            <button onClick={ () => setCount( count + 1 ) }
            onMouseOver={() => setCountOver(countOver +1)}
            onMouseEnter={() => setName("maxime")}
            onMouseLeave={() => setTodo([...todo, {text: 'Faire ceci :' + count}])}
            >
                Cliquez ici
            </button>
        </div>
    )
}

export default HookExample