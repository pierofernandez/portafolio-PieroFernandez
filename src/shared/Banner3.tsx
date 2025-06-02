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
            title: "Revista Digital para personas con Ceguera",
            description: "Diseñamos una revista digital inclusiva orientada a personas con ceguera, enfocándonos en la accesibilidad y experiencia auditiva.",
            moreInfo: "Utilizaremos tecnologías como NodeJs, React, javascript, Nodemailer,Web Speech API y TailwindCSS",
            image: "img/revistadigital.png",
        },

        {
            title: "CRUD Liquidaciones de Aduanas",
            description: "Creamos un CRUD para gestionar registros de aduanas.",
            moreInfo: "Utilizamos plataforma de servicios en la nube AWS (Lambda, DynamoDB, Netlify, IAM, API Gateway) además de React, JSX, Boostrap.",
            image: "img/aduanas.png",
        },
        {
            title: "Tienda de Videojuegos",
            description: "En esto proyecto colaborativo del curso de Estructura de datos Desarrollamos un sistema para cliente y administrador de una tienda de videojuegos",
            moreInfo: "Utilizamos C#, usando la consola como interfaz. El proyecto incluye funcionalidades CRUD completas para gestionar el inventario, registrar ventas, y mantener el control de productos de forma eficiente.",
            image: "img/gamestop.jpeg",
        },
        {
            title: "Portara Cuadros",
            description: "Desarrollamos un sitio web para venta de cuadros personalizados.",
            moreInfo: "En este proyecto utilizamos HTML y CSS para crear un aspecto visual único.",
            image: "img/portara.png",
        },
        {
            title: "Reta 1vs1 de Videojuegos (En proceso)",
            description: "Sitio web para retas oponentes en distintos juegos en línea apostando dinero real.",
            moreInfo: "Utilizaremos tecnologías como NodeJs, Express, MongoDB, React, Tyscript y TailwindCSS, pasarelas de pago con Stripe.",
            image: "img/versus.png",
        },
        {
            title: "Parkea YA! (En proceso)",
            description: "Sistema web Administrativo para gestionar estacionamientos.",
            moreInfo: "Utilizaremos tecnologías como NodeJs, SQLserver Managment, React, JSX y TailwindCSS.",
            image: "img/parking.png",
        },
        {
            title: "Aplicación Mobile de Adopción (En proceso)",
            description: "Aplicación móvil para adopción de mascotas Android y IOS.",
            moreInfo: "Utilizaremos React Native, SQLite",
            image: "img/adopción.png",
        }
    ];

    const experiencias = [
        {
            empresa: "ONG Progresemos Juntos",
            logo: "img/progresemos.png",
            cargo: "Desarrollador Web",
            fecha: "Mayo - Actual 2025",
            items: [
                "Progresemos Juntos es una organización nacional sin fines de lucro con sede principal en la Región de Arequipa.",
                "Desarrollo de interfaces de usuario modernas y adaptables usando React, TypeScript y TailwindCSS.",
                "Diseño y gestión a la base de datos MongoDB, asegurando eficiencia en la estructura y consultas. ",
                "Implementación colaborativa en funcionalidades clave del flujo de compra, incluyendo autenticación, carrito y pagos.  ",
                "Colaboró activamente con el equipo de diseño y producto para iterar mejoras y nuevas funcionalidades. ",

            ],
        },
        {
            empresa: "Bizlinks",
            logo: "img/logobizlinks.png",
            cargo: "Practicante Full Stack",
            fecha: "Enero - Marzo 2025",
            items: [
                "Desarrollé y probé funcionalidades en aplicaciones web utilizando JavaScript, React y herramientas como Postman para la verificación de APIs, optimizando la experiencia del usuario.",
                "Gestioné bases de datos NoSQL con MongoDB, asegurando una estructura eficiente y consultas rápidas para entornos dinámicos.",
                "Colaboré en la integración y consumo de APIs REST, asegurando la correcta comunicación entre servicios y componentes del sistema.",
                "Fortalecí habilidades de trabajo en equipo y solución de problemas en contextos reales de desarrollo ágil.",
            ],
        },
        {
            empresa: "Cineplanet",
            logo: "img/Cineplanetlogo.png",
            cargo: "Asesor Multifuncional",
            fecha: "Octubre - Diciembre 2024",
            items: [
                "Empresa líder en la industria del entretenimiento, especializada en ofrecer soluciones de experiencia para clientes y operaciones.",
            ],
        },
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
        <>

            <section id="portafolio" >
                <h2 data-aos="fade-down-left" className="text-white px-5 font-Poppins text-center mt-24 mb-16 md:text-2xl text-sm">
                    PROYECTOS
                </h2>

                <div className="flex items-center justify-center">
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100} // ⏱️ delay incremental
                                    data-aos-duration="800" // ⌛ duración opcional
                                    data-aos-anchor-placement="top-bottom"
                                    className="rounded-lg border-s-slate-600 p-4 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
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
            </section>

            <section id="experience" >

                <h2 data-aos="fade-down-left" className="text-white px-5 font-Poppins text-center mt-24 mb-16 md:text-2xl text-sm">CAMPO LABORAL</h2>

                <div className="bg-black text-white flex flex-col justify-center items-center px-5 sm:px-8 lg:px-16 xl:px-32 mb-56">
                    <div className="w-full max-w-5xl p-5">
                        {experiencias.map((exp, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 200} // ⏱️ delay incremental
                                data-aos-duration="900" // ⌛ duración opcional
                                data-aos-anchor-placement="top-bottom"
                                className="flex flex-col space-y-2 mb-10"
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img src={exp.logo} alt="" className="w-16 h-14" />
                                        <h2 className="text-base sm:text-lg font-bold">{exp.cargo} - {exp.empresa}</h2>
                                    </div>
                                    <span className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-0">{exp.fecha}</span>
                                </div>
                                <ul className="text-gray-400 text-xs sm:text-sm text-justify list-disc list-inside">
                                    {exp.items.map((item, i) => (
                                        <li key={i} className="mb-2">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};

