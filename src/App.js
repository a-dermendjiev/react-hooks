import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const [name, setName] = useState('')
    const inputRef= useRef()

    function setFocus (){
        inputRef.current.focus()
    }

    return (
        <div className="App">
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is: {name}</div>
            <button onClick={setFocus}>Focus</button>
        </div>
    );
}

export default App;
