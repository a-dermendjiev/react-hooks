import {useEffect, useState} from "react";
import './App.css';

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    console.log('Render')
    const handleResize = () =>{
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            console.log('Reset useEffect')
        }
    }, []);
    return (
        <div className="App">
            <p>{windowWidth}</p>
        </div>
    );
}

export default App;
