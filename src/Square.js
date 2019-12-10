import React,{Component} from 'react';

import './App.css';

class Square extends Component {


    handleClick=() =>{
        console.log(this.props.value);

        if (this.props.turn === '1') {
            this.props.displayOn(this.props.index,'O')
        }else if (this.props.turn === '2') {
            this.props.displayOn(this.props.index,'X')
        }

        // if (this.props.start === false) {
        //     this.props.displayOnBoard(true,'1')
        // } else if (this.props.start === true) {
            this.props.boxClick(this.props.index,this.props.turn,this.props.player1,this.props.player2);
        // }

    }

    render(){

        return (
            <div className="Square">
                <div id='square'>

                <button id="box" onClick={this.handleClick}>
                {this.props.value}
                </button>
                </div>

            </div>
        );
    }
}
export default Square;
