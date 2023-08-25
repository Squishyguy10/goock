import React, { Component } from 'react';

const squareStyle = 'bg-white border border-gray-300 float-left text-2xl font-bold leading-9 h-9 w-9 -ml-1 -mt-1 text-center';

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

class TictactoeCanvas extends Component {

    render() {
        return (
            <div>
                {Board('XXOOX OXO')}
            </div>
        );
    }

}

export default TictactoeCanvas;