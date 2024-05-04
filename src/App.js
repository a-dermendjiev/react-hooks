import './App.css';
import React, {useEffect, useMemo, useState} from "react";

function App() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
            return slowFunction(number)
        }, [number]
    )

    function slowFunction(number) {
        console.log('Calling slow function')
        for (let i = 0; i < 1000000000; i++) {
        }
        return number * 2
    }

    const themeStyles = useMemo(() => {
            return {
                backgroundColor: dark ? 'black' : 'white',
                color: dark ? 'white' : 'black'
            }
        }, [dark]
    )

    useEffect(() => {
        console.log('Theme changed')
    }, [themeStyles]);

    return (
        <div className="App">
            <input type="number" value={number} onChange={e => setNumber(
                parseInt(e.target.value)
            )}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    );
}

export default App;
