import React, { Component } from 'react';
import { MinusCircleIcon } from '@heroicons/react/24/outline';
import Submission from './Submission';

class Pong extends Component {
    render() {
        return (
            <div className='bg-amber-100'>
                <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                    <div className='flex flex-col w-full mb-20'>
                        <MinusCircleIcon className='mx-auto inline-block w-10 mb-4' />
                        <h1 className='sm:text-4xl text-2xl font-medium title-font font-display'>
                            Pong
                        </h1>
                        <p className='pt-4'>
                            Pong is a classic arcade game in which each player controls the vertical movement of a rectangular paddle: one player on the left, 
                            the other on the right. A ball will travel through the 750 by 300 rectangular board and bounce off the upper and lower walls. However, 
                            if it hits either of the side walls, the player across from such wall wins (i.e. if the ball hits Player A's wall, Player B will win, 
                            and vice versa). The moveable paddle deflects the ball, bouncing it back to the other side. Your task is to make an algorithm 
                            that will get the ball's position and velocity, then move your paddle's position accordingly. More rigourously, 
                            you will have to, in an infinite loop ("while True" will suffice), read (using input()) the following: the ball's position, 
                            the ball's velocity, and your paddle's position. The input will be given in the following format: (t,x,y,dx,dy,py,py2). t will be 
                            0 or 1, indicating that you are on the left or right respectively. (x, y) 
                            represents the ball's position (where (0, 0) is the top left). (dx, dy) are the velocities in the x and y axes respectively 
                            (positive dx is down, negative dx is up, positive dy is right, negative dy is left). Finally, py is the y position of the centre of 
                            your paddle (your paddle's x position is fixed) and py2 is the opponent's paddle's y-coordinate. Note that the paddle is 54 units in length. You must then output either "up", 
                            "down", or "stay" to go up 6 pixels, down 6 pixels, or stay in place respectively. 
                        </p>
                    </div>
                    <Submission game='pong' />
                </div>
            </div>
        );
    }
}

export default Pong;