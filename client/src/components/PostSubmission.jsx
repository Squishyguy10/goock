import React, { Component } from 'react';
import {ClockIcon} from '@heroicons/react/24/outline'

class Submission extends Component {
    render() {
        return (
            <div className="bg-amber-100">
                <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                    <div className='flex flex-col w-full mb-20'>
                        <ClockIcon className='mx-auto inline-block w-10 mb-4' />
                        <h1 className='sm:text-4xl text-2xl pt-2 font-medium title-font font-display'>
                            Submission received! Please wait for server processing...
                        </h1>
                            
                        
                    </div>
                </div>
            </div>
        );
    };
}

export default Submission;