import React, {useState} from "react";

function App() {
    function countInitial() {
        console.log('Run Initial function')
        return {count: 4, theme: 'pink'}
    }

    const [state, setState] = useState(() => countInitial())
    const count = state.count
    const theme = state.theme

    function decrementCount() {
        setState(prevState=> {
            // return {...prevState, count: prevState.count -1}
            return { count: prevState.count -1 , theme: 'blue'}
        })
    }

    function incrementCount() {
        setState(prevState=> {
            // return {...prevState, count: prevState.count + 1}
            return {...prevState, count: prevState.count + 1, theme: 'red'}
        })
    }

    return (
        <>
            <div>{theme}</div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    );
}

export default App;
