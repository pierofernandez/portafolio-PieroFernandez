import Aos from "aos";
import { useEffect } from "react";
import { FaFigma, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 800, once: true });
    }, []);

    const tiktokUrl = 'https://www.tiktok.com/@pietrosky04';
    const instagramUrl = 'https://www.instagram.com/byte_p1er0';
    const linkedinUrl = 'https://www.linkedin.com/in/piero-fern%C3%A1ndez/';
    const githubUrl = 'https://github.com/pierofernandez';
    const figmaUrl = 'https://www.figma.com/@pierofernandez';


    return (
        <section id="home">
            <div className="bg-black text-white overflow-hidden md:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] md:from-gray-900 md:via-[#050505] md:to-black min-h-screen flex flex-col justify-center relative">
                {/* Contenedor principal con Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-14 max-w-screen-2xl mx-auto items-center text-center md:text-left pt-20 md:pt-0 px-5 md:px-10">
                    {/* Columna izquierda */}
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="800" className="md:ml-20 flex flex-col items-center md:items-start">
                        <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 px-8 rounded-full border-none text-xl font-bold items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer hidden md:flex hover:scale-105 transition-transform">
                            👋 Saludos!
                        </button>
                        <h1 className="text-4xl md:text-7xl md:mt-8 mb-5 md:mb-8 font-bold leading-tight mt-0 font-raleway tracking-tight">
                            Piero <span className="inline md:hidden"> </span>
                            <span className="hidden md:inline"><br /></span>Fernández
                        </h1>

                        <p className="text-gray-400 md:mb-10 md:text-xl text-sm mb-8 font-light tracking-wide">
                            Full Stack Developer Jr
                        </p>
                        <div className="flex gap-4 text-gray-400 justify-center md:justify-start">
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                                <FaLinkedin size={35} />
                            </a>
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                                <FaGithub size={35} />
                            </a>
                        </div>
                    </div>

                    {/* Columna central */}
                    <div data-aos="zoom-in-up" data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="600" className="flex flex-col items-center justify-center">
                        <div className="relative mt-8 md:mt-24 md:mb-12 mb-10 flex justify-center group">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>

                            {/* Imagen */}
                            <img
                                src="img/pieroanimado.jpg"
                                alt="Profile"
                                className="md:rounded-full rounded-3xl w-72 h-72 md:w-96 md:h-96 relative z-10 shadow-2xl object-cover ring-1 ring-white/10"
                            />
                        </div>

                    </div>

                    {/* Columna derecha */}
                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="800" className="flex flex-col items-center md:items-end">
                        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-5 mb-5 md:-mr-20 xl:mr-10">
                            <a
                                href="/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm md:text-lg py-4 px-8 md:py-4 md:px-10 border-none rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Contáctame
                            </a>
                            <a
                                href="img/cv_pierofernandez2025.pdf"
                                download="cv_pierofernandez2025.pdf"
                                className="text-sm md:text-lg py-4 px-8 md:py-4 md:px-10 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm text-white text-center hover:bg-white/10 transition-all font-medium"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </div>




                {/* Redes sociales */}
                <div>
                    {/* Diseño para pantallas grandes */}
                    <div data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-in-sine" className="hidden md:flex flex-wrap justify-center gap-10 mt-20 mb-10">
                        {[
                            { src: "img/tiktok.png", count: "3.4k", alt: "TikTok", href: tiktokUrl },
                            { src: "img/github.svg.svg", count: "20", alt: "GitHub", href: githubUrl },
                            { src: "img/instagram.png", count: "2.6k", alt: "Instagram", href: instagramUrl },
                            { src: "img/linkedin.svg.svg", count: "08", alt: "LinkedIn", href: linkedinUrl },
                            { src: "img/figma.svg.svg", count: "20", alt: "Figma", href: figmaUrl }
                        ].map((social, index) => (
                            <div key={index} className="text-center group cursor-pointer">
                                <a href={social.href} target="_blank" rel="noopener noreferrer">
                                    <div className="bg-white/5 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 ease-out border border-white/5 shadow-lg">
                                        <img src={social.src} alt={social.alt} className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </a>
                                <p className="text-gray-500 text-xs font-medium tracking-widest uppercase group-hover:text-white transition-colors delay-100">{social.alt}</p>
                            </div>
                        ))}
                    </div>

                    {/* Diseño para pantallas pequeñas */}
                    <div className="grid grid-cols-3 gap-2 md:hidden mt-5 mb-10 px-2">
                        {[
                            { icon: <FaGithub size={28} />, name: "GitHub", user: "@pierofernandezz21", bg: "bg-gray-800", cols: "col-span-3", href: githubUrl },
                            { icon: <FaFigma size={28} />, name: "Figma", user: "@pierofernandezz21", cols: "col-span-2 row-span-2", href: figmaUrl, bg: "bg-figma-gradient" },
                            { icon: <FaTiktok size={28} />, name: "Tiktok", user: "@pietrosky04", bg: "bg-gray-950 text-white", cols: "col-span-1", href: tiktokUrl },
                            { icon: <FaLinkedin size={28} />, name: "LinkedIn", user: "@pierofhernandez", bg: "bg-blue-600", cols: "col-span-1", href: linkedinUrl },
                            { icon: <FaInstagram size={28} />, name: "Instagram", user: "@piero_fernandezz", bg: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500", cols: "col-span-3", href: instagramUrl },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-aos="fade-up"
                                data-aos-delay={`${index * 150}`} // 👈 delay progresivo
                                data-aos-duration="600"
                                className={`relative ${social.bg} p-2.5 rounded-2xl flex flex-col items-start justify-between w-full text-white ${social.cols}`}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="p-1 rounded-full bg-opacity-30">{social.icon}</div>
                                    <span className="text-base">🔗</span>
                                </div>
                                <div className="mt-1.5">
                                    <h3 className="text-sm font-semibold">{social.name}</h3>
                                    <p className="text-[10px]">{social.user}</p>
                                </div>
                            </a>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
};
