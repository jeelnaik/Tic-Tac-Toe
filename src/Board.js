import React,{Component} from 'react';
import Square from './Square'
import './App.css';
import Logo from './logo.jpg'
import Image from './image.png'
import Images from './images.png'

class Board extends Component {
    constructor(props){
        super(props)

        this.state={
            spaces: Array(9).fill(null),
            start: false,
            turn: '1',
            player1: [],
            player2: [],
            winState: ['012','345','678','036','147','258','048','246'],
            display: " "
        }
    }

    displayOn=(index,value)=>{
        //setting the space variable to the values o or x
        const { spaces } = this.state
        spaces[index] = value
        this.setState({spaces:spaces})
    }


    boxClick=(index,turn,player1,player2)=>{
        let {winState} = this.state
        if (! this.state.spaces.includes(null)) {
            document.getElementById('label').innerHTML = 'Tie'
        }
        if (turn === '1') {
            //if the player has already clicked the index then display error message
            if (player1.includes(index) || player2.includes(index)) {
                alert('Error')
            } else {
                if (player1.length < 2) {
                    // push the index in an array if box has less then 2 clicks
                    player1.push(index)
                }else if (player1.length >= 3) {
                    console.log(">3");
                    this.winCondition(player1,index)
                    player1.push(index)
                }else{
                    // when 1 player clicks 3 boxes , check for the win condition
                    console.log(player1.sort().join(""),"win",winState)
                    // check if the players 3 clicked indexes are in the win array
                    console.log("Win",winState.indexOf(player1.sort().join("")))
                    player1.push(index)
                    player1.sort()
                    //display the o wins in the label id
                    if (winState.indexOf(player1.sort().join("")) != -1) {
                        document.getElementById('label').innerHTML = 'O Wins'

                    }
                }
                this.setState({player1:player1,turn:'2'})
                console.log("player1",player1);
            }
        }else if (turn === '2') {

            if (player1.includes(index) || player2.includes(index)) {
                alert('Error')
            } else{
                if (player2.length < 2) {
                    player2.push(index)
                }else if (player2.length >= 3) {
                    this.winCondition(player2,index)
                    player2.push(index)
                }else{
                    player2.push(index)
                    player2.sort()
                    if (winState.indexOf(player2.sort().join("")) != -1) {
                        document.getElementById('label').innerHTML = 'X Wins'
                    }
                }
                this.setState({player2:player2,turn:'1'})
                console.log("player2",player2);

            }
        }


    }

    winCondition = (array,index) => {
        // when one player clicks the 4th index, check if one of the win condition is true.
        // create variables through array and index
        let {winState} = this.state
        let win = []
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1; j < array.length; j++) {
                let win = []
                //take 2 variables from array and push the 3rd variable in the vaiable win
                win.push(array[i],array[j],index)
                //sort the win
                win = win.sort()
                console.log("winning",win.join(""));
                console.log(winState.indexOf(win));
                //check if the value of win is in the win condition array
                if (winState.indexOf(win.join("")) != -1) {
                    alert('Win')
                    break
                }else {
                    continue;
                }
                win = []
            }
            win = []
        }
        console.log(win);

    }

    restart=()=>{
        window.location.reload(false)
    }
    render(){

        return (
            <>
            <img src = {Images} />
            <div id = "label"> </div>
                <div id="flexbox" width= "42" height= "42">
                    {this.state.spaces.map((value,index)=>{
                        return(
                            <div>
                                <Square index={index} value={value}
                                turn = {this.state.turn} start = {this.state.start} player1={this.state.player1} player2={this.state.player2}
                                boxClick={this.boxClick}
                                displayOnBoard = {this.displayOnBoard}
                                display = {this.state.display}
                                displayOn = {this.displayOn}/>
                            </div>
                        )
                    })}
                </div>
                <button id="reset" onClick= {this.restart} > Restart </button>

            </>
        );
    }
}
export default Board;
