import { IoCalendarOutline } from "react-icons/io5";

export const Banner6 = () => {

    const experiencias = [
        {
            empresa: "Consigueventas",
            cargo: "Quality Assurance",
            fecha: "Agosto 2025 - Dic 2025",
            logo: "img/logo-consigueventas.webp",
            items: [
                "Participé en reuniones con clientes para el levantamiento, validación y gestión de requerimientos, actuando como nexo entre cliente, diseño, desarrollo y producto",
                "Revisé y validé prototipos en Figma, asegurando usabilidad, coherencia visual y alineación con las necesidades del cliente",
                "Ejecuté pruebas funcionales y de usabilidad, documentando casos de prueba, hallazgos e incidencias en Notion para asegurar trazabilidad.",
                "Gestioné backlog, tareas y bugs en Trello y facilité ceremonias Scrum (daily, planning, review y retrospectiva) para una comunicación efectiva y entregas a tiempo."
            ],
        },
        {
            empresa: "ONG Progresemos Juntos",
            cargo: "Desarrollador Web",
            fecha: "Mayo 2025 - Agosto 2025",
            logo: "img/progresemos.png",
            items: [
                "Desarrollo de interfaces modernas con React & TypeScript.",
                "Gestión eficiente de bases de datos MongoDB.",
                "Implementación de pasarelas de pago y autenticación.",
                "Colaboración ágil con equipos de diseño."
            ],
        },
        {
            empresa: "Bizlinks",
            cargo: "Practicante Full Stack",
            fecha: "Ene 2025 - Mar 2025",
            logo: "img/logobizlinks.png",
            items: [
                "Desarrollo y testing con React & Postman.",
                "Gestión de BDD NoSQL (MongoDB).",
                "Integración de APIs RESTful.",
                "Trabajo bajo metodologías ágiles."
            ],
        },
        {
            empresa: "Cineplanet",
            cargo: "Asesor Multifuncional",
            fecha: "Oct 2024 - Dic 2024",
            logo: "img/Cineplanetlogo.png",
            items: [
                "Atención al cliente y gestión operativa.",
                "Resolución de problemas en tiempo real."
            ],

        }
    ];

    return (
        <div id="experience" className="max-w-screen-2xl mx-auto px-5 pb-32">
            {/* Title Left Aligned */}
            <h2 data-aos="fade-down" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold font-Poppins text-left text-3xl md:text-6xl mb-24 tracking-wider uppercase drop-shadow-md">
                Trayectoria
            </h2>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-16">
                {experiencias.map((exp, index) => (
                    <div key={index} data-aos="fade-left" data-aos-delay={index * 150} className="relative pl-10 md:pl-16">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                        <div className="p-8 rounded-[32px] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-white/20 group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white rounded-xl h-14 w-14 flex items-center justify-center overflow-hidden">
                                        <img src={exp.logo} alt={exp.empresa} className="object-contain max-h-full max-w-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">{exp.cargo}</h3>
                                        <p className="text-blue-400 font-medium">{exp.empresa}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                                    <IoCalendarOutline />
                                    <span>{exp.fecha}</span>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-light leading-relaxed">
                                        <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
