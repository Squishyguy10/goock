import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';

function Instructions() {
    return (
        <section id='instructions' className='body-font bg-gradient-to-b from-amber-100 to-amber-50 pb-40'>
            <div className='container px-5 pt-40 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-40 '>
                    <BookOpenIcon className='mx-auto inline-block w-10 mt-40' />
                    
                    <h1 className='sm:text-4xl text-5xl font-medium title-font mb-4 text-black py-3 font-display'>
                        How to Play
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Goock Games is a collection of various 1-on-1 games: turn-based and 2-dimensional. All of these games are playable using a computer algorithm 
                        (i.e. you can determine & develop an optimal algorithm to win). Your objective is to develop an algorithm that plays the games to any strategy 
                        of your liking. Your code will then be run against other players' algorithms, and you will be scored based on how many of these matches your 
                        algorithm wins. Specific instructions for code handling, such as input and output, will be provided in the instructions of each game. As of 
                        right now, Python 3 is the only language supported for submissions.
                    </p>
                    
                </div>
            </div>
        </section>
    );
}

export default Instructions;