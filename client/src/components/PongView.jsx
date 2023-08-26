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

const Canvas = (props, { gameData }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.fillStyle = 'black';
        context.fillRect(0, 0, props.width, props.height);

        context.fillStyle = 'white';
        // left paddle
        context.fillRect(3, data.p1y - paddleHeight / 2, paddleWidth, paddleHeight);

        // right paddle 
        context.fillRect(canvas.width - paddleWidth - 3, data.p2y - paddleHeight / 2, paddleWidth, paddleHeight);

        // ball
        context.fillRect(data.bx - ballLength / 2, data.by - ballLength / 2, ballLength, ballLength);

    }, []);

    return <canvas ref={canvasRef} {...props} />
}

class PongView extends Component {

    constructor(props) {
        super(props);
        this.state = {
			game: "pong",
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
            <div className='flex justify-center mt-10'>
                <Canvas width={750} height={300} gameData={data} />
            </div>
        );
    }
}

export default PongView;