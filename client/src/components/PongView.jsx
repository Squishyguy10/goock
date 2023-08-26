import React, { Component, useEffect, useRef } from 'react';

const socket = new WebSocket('ws://localhost:3001');

const paddleHeight = 54, paddleWidth = 12;
const ballLength = 12;

const data = {
    'bx': 210,
    'by': 120,
    'p1y': 102,
    'p2y': 180,  
};

const Canvas = ({ gameData, ...props }) => {
    const canvasRef = useRef(null);

    const drawCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.fillStyle = 'black';
        context.fillRect(0, 0, props.width, props.height);

        context.fillStyle = 'white';
        // left paddle
        context.fillRect(3, gameData.p1y , paddleWidth, paddleHeight);

        // right paddle 
        context.fillRect(canvas.width - paddleWidth - 3, gameData.p2y , paddleWidth, paddleHeight);

        // ball
        context.fillRect(gameData.bx , gameData.by, ballLength, ballLength);
    };

    useEffect(() => {
        const animationFrameId = requestAnimationFrame(drawCanvas);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [gameData]);

    return <canvas ref={canvasRef} {...props} />;
};

class PongView extends Component {

    constructor(props) {
        super(props);
        this.state = {
			game: "pong",
			gameHistory: [],
            gameInfo: {'bx': 60, 'by': 10, 'p1y': 55, 'p2y': 55},
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
				type: "requestGameHistory",
				data: gameHistoryRequest
			};
			socket.send(JSON.stringify(message));
		});
		socket.addEventListener('message', (event) => {
			this.setState({gameHistory: JSON.parse(event.data)});
            if (this.state.gameHistory.length > 0) this.displayGame();
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
			let curState = this.state.gameHistory[rand].game[i].split(',');
			let json = {};
            json['bx'] = parseInt(curState[1]);
            json['by'] = parseInt(curState[2]);
            json['p1y'] = parseInt(curState[5]);
            json['p2y'] = parseInt(curState[6]);

            this.setState({
                gameInfo: json,
            }, () => {
                console.log(this.state.gameInfo);
            });
            console.log(this.state.gameInfo);
			i = (i + 1) % moves;
            console.log(i);
		}.bind(this), 5);
    }

    render() {
        return (
            <div className='bg-amber-100'>
                <div className='pt-20 pb-52'>
                    <div className='flex justify-center'>
                        <h1 className='sm:text-4xl text-3xl font-medium title-font font-display mb-5'>Spectate Pong</h1>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <Canvas width={750} height={300} gameData={this.state.gameInfo} />
                    </div>
                    <div className='flex justify-center text-xl py-10'>
                        <h1>{this.state.p1} vs. {this.state.p2}</h1>
                    </div>
                    <div className='flex justify-center text-xl py-10'>
                        <h1>Winner: {this.state.winner}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default PongView;