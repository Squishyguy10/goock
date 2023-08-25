import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

function GetFeatured() {
    return (
        <div className='bg-gradient-to-b from-amber-50 to-white pt-40 pb-52'>
            <div className='container px-5 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-40 '>
                    <AcademicCapIcon className='mx-auto inline-block w-10' />
                    
                    <h1 className='sm:text-4xl text-5xl font-medium title-font mb-4 text-black py-3 font-display'>
                        Get Featured
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Top performing algorithms will be featured on our 
                        coveted leaderboards! <a href='/leaderboards' className='underline text-blue-500'>Click here</a> to 
                        view the leaderboards. Placement is based solely on your algorithm's score, determined by 
                        how many algorithms you beat.
                    </p>
 
                </div>
            </div>
        </div> 
    );
}

export default GetFeatured;