import React,{Component} from 'react';
import Board from './Board'
import Square from './Square'
import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                // call the board.js component
                <Board />
            </div>
        );
    }
}
export default App;
