import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const [name, setName] = useState('')
    const prevName= useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name]);


    return (
        <div className="App">
            <input value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is: {name} and previous was: {prevName.current}</div>
        </div>
    );
}

export default App;
