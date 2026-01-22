
export const Banner3 = () => {
    const cardData = [
        {
            title: "Brillaré",
            description: "Landing page para centro de terapia física.",
            moreInfo: "NodeJs, Angular, Flowbite, TaiwindCSS.",
            image: "img/brillare.png",
        },
        {
            title: "El Tiocoins",
            description: "Ecommerce de Monedas EA FC 25.",
            moreInfo: "React, Tailwind, NodeJs, Supabase. Integración PayPal.",
            image: "img/eltiocoins.png",
        },
        {
            title: "Revista Inclusiva",
            description: "Revista digital para personas con ceguera.",
            moreInfo: "NodeJs, React, Web Speech API, Accesibilidad.",
            image: "img/revistadigital.png",
        },
        {
            title: "Aduanas CRUD",
            description: "Gestión de registros de aduanas.",
            moreInfo: "AWS (Lambda, DynamoDB), React, Bootstrap.",
            image: "img/aduanas.png",
        },
        {
            title: "GameStore System",
            description: "Sistema de gestión para tienda de videojuegos.",
            moreInfo: "C#, Estructuras de Datos, CRUD consola.",
            image: "img/gamestop.jpeg",
        },
        {
            title: "Portara Cuadros",
            description: "E-commerce de cuadros personalizados.",
            moreInfo: "HTML, CSS plano para diseño visual único.",
            image: "img/portara.png",
        },
        {
            title: "Versus 1v1",
            description: "Plataforma de apuestas para e-sports.",
            moreInfo: "MERN Stack, Stripe, WebSocket (En proceso).",
            image: "img/versus.png",
        },
        {
            title: "Parkea YA!",
            description: "Sistema administrativo de estacionamientos.",
            moreInfo: "SQL Server, React, TailwindCSS (En proceso).",
            image: "img/parking.png",
        },
        {
            title: "Adopción Mobile",
            description: "App móvil para adopción de mascotas.",
            moreInfo: "React Native, SQLite (En proceso).",
            image: "img/adopción.png",
        }
    ];

    return (
        <section className="w-full relative z-10 pb-20">
            {/* --- PROYECTOS SECTION --- */}
            <div id="portafolio" className="max-w-screen-2xl mx-auto px-5 py-24">
                {/* Title Left Aligned */}
                <h2 data-aos="fade-down" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold font-Poppins text-left text-3xl md:text-6xl mb-4 tracking-wider uppercase drop-shadow-md">
                    Proyectos
                </h2>
                <p data-aos="fade-up" className="text-gray-400 text-left mb-16 text-lg font-light">
                    Explora mi trabajo reciente y colaboraciones.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative h-[300px] rounded-[32px] overflow-hidden bg-black/40 border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-blue-500/10"
                        >
                            {/* Full Background Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                            />

                            {/* Dark Overlay Gradient (Better Text Readability) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

                            {/* Content Overlay - App Store Style */}
                            <div className="absolute bottom-0 w-full p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                                <div className="space-y-2 mb-2">
                                    <h3 className="text-white text-3xl font-bold font-Poppins tracking-tight leading-none drop-shadow-lg">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-300 drop-shadow-md">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Tech Stack Reveal */}
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                                    <div className="overflow-hidden">
                                        <div className="pt-4 border-t border-white/20 mt-4">
                                            <p className="text-blue-300 text-xs font-mono mb-1 uppercase tracking-widest">Stack</p>
                                            <p className="text-gray-300 text-xs leading-relaxed font-light">
                                                {card.moreInfo}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
