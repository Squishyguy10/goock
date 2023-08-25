import React, { Component } from 'react';
import { XMarkIcon } from  '@heroicons/react/24/outline'
import Submission from './Submission';

class Tictactoe extends Component {
    render() {
        return (
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <XMarkIcon className='mx-auto inline-block w-10 mb-4' />
                    <h1 className='sm:text-4xl text-2xl font-medium title-font font-display'>
                        Tic Tac Toe
                    </h1>
                    <p className='pt-4'>
                        Your code must be in an infinite loop ("while True" will suffice). At the start of your loop, 
                        you should input the board using input(). The format of the board will be a string of 9 characters, 
                        each either 'X', 'O', or ' ', representing Xs, Os, and empty spaces respectively. The first 3 characters represent 
                        the top row, the next 3 characters represent the middle row, and the last 3 characters represents the bottom row. After 
                        reading the board state, place your marker by specifying the index within the string (0-8 inclusive) where you want to 
                        place your piece. Also, to determine whether you are X or O, simply count the number of spaces in the string on input. 
                        An odd number of spaces means you are X, while an even number of spaces means you are O.
                    </p>
                </div>
                <Submission game='tictactoe' />
            </div>
        );
    }
}

export default Tictactoe;