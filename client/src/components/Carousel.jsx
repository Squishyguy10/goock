import React, {useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';

function Carousel({slides}) {
    let [current, setCurrent] = useState(0);
    
    let prevSlide = () => {
        current === 0 ? setCurrent(slides.length-1) : setCurrent(current-1);
    };

    let nextSlide = () => {
        current === slides.length-1 ? setCurrent(0) : setCurrent(current+1);
    };

    return (
        <div className="overflow-hidden relative">
            <div className={`flex transition ease-out duration-400`} style={{ transform: `translateX(-${current*100}%)` }}>
                {slides.map((s) => { 
                    return (
                        <> 
                            <Link to={s.page}>
                                <button className='absolute ml-[43%] mt-[15%] top-0 justify-center py-2 px-4 bg-gray-200 text-gray-800 text-xl hover:bg-gray-400 rounded border-b-4 border-gray-400 hover:border-gray-600'>
                                    {s.title}
                                </button>
                            </Link>
                            <img src={s.image} alt={"games"} className=""/>  
                        </>
                    );
                })}
            </div>

            <button onClick={prevSlide} className="text-red-500 absolute top-[50%]">
                <ArrowBackIosNewIcon />
            </button>
            <button onClick={nextSlide} className="text-red-500 absolute top-[50%] left-[96%]">
                <ArrowForwardIosIcon />
            </button>

            <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => { setCurrent(i); }}
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5 ${ i === current ? "bg-purple-500" : "bg-gray-500" }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;