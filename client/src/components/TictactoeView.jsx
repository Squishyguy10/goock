import React, { Component } from 'react';

const socket = new WebSocket('ws://localhost:3001');

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

class TictactoeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
			game: "tictactoe",
            boardState: props.boardState,
			gameHistory: []
        };
		this.getGameHistory();
    }
	
	getGameHistory() {
		socket.addEventListener('open', () => {
			let gameHistoryRequest = {
				game: this.state.game
			};
			let message = {
				type: "requestGameHistory",
				data: gameHistoryRequest
			};
			socket.send(JSON.stringify(message));
		});
		socket.addEventListener('message', (event) => {
			this.setState({gameHistory: JSON.parse(event.data)});
		});
	}

    render() {
        return (
            <div className='flex justify-center mt-20'>
                {Board(this.state.boardState)}
            </div>
        );
    }
}

export default TictactoeView;