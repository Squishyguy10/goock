import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';

function Instructions() {
    return (
        <section id='instructions' className='body-font'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>

                    <h1 className='sm:text-4xl text-5xl font-medium title-font mb-4 text-black py-3'>
                        How to Play
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Goock Games is a collection of various 1-on-1 games: turn-based and 2-dimensional. All of these games are playable using a computer algorithm, 
                        (i.e. you can determine & develop an optimal algorithm to win). Your objective is to develop an algorithm that will be able play the games to any strategy 
                        of your liking. Your code will then be run against other players' algorithms, and you will be scored based on how many of these matches your algorithm is 
                        able to win. Specific instructions for code handling, such as input and output, will be provided in the instructions of each game.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Instructions;