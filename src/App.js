import './App.css';
import FunctionContextComponent from './FunctionContextComponent'
import {ThemeProvider} from "./ThemeContext";


function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <FunctionContextComponent/>
            </ThemeProvider>
        </div>
    )
}

export default App;


