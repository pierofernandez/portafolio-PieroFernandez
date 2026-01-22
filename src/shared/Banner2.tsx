import { useRef } from 'react';
import { IoPersonOutline, IoRocketOutline, IoChatbubbleEllipsesOutline, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { ArrowBigRight } from 'lucide-react';

export const Banner2 = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350; // Approximates card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="sobre-mi" className="w-full py-20 md:py-32 bg-transparent relative overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-5 relative z-10">
                {/* Title Left Aligned */}
                <h2 data-aos="fade-down" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold font-Poppins text-left mb-16 md:mb-24 text-3xl md:text-6xl tracking-wider uppercase drop-shadow-md">
                    Sobre Mí
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Image Section - Clean Apple Style */}
                    <div data-aos="fade-right" className="w-full lg:w-[45%] flex justify-center lg:justify-start">
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                            <img
                                src="img/terno.png"
                                alt="Piero Fernandez"
                                className="relative w-full max-w-lg h-[400px] md:h-[600px] object-cover rounded-[40px] shadow-2xl transition transform duration-700 group-hover:scale-[1.01]"
                            />
                        </div>
                    </div>

                    {/* Content Section - Name & Carousel */}
                    <div data-aos="fade-left" className="w-full lg:w-[55%] text-left space-y-10">

                        {/* Name & Controls Header */}
                        <div className="flex justify-between items-end">
                            <div className="space-y-1 text-left">
                                <h1 className="text-5xl md:text-7xl font-bold text-white font-Poppins tracking-tighter leading-tight drop-shadow-lg">
                                    Piero Alejandro
                                </h1>
                                <h3 className="text-2xl md:text-4xl font-medium text-gray-400 font-Poppins tracking-tight">
                                    Fernández Blas
                                </h3>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex gap-4 pb-2">
                                <button
                                    onClick={() => scroll('left')}
                                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all active:scale-95 group"
                                    aria-label="Previous card"
                                >
                                    <IoChevronBackOutline size={24} className="text-white opacity-70 group-hover:opacity-100" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all active:scale-95 group"
                                    aria-label="Next card"
                                >
                                    <IoChevronForwardOutline size={24} className="text-white opacity-70 group-hover:opacity-100" />
                                </button>
                            </div>
                        </div>

                        {/* Interactive Carousel Cards */}
                        <div ref={scrollRef} className="w-full overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory flex gap-5 scroll-smooth">

                            {/* Card 1: Who Am I */}
                            <div className="snap-center shrink-0 w-[300px] md:w-[350px] p-8 rounded-[32px] bg-white/5 backdrop-blur-3xl border border-white/5 hover:bg-white/10 transition-all duration-500 group flex flex-col justify-between min-h-[250px]">
                                <div>
                                    <div className="p-3 bg-gray-500/20 rounded-2xl w-fit text-gray-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <IoPersonOutline size={28} />
                                    </div>
                                    <h4 className="text-white font-semibold text-2xl tracking-tight mb-3">¿Quién Soy?</h4>
                                    <p className="text-gray-400 text-[15px] leading-relaxed font-light">
                                        Un desarrollador apasionado por la fusión entre diseño y código. Transformo ideas abstractas en interfaces vivas.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Why This Career */}
                            <div className="snap-center shrink-0 w-[300px] md:w-[350px] p-8 rounded-[32px] bg-white/5 backdrop-blur-3xl border border-white/5 hover:bg-white/10 transition-all duration-500 group flex flex-col justify-between min-h-[250px]">
                                <div>
                                    <div className="p-3 bg-gray-500/20 rounded-2xl w-fit text-gray-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <IoRocketOutline size={28} />
                                    </div>
                                    <h4 className="text-white font-semibold text-2xl tracking-tight mb-3">¿Por qué esto?</h4>
                                    <p className="text-gray-400 text-[15px] leading-relaxed font-light">
                                        Crear tecnología es como magia moderna. La capacidad de impactar vidas globalmente con unas líneas de código me fascina.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Doubts */}
                            <div className="snap-center shrink-0 w-[300px] md:w-[350px] p-8 rounded-[32px] bg-white/5 backdrop-blur-3xl border border-white/5 hover:bg-white/10 transition-all duration-500 group flex flex-col justify-between min-h-[250px]">
                                <div>
                                    <div className="p-3 bg-gray-500/20 rounded-2xl w-fit text-gray-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <IoChatbubbleEllipsesOutline size={28} />
                                    </div>
                                    <h4 className="text-white font-semibold text-2xl tracking-tight mb-3">¿Consultas?</h4>
                                    <p className="text-gray-400 text-[15px] leading-relaxed font-light mb-4">
                                        Estoy disponible para nuevos retos. Si tienes una idea, hablemos.
                                    </p>
                                </div>
                                <a href="#contacto" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                                    Contáctame &rarr;
                                </a>
                            </div>

                        </div>

                        <div className="pt-2 flex justify-start pl-2 items-center gap-2 text-gray-500 text-xs font-light tracking-wide opacity-60">
                            <span>Desliza para ver más</span>
                            <ArrowBigRight size={14} className="mb-[2px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
