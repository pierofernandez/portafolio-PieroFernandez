export const Banner4 = () => {
    return (
        <section id="skills" className="w-full pb-10 md:pb-28 overflow-hidden bg-transparent text-white">
            <div className="w-full mb-10 md:mb-24">
                <img
                    src="/img/programar.svg"
                    alt="Skills Banner"
                    className="w-full h-auto object-contain"
                    data-aos="fade-down"
                />
            </div>
            <div className="max-w-screen-2xl mx-auto px-5 relative z-10">
                <h2 data-aos="fade-down" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold font-Poppins text-left mb-16 md:mb-24 text-3xl md:text-6xl tracking-wider uppercase drop-shadow-md">
                    Skills
                </h2>

                <div className="flex flex-col gap-20 md:gap-32 w-full">

                    {/* Sección 1: Uso Diario */}
                    <div className="flex flex-col gap-10 w-full">
                        <h3 className="text-white font-Poppins text-center text-xl md:text-3xl font-light tracking-tight">
                            Uso <span className="font-semibold text-blue-300">diario</span>
                        </h3>

                        {/* Carousel Container */}
                        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/WorkingTechs.png" alt="Working Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/WorkingTechs.png" alt="Working Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/WorkingTechs.png" alt="Working Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/WorkingTechs.png" alt="Working Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/WorkingTechs.png" alt="Working Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/WorkingTechs.png" alt="Working Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sección 2: Otros Proyectos */}
                    <div className="flex flex-col gap-10 w-full">
                        <h3 className="text-white font-Poppins text-center text-xl md:text-3xl font-light tracking-tight">
                            Otros <span className="font-semibold text-purple-300">proyectos</span>
                        </h3>

                        {/* Carousel Container */}
                        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/ProjectsTechs.png" alt="Projects Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/ProjectsTechs.png" alt="Projects Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/ProjectsTechs.png" alt="Projects Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/ProjectsTechs.png" alt="Projects Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/ProjectsTechs.png" alt="Projects Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                                    <li><img src="img/ProjectsTechs.png" alt="Projects Techs" className="h-16 md:h-24 object-contain" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}