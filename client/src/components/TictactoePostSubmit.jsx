import React, { Component } from 'react';

const squareStyle = 'bg-white border border-gray-300 float-left text-5xl font-bold leading-9 h-20 w-20 -ml-1 -mt-1 text-center';

function Square({ value }) {
    return <button className={squareStyle}>{value}</button>
}

function Board(gameState) {
    const rows = 3, cols = 3;
    const squares = [];

    for (let i=0; i<rows; i++) {
        const squareRow = [];
        for (let j=0; j<cols; j++) {
            squareRow.push(<Square value={gameState[i * 3 + j]} />)
        }
        squares.push(<div className='flex'>{squareRow}</div>);
    }

    return <div>{squares}</div>;

    
}

class TictactoePostSubmit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            boardState: props.boardState,
        };
    }

    render() {
        return (
            <div className='flex justify-center'>
                {Board(this.state.boardState)}
            </div>
        );
    }

}

export default TictactoePostSubmit;