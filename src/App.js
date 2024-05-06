import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const [name, setName] = useState('')
    const renderCount= useRef(0)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    }, [name]);
    return (
        <div className="App">
            <input value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is:  {name}</div>
            <div>I rendered this {renderCount.current} times</div>
        </div>
    );
}

export default App;
