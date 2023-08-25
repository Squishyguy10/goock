import React, { Component } from 'react';
import { MinusCircleIcon } from '@heroicons/react/24/outline';
import Submission from './Submission';

class Pong extends Component {
    render() {
        return (
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <MinusCircleIcon className='mx-auto inline-block w-10 mb-4' />
                    <h1 className='sm:text-4xl text-2xl font-medium title-font font-display'>
                        Pong
                    </h1>
                    <p className='pt-4'>
                        Pong is a classic arcade game in which each player controls a single rectangular paddle, 
                        one player on the left, the other on the right. A ball will be travelling through the 750 by 300 rectangular board 
                        and bounce off the upper and lower walls. However, if it hits either of the side walls, one of the players wins. 
                        If the ball hits the wall on Player A's side, Player B will win, and vice versa. This is why Player A and B 
                        have paddles, which will act as a wall to prevent the ball from hitting the sides. Your task is to make an algorithm 
                        that will get the position of the ball and its velocity, and move the paddle's position accordingly. More rigourously, 
                        you will have to, in an infinite loop (while True) will suffice, read (using input()) the following: the ball's position, 
                        the ball's velocity, and your paddle's position. The input will be given in the following format: (x,y,dx,dy,py), where (x, y) 
                        represents the ball's position (where (0, 0) is the top left), (dx, dy) are the velocities in the x and y axes respectively 
                        (positive dx is down, negative dx is up, positive dy is right, negative dy is left), and py is the y position of the centre of 
                        your paddle (your paddle's x position is fixed). Keep in mind your paddle is 54 units in length. You must then output either "up" 
                        or "down", to go up 6 pixels or down 6 pixels respectively. 
                    </p>
                </div>
                <Submission game='pong' />
            </div>
        );
    }
}

export default Pong;