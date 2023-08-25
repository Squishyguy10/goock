import React, { Component } from 'react';
import { CubeIcon } from '@heroicons/react/24/outline';
import Submission from "./Submission";

class Nim extends Component {
    render() {
        return (
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <CubeIcon className='mx-auto inline-block w-10 mb-4' />
                    <h1 className='sm:text-4xl text-2xl font-medium title-font font-display'>
                        Nim
                    </h1>
                    <p className='pt-4'>
                        The game of Nim is played as follows: you have n piles of 
                        stones (labelled 0 to n-1) and each pile has a(n) stones. You may choose any pile
                        i such that 0 ≤ i ≤ n-1 and a(i) &gt; 0, and remove as many stones as you want from it. 
                        Whoever removes the last stone from the last pile wins. Your code should be in an infinite loop 
                        ("while True" will suffice) and should first read in (using input()) the game state. The game state will be given to you 
                        in the form "a(0),a(1),a(2),...,a(n-1)" (without the quotation marks) where a(i) is the number of stones in pile i. For example, the input 
                        "3,5,1,2,6" gives you 5 piles. The 0th pile has 3 stones, the 1st pile has 5 stones, so on and so forth. You must then decide 
                        which pile you wish to remove stones from and how many from that pile. Your output should be in the form "x,y" (without the quotation marks), 
                        where x and y are valid integers, indicating you wish to remove y stones from pile x.
                    </p>
                </div>
                <Submission game='nim' />
            </div>
        );
    }
}

export default Nim;