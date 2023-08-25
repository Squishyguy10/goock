import React, { Component } from 'react';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Carousel from './Carousel'

const games = [
    {
        title: 'Tic Tac Toe',
        description: 'The tic tac toe you know and love! One player is X whilst the other is O. X goes first. Place your piece in any vacant square. First to get 3 in a row in any direction wins!',
        page: '/tictactoe',
        image: 'tictactoe.svg',
        num: 1,
    },
    {
        title: 'Nim',
        description: 'There is some number of piles of stones and each pile has some number of stones. Player A goes first and player B goes second. On each turn, you may remove any number of stones from any single pile. Whoever removes the last stone from the last remaining pile wins.',
        page: '/nim',
        image: 'nim.svg',
        num: 2,
    },
    {
        title: 'Splix',
        description: 'You start with a small square of territory. You may move in any cardinal direction, and once you venture out of your territory you claim other territory by returning back to your own area. The area you enclosed will become part of your area, just don\'t get hit while you are away from home!',
        page: '/splix',
        image: 'splix.webp',
        num: 3,
    },
]

class Games extends Component {
    render() {
        return (
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <a href="./tictactoe.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <a href="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <a href="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                </div>

                {/* <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div> */}

                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Prev</span>
                    </span>
                </button>

                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>

            </div>
        );
    }
}

export default Games;