import React, { Component } from 'react';
import {ClockIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

class Submission extends Component {
    render() {
        return (
            <div className="bg-gradient-to-b from-amber-100 via-amber-100 to-white">
                <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                    <div className='flex flex-col w-full mb-20'>
                        <ClockIcon className='mx-auto inline-block w-10 mt-2 mb-4' />
                        <h1 className='sm:text-4xl text-2xl pt-4 font-medium title-font font-display'>
                            Submission received! 
                        </h1>
                        
                        <p className='pt-12'>
                            While the server is procesing it, feel free to spectate your submission, 
                            where your score will then pop up on the leaderboard.
                        </p>
                        <div className='container px-5 mx-auto text-center lg:px-40'>
                            <div className='inline-flex gap-x-16 pb-4 mt-16 mb-20'>
                                <Link to='/spectate'>
                                    <button className='py-2 px-4 bg-blue-400 text-white text-xl hover:bg-blue-500 rounded border-b-4 border-blue-600 hover:border-blue-800'>
                                        Spectate
                                    </button>
                                </Link>

                                <Link to='/leaderboards'>
                                    <button className='py-2 px-4 bg-blue-400 text-white text-xl hover:bg-blue-500 rounded border-b-4 border-blue-600 hover:border-blue-800'>
                                        Leaderboard
                                    </button>
                                </Link>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Submission;