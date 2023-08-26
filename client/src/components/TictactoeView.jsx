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
			game: 'tictactoe',
            boardState: props.boardState,
			gameHistory: [],
            p1: '',
            p2: '',
            winner: '',
        };
		this.getGameHistory();

    }
	
    getGameHistory() {
		socket.addEventListener('open', () => {
			let gameHistoryRequest = {
				game: this.state.game
			};
			let message = {
				type: 'requestGameHistory',
				data: gameHistoryRequest
			};
			socket.send(JSON.stringify(message));
		});
		socket.addEventListener('message', (event) => {
			this.setState({gameHistory: JSON.parse(event.data)}, () => {
				console.log(this.state.gameHistory);
				if (this.state.gameHistory.length > 0) this.displayGame();
			});
		});
	}

    displayGame() {		
        let rand = Math.floor(Math.random() * this.state.gameHistory.length);
        let moves = this.state.gameHistory[rand].game.length;
		let i=0;
		
		let playerOne = this.state.gameHistory[rand].one;
		let playerTwo = this.state.gameHistory[rand].two;
		let winnerr = this.state.gameHistory[rand].winner;
        let w = (winnerr === 'one' ? playerOne : playerTwo);
        this.setState({
            p1: playerOne,
            p2: playerTwo,
            winner: w
        });
		
		setInterval(function() {
			let curState = this.state.gameHistory[rand].game[i];
			this.setState({boardState: curState});
			i = (i + 1) % moves;
		}.bind(this), 1000);
    }

    render() {
        return (
            <div className='bg-amber-100'>
                <div className='pt-40 pb-60'>
                    <div className='flex justify-center mt-20 w-full'>
                        {Board(this.state.boardState)}
                    </div>
                    <div className='flex justify-center mt-10 text-xl'>
                        <h1>
                            {this.state.p1} (X) vs. {this.state.p2} (O)
                        </h1>
                        
                    </div>
                    <div className='flex justify-center mt-10 text-xl'>
                        <h1>
                            Winner: {this.state.winner}
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default TictactoeView;