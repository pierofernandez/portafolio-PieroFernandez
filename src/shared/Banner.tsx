import { FaBirthdayCake, FaFigma, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";

export const Banner = () => {
    return (
        <div className="bg-black text-white min-h-screen p-5">
            {/* Contenedor principal con Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-10 mt-5 items-center text-center md:text-left">
                {/* Columna izquierda */}
                <div className="md:ml-36">
                    <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-4 px-10 rounded-full border-none text-2xl font-bold items-center gap-2 shadow-lg cursor-pointer mx-auto md:mx-0 hidden md:flex">
                        👋 Saludos!
                    </button>
                    <h1 className="text-3xl md:text-5xl md:mt-10 mb-5 md:mb-10 font-bold leading-none mt-0 font-raleway">
                        Piero <span className="inline md:hidden"> </span>
                        <span className="hidden md:inline"><br /></span>Fernández
                    </h1>

                    <p className="text-gray-400 md:mb-8 md:text-lg text-xs mb-8">Front-end Developer Jr - Data Analyst Jr</p>
                    <div className="flex gap-2 text-gray-400 justify-center md:justify-start">
                        <FaLinkedin size={30} />
                        <FaGithub size={30} />
                    </div>
                </div>

                {/* Columna central */}
                <div>
                    <div className="relative mt-8 md:mt-24 md:mb-12 mb-10 flex justify-center md:justify-center">
                        {/* Imagen */}
                        <img
                            src="img/pieroanimado.jpg"
                            alt="Profile"
                            className="md:rounded-full rounded-3xl w-80 h-80 md:w-80 md:h-80 relative z-10"
                        />
                    </div>

                    <p className="flex items-center justify-center gap-4 font-light mt-0 mb-10 md:text-xl text-xs">
                        <FaMapMarkerAlt /> Lima, Perú <FaBirthdayCake className="ml-0" /> Joined on Jun 21, 2004
                    </p>
                </div>

                {/* Columna derecha */}
                <div className="md:text-right">
                    <div className="flex flex-row md:flex-col items-center justify-center w-full md:items-end md:w-auto gap-6 mb-5 md:gap-4 md:mr-36">
                        <button className="text-sm md:text-base py-4 px-8 md:py-4 md:px-12 border-none rounded-full bg-white text-black">
                            Contáctame
                        </button>
                        <button className="text-sm md:text-base py-4 px-8 md:py-4 md:px-11 border-2 border-white rounded-full bg-black text-white">
                            Descargar CV
                        </button>
                    </div>
                </div>
            </div>

            {/* Redes sociales */}
            <div>
                {/* Diseño para pantallas grandes */}
                <div className="hidden md:flex flex-wrap justify-center gap-6 mt-8">
                    {[
                        { src: "img/tiktok.png", count: "3.4k", alt: "TikTok" },
                        { src: "img/github.svg.svg", count: "20", alt: "GitHub" },
                        { src: "img/instagram.png", count: "2.6k", alt: "Instagram" },
                        { src: "img/linkedin.svg.svg", count: "20", alt: "LinkedIn" },
                        { src: "img/figma.svg.svg", count: "20", alt: "Figma" }
                    ].map((social, index) => (
                        <div key={index} className="text-center w-1/3 md:w-auto">
                            <div className="bg-gray-800 bg-opacity-20 p-4 rounded-xl inline-flex items-center justify-center mb-2">
                                <img src={social.src} alt={social.alt} className="w-[40px] h-[40px] object-contain" />
                            </div>
                            <p>{social.count}</p>
                        </div>
                    ))}
                </div>

                {/* Diseño para pantallas pequeñas */}
                <div className="grid grid-cols-3 gap-2 md:hidden mt-5 mb-10 px-2">
                    {[
                        { icon: <FaGithub size={28} />, name: "GitHub", user: "@pierofernandezz21", bg: "bg-gray-900", cols: "col-span-3" },
                        { icon: <FaFigma size={28} />, name: "Figma", user: "@pierofernandezz21", bg: "bg-gray-800", cols: "col-span-2 row-span-2" },
                        { icon: <FaTiktok size={28} />, name: "Tiktok", user: "@pietrosky04", bg: "bg-white text-black", cols: "col-span-1" },
                        { icon: <FaLinkedin size={28} />, name: "LinkedIn", user: "@pierofhernandez", bg: "bg-blue-600", cols: "col-span-1" },
                        { icon: <FaInstagram size={28} />, name: "Instagram", user: "@piero_fernandezz", bg: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500", cols: "col-span-3" }
                    ].map((social, index) => (
                        <div key={index} className={`relative ${social.bg} p-2.5 rounded-2xl flex flex-col items-start justify-between w-full text-white ${social.cols}`}>
                            <div className="flex items-center justify-between w-full">
                                <div className="p-1 rounded-full bg-opacity-30">{social.icon}</div>
                                <a href="#" className="text-base">🔗</a>
                            </div>
                            <div className="mt-1.5">
                                <h3 className="text-sm font-semibold">{social.name}</h3>
                                <p className="text-[10px]">{social.user}</p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
};
