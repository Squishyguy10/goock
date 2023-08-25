import React, { Component, useEffect, useRef } from 'react';

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



    render() {

        return (
            <div className='flex justify-center mt-10'>
                <Canvas width={750} height={300} gameData={data} />
            </div>
        );

    }

}

export default PongView;