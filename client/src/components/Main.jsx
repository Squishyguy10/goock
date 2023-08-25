import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import goose from './images/goose_cartoon.png';


function Main() {
    // goose slide across
    useEffect(() => {
        const slideImage = () => {
            const image = document.getElementById('slideImage');
            const containerWidth = document.getElementById('slideContainer').offsetWidth;
            const imageWidth = image.offsetWidth;
            let currentPosition = -imageWidth;
        
            const slide = () => {
                currentPosition++;
                if(currentPosition > containerWidth) {
                    currentPosition = -imageWidth;
                }
                image.style.transform = `translateX(${currentPosition}px)`;
                requestAnimationFrame(slide);
            };
            slide();
        
            return () => cancelAnimationFrame(slide);
        };
    
        slideImage();
    }, []);

    // typing text (names)
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Welcome to Goock Games.", "Front-end: Aaron & Andrew", "Backend: Damon", "Art: Felix", "Presentation: Andrew", "We hope you enjoy!"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(90);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);
        
        if(isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(600);
        }
        else if(isDeleting) {
            setDelta(50);
        }
        else if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(1800);
        }
        else if(!isDeleting){
            setDelta(90);
        }
    }
    

    return (
        <div>
            <h1 className="pl-10 pt-10 text-lg">{"- "}{text}</h1>

            <div className='pt-20 pl-40 container mx-auto'>
                <div id="slideContainer" className="relative overflow-hidden">
                    <img id="slideImage" src={goose} alt="Goose Cartoon" width={100} height={100} />
                </div>
            </div>

            <div className='container px-5, py-10 mx-auto text-center lg:px-40'>

                {/*Title*/}
                <h1 className='text-7xl pb-10 font-display'>
                    Goock Games
                </h1>

                {/*Buttons*/}
                <div className='inline-flex gap-x-4 pb-4'>
                    <Link to='/games'>
                        <button className='py-2 px-4 bg-blue-400 text-white text-xl hover:bg-blue-500 rounded border-b-4 border-blue-600 hover:border-blue-800'>
                            View Games
                        </button>
                    </Link>

                    <Link to='/leaderboards'>
                        <button className='py-2 px-4 bg-blue-400 text-white text-xl hover:bg-blue-500 rounded border-b-4 border-blue-600 hover:border-blue-800'>
                            View Leaderboards
                        </button>
                    </Link>
                </div>
                <br />
                <HashLink smooth to='/#instructions'>
                    <button className='py-2 px-4 bg-red-400 text-white text-xl hover:bg-red-500 rounded border-b-4 border-red-600 hover:border-red-800'>
                        How to Play
                    </button>
                </HashLink>
                
            </div>
        </div>
    );

}

export default Main;