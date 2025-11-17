import React, { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectSlider({
    slides,
    autoSlide = false,
    autoSlideInterval = 7000
}) {

    const [index, setIndex] = useState(0);
    const [scrollWidth, setScrollWidth] = useState(0);

    const prevSlide = useRef(null);
    const nextSlide = useRef(null);
    const slideRef = useRef(null);

    useEffect(() => {
        const scrollWidth = slideRef.current.scrollWidth;
        setScrollWidth(scrollWidth);

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
        <>
        <div className="w-full h-[95vh] overflow-hidden relative">
            <div className={`h-[95%] inline-flex transition-all ease-in-out duration-500 relative`} ref={slideRef} style={{left: `-${scrollWidth/slides.length*index}px`}}>
                {slides}
            </div>
            <button ref={prevSlide} className="absolute top-[50%] transform translate-y-[-50%] left-2 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                <ChevronLeft />
            </button>
            <button ref={nextSlide} className="absolute top-[50%] transform translate-y-[-50%] right-2 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                <ChevronRight />
            </button>
        </div>
        </>
    );


}

export default ProjectSlider;