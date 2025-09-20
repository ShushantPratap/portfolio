import React, { useState, useEffect, useRef } from "react"
import { Github, CodeXml, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Carousel({
    slides = [],
    autoSlide = false,
    autoSlideInterval = 7000
}) {

    const [index, setIndex] = useState(0);

    const prevSlide = useRef(null);
    const nextSlide = useRef(null);

    
    useEffect(() => {
        const timeAutoNext = autoSlideInterval;
        let runNextAuto;        

        if(autoSlide){
            runNextAuto = setTimeout(() => {
                nextSlide.current.click();
            }, timeAutoNext);
        }

        prevSlide.current.onclick = () => {
            setIndex(prev => prev === 0 ? slides.length - 1 : prev - 1);
            timeOut();
        }
        nextSlide.current.onclick = () => {
            setIndex(prev => prev === slides.length - 1 ? 0 : prev + 1);
            timeOut();
        }

        function timeOut() {
            if (!autoSlide) return;

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextSlide.current.click();
            }, timeAutoNext);
        }
        return () => clearTimeout(runNextAuto);
    }, []);

    return (
        <div className="carousel w-full h-[92vh] overflow-hidden relative md:h-[80vh]">
            <div className={`list flex h-full transition-all ease-in-out duration-500 relative`} style={{ width: `${slides.length * 100}%`, left: `-${index * 100}%` }}>
                {slides.map(slide =>
                    <div className="item w-full bg-black flex flex-col-reverse justify-end md:flex-row md:p-1.5 md:items-center" key={slide.id}>
                        <div className="sliderContent flex flex-col p-3 text-gray-100 md:flex-1/2 md:p-5">
                            <h1 className="title text-3xl tracking-wide font-bold text-theme mb-3 md:text-5xl">{slide.title}</h1>
                            <p className="des">{slide.description}</p>
                            <div className="projectTech flex flex-wrap gap-2 mt-5">
                                {slide.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full font-medium capitalize md:text-sm"
                                        children={tech}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-5 md:flex-1/2 md:p-4 md:mt-0 md:items-center">
                            <div className="w-fit p-2 sm:pt-6 md:pt-0">
                                <div className="sliderImage w-full border-3 border-gray-400 rotate-10 scale-92 md:100" style={{ background: `linear-gradient(#0000009d, #000000c6), url(${slide.image})` }}>
                                    <div className="border-3 border-[#421156] rotate-175 scale-105 md:100" style={{ backgroundImage: `linear-gradient(#0000009d, #000000c6),url(${slide.image})` }}>
                                        <div className="rotate-175 overflow-hidden rounded-sm border-3 border-theme scale-105 md:scale-100">
                                            <img className="w-full h-full object-cover" src={slide.image} alt={slide.title} />
                                        </div>
                                    </div>
                                </div>
                                <div className="sliderBtn flex gap-2 my-4 md:m-4">
                                    <Link
                                        to={slide.githubLink}
                                        className="flex items-center p-2 px-5 border-2 text-black bg-gray-100 border-gray-100 rounded-xs transition-colors duration-300 hover:bg-transparent hover:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github size={18} className="mr-2" />
                                        GitHub
                                    </Link>
                                    <Link
                                        to={`/preview/${slide.id}`}
                                        target="_blank"
                                        className="flex items-center p-2 px-5 border-2 text-white border-gray-100 rounded-xs transition-colors duration-300 hover:bg-gray-100 hover:text-black"
                                    >
                                        <CodeXml size={18} className="mr-2" />
                                        Live Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button ref={prevSlide} className="absolute top-[50%] transform translate-y-[-50%] left-2 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                <ChevronLeft />
            </button>
            <button ref={nextSlide} className="absolute top-[50%] transform translate-y-[-50%] right-2 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                <ChevronRight />
            </button>
            <div className="w-full flex justify-center items-center absolute bottom-2">
                {slides.map((slide, i) => index === i
                    ? <button className="w-5.5 h-2 md:w-8 md:h-2.5 m-[3px] md:m-1 rounded-full transition-all duration-300 bg-[#9b59b6]" key={slide.id + i}></button>
                    : <button
                        onClick={() => setIndex(i)}
                        className="w-3.5 h-1 md:w-5 md:h-1.5 m-[3px] md:m-1 bg-[#421156] dark:bg-gray-50 rounded-full cursor-pointer transition-all duration-300 hover:w-5.5 hover:h-2 md:hover:w-8 md:hover:h-2.5 hover:bg-[#9b59b6]"
                        key={slide.id + i}
                    ></button>
                )}
            </div>
        </div>
    );

}

export default Carousel;