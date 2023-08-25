import React from 'react';
import { QuestionMarkCircleIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

const games = [
    {
        name: 'Tic Tac Toe',
        hint: 'There is no winning strategy for Tic Tac Toe. Assuming both players play optimally, the game will end in a draw. How can you ensure you don\'t lose?',
    },
    {
        name: 'Nim',
        hint: 'Consider the XOR sum of the number of stones in each pile. If that sum is not zero during your turn, you are in a winning position. How can you use that to your advantage?',
    },
    {
        name: 'Pong',
        hint: 'Not much technical strategy involved, just make sure you move the paddle to the correct spot to prevent the ball from hitting the wall.',
    },
]

function Hints() {
    return (
        <div className='bg-gradient-to-b from-amber-100 via-amber-100 to-white'>
            <div className='container px-5 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-10'>
                    <QuestionMarkCircleIcon className='mx-auto inline-block w-10 py-10' />
                    <h1 className='sm:text-4xl text-3xl font-medium title-font font-display mb-5'>
                        Hints
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Spoiler alert! Hover below each game to see a hint for the strategy!
                    </p>
                </div>
                <div className='flex justify-center flex-wrap'>
                    {games.map((game => (    
                        <div>     
                            <h1 className='text-2xl'>
                                {game.name}
                            </h1>

                            <ChevronDoubleDownIcon className='mx-auto inline-block w-10 pt-10' />

                            <div className='flex relative py-5'>
                                <div className='px-8 py-10 relative z-10 w-full border-4 border-amber-500 bg-amber-900 opacity-0 hover:opacity-100 transition-x-20 ease-in-out duration-500'>
                                    <p className='leading-relaxed text-white'>{game.hint}</p>
                                </div> 
                            </div>
                        </div>
                    )))}
                </div>
                <br /><br /><br />
            </div>
        </div>
    );
}

export default Hints;