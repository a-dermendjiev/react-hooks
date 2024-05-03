import {useEffect, useState} from "react";
import './App.css';

function App() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    console.log('Render')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);
    return (
        <div className="App">
            <button onClick={() => setResourceType('posts')}>Post</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
            <h1>{resourceType}</h1>
            {
                items && items.map(item => {
                    return <pre key={item.id}>{JSON.stringify(item)}</pre>
                })
            }
        </div>
    );
}

export default App;
