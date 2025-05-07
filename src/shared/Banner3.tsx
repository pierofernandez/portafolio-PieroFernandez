import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export const Banner3 = () => {
    const cardData = [
        {
            title: "Brillaré ",
            description: "Landing page para un centro de terapia física y rehabilitación.",
            moreInfo: "Usamos tecnologías como NodeJs, Angular, Flowbite, TailwindCSS, Express y Nodemailer para gestionar citas.",
            image: "img/brillare.png",
        },
        {
            title: "El Tiocoins",
            description: "Ecommerce de Monedas de EA FC 25.",
            moreInfo: "Usamos (React, tailwindcss, NodeJs, AOS, Flutter, Supabase, Tiptap, Framer-Motion, react-hook-form, react-hot-toast, zod, Tyscript) Integramos pasarela de pago PayPal. Ideal para PYMEs que quieren crecer online.",
            image: "img/eltiocoins.png",
        },
        {
            title: "Portara Cuadros",
            description: "Desarrollamos un sitio web para venta de cuadros personalizados.",
            moreInfo: "En este proyecto utilizamos HTML y CSS para crear un aspecto visual único.",
            image: "img/portara.png",
        },
        {
            title: "Curso Udemy",
            description: "Primer proyecto de Portafolio en Udemy.",
            moreInfo: "Creamos un portafolio básico utilizando HTML y CSS.",
            image: "img/udemy.png",
        },
        {
            title: "CRUD Aduanas",
            description: "Creamos un CRUD para gestionar registros de aduanas.",
            moreInfo: "Utilizamos plataforma de servicios en la nube AWS (Lambda, DynamoDB, Netlify, IAM, API Gateway) además de React, JSX, Boostrap.",
            image: "img/aduanas.png",
        },
        {
            title: "Videojuegos (Proximamente)",
            description: "Sitio web para retas oponentes en distintos juegos en línea apostando dinero.",
            moreInfo: "Utilizaremos tecnologías como NodeJs, Express, MongoDB, React, Tyscript y TailwindCSS, pasarelas de pago con Stripe.",
            image: "img/versus.png",
        },
        {
            title: "Parkea YA! (Proximamente)",
            description: "Sistema web Administrativo para gestionar estacionamientos.",
            moreInfo: "Utilizaremos tecnologías como NodeJs, SQLserver Managment, React, JSX y TailwindCSS.",
            image: "img/parking.png",
        },
        {
            title: "App Adopción (Proximamente)",
            description: "Aplicación móvil para adopción de mascotas Android y IOS.",
            moreInfo: "Utilizaremos React Native, SQLite",
            image: "img/adopción.png",
        }
    ];

    const [showMore, setShowMore] = useState<boolean[]>(Array(cardData.length).fill(false));

    const toggleShowMore = (index: number) => {
        setShowMore((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };
    return (

        <section id="portafolio" >
            <h2 className="text-white px-5 font-Poppins text-center mt-24 mb-16 md:text-2xl text-sm">
                PROYECTOS
            </h2>

            <div className="flex items-center justify-center">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        {cardData.map((card, index) => (
                            <div key={index} className="rounded-lg border-s-slate-600 p-4 transition-all duration-300 shadow-md hover:shadow-lg">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 rounded-md object-cover"
                                />
                                <div className="px-1 py-4">
                                    <div className="font-bold text-xl mb-2">{card.title}</div>
                                    <p className="text-gray-700 text-base">{card.description}</p>
                                </div>
                                <button
                                    onClick={() => toggleShowMore(index)}
                                    className="flex items-center text-blue-500 hover:underline px-1 py-2"
                                >
                                    {showMore[index] ? "Ver menos" : "Ver más"}
                                    {showMore[index] ? (
                                        <BiChevronUp className="ml-1 w-4 h-4" />
                                    ) : (
                                        <BiChevronDown className="ml-1 w-4 h-4" />
                                    )}
                                </button>
                                {showMore[index] && (
                                    <div className="px-1 py-2 text-gray-700 text-sm transition-all duration-300">
                                        {card.moreInfo}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <h2 className="text-white px-5 font-Poppins text-center mt-24 mb-16 md:text-2xl text-sm">CAMPO LABORAL</h2>

            <div className="bg-black text-white flex flex-col justify-center items-center px-5 sm:px-8 lg:px-16 xl:px-32 mb-56">
                <div className="w-full max-w-5xl p-5">
                    {/* Google */}
                    <div className="flex flex-col space-y-2 mb-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img src="img/logobizlinks.png" alt="" className="w-16 h-16" />
                                <h2 className="text-base sm:text-lg font-bold">Practicante Full Stack - Bizlinks</h2>
                            </div>
                            <span className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-0">Enero - Marzo 2025</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm text-justify">
                            <li className="mb-4">Desarrollé y probé funcionalidades en aplicaciones web utilizando JavaScript, React y herramientas como
                                Postman para la verificación de APIs, optimizando la experiencia del usuario.
                            </li>
                            <li className="mb-4">
                                Gestioné bases de datos NoSQL con MongoDB, asegurando una estructura eficiente y consultas rápidas para
                                entornos dinámicos.
                            </li>
                            <li className="mb-4">
                                Colaboré en la integración y consumo de APIs REST, asegurando la correcta comunicación entre servicios y
                                componentes del sistema.
                            </li>
                            <li className="mb-4">
                                Fortalecí habilidades de trabajo en equipo y solución de problemas en contextos reales de desarrollo ágil.
                            </li>
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2 mb-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img src="img/Cineplanetlogo.png" alt="" className="w-16 h-14" />
                                <h2 className="text-base sm:text-lg font-bold">Asesor Multifuncional - Cineplanet</h2>
                            </div>
                            <span className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-0">Octubre - Diciembre 2024</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm text-justify">
                            <li className="mb-4">Empresa líder en la industria del entretenimiento, especializada en ofrecer soluciones de experiencia para clientes y
                                operaciones.
                            </li>
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

