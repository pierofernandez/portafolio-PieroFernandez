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
            <div className="bg-black text-white p-5 overflow-hidden">
                {/* Contenedor principal con Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 max-w-screen-2xl mx-auto mt-5 items-center text-center md:text-left">
                    {/* Columna izquierda */}
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="800" className="md:ml-20 ">
                        <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-4 px-10 rounded-full border-none text-2xl font-bold items-center gap-2 shadow-lg cursor-pointer mx-auto md:mx-0 hidden md:flex">
                            👋 Saludos!
                        </button>
                        <h1 className="text-3xl md:text-5xl md:mt-10 mb-5 md:mb-10 font-bold leading-none mt-0 font-raleway">
                            Piero <span className="inline md:hidden"> </span>
                            <span className="hidden md:inline"><br /></span>Fernández
                        </h1>

                        <p className="text-gray-400 md:mb-8 md:text-lg text-xs mb-8">
                            Full Stack Developer Jr
                        </p>
                        <div className="flex gap-2 text-gray-400 justify-center md:justify-start">
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} />
                            </a>
                        </div>
                    </div>

                    {/* Columna central */}
                    <div data-aos="zoom-in-up" data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="600" className="flex flex-col items-center justify-center">
                        <div className="relative mt-8 md:mt-24 md:mb-12 mb-10 flex justify-center">
                            {/* Imagen */}
                            <img
                                src="img/pieroanimado.jpg"
                                alt="Profile"
                                className="md:rounded-full rounded-3xl w-72 h-72 md:w-80 md:h-80 relative z-10"
                            />
                        </div>

                    </div>

                    {/* Columna derecha */}
                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="800" className="flex flex-col items-center md:items-end">
                        <div className="flex flex-wrap justify-center md:justify-end  gap-4 md:gap-4 mb-5 md:-mr-52 xl:mr-36">
                            <a
                                href="/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm md:text-base py-4 px-8 md:py-4 md:px-12 border-none rounded-full bg-white text-black"
                            >
                                Contáctame
                            </a>
                            <a
                                href="img/cv_pierofernandez2025.pdf"
                                download="cv_pierofernandez2025.pdf"
                                className="text-sm md:text-base py-4 px-8 md:py-4 md:px-11 border-2 border-white rounded-full bg-black text-white text-center"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </div>




                {/* Redes sociales */}
                <div>
                    {/* Diseño para pantallas grandes */}
                    <div data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-in-sine" className="hidden md:flex flex-wrap justify-center gap-6 mt-28">
                        {[
                            { src: "img/tiktok.png", count: "3.4k", alt: "TikTok", href: tiktokUrl },
                            { src: "img/github.svg.svg", count: "20", alt: "GitHub", href: githubUrl },
                            { src: "img/instagram.png", count: "2.6k", alt: "Instagram", href: instagramUrl },
                            { src: "img/linkedin.svg.svg", count: "20", alt: "LinkedIn", href: linkedinUrl },
                            { src: "img/figma.svg.svg", count: "20", alt: "Figma", href: figmaUrl }
                        ].map((social, index) => (
                            <div key={index} className="text-center w-1/3 md:w-auto">
                                <a href={social.href} target="_blank" rel="noopener noreferrer">
                                    <div className="bg-gray-800 bg-opacity-20 p-4 rounded-xl inline-flex items-center justify-center mb-2">
                                        <img src={social.src} alt={social.alt} className="w-[40px] h-[40px] object-contain" />
                                    </div>
                                </a>
                                <p>{social.count}</p>
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
