import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const Banner5 = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const showConfirmation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        Swal.fire({
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarme. Te responderé enseguida.",
            icon: "success",
            confirmButtonText: "Cerrar",
        }).then(() => {
            if (formRef.current) {
                formRef.current.submit(); // Esto dispara el envío real
                formRef.current.reset();  // Limpia el formulario
            }
        });
    };

    const navigate = useNavigate();

    const phoneNumber = '+51992431858'; // Reemplaza con tu número de WhatsApp
    const defaultMessage = '👋 ¡Hola! Gracias por contactarme. Soy Piero Fernández, Desarrollador Full Stack Jr. y Analista de Datos Jr. 🚀\n\n📌 Servicios que ofrezco:\n✅ Desarrollo y mantenimiento de páginas web y aplicaciones.\n✅ Creación de dashboards y visualización de datos (Power BI, Tableau).\n✅ Análisis de datos y optimización de procesos.\n✅ Automatización y desarrollo de software a medida.\n\n💼 ¿En qué puedo ayudarte? Escríbeme con los detalles de tu proyecto y con gusto te atenderé.\n\n📩 También puedes enviarme un correo a: pierofernandezz48@gmail.com\n🌐 Portafolio: [tu web o LinkedIn]\n\n¡Espero tu mensaje! 📲';

    // URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    const linkedinUrl = 'https://www.linkedin.com/in/piero-fernández/';
    const instagramUrl = 'https://www.instagram.com/piero_fernandezz';

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Contenido principal */}
            <main className="flex-grow my-6">
                <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl content-center bg-gray-950 rounded-md text-white font-[sans-serif]">
                    {/* Lado Izquierdo */}
                    <div>
                        <h1 className="text-3xl font-extrabold">Contacto</h1>
                        <p className="text-sm text-gray-400 mt-3">
                            ¿Tienes una idea, proyecto o simplemente quieres saludar?
                            ¡Estoy abierto a nuevas oportunidades y colaboraciones! Completa el formulario y te responderé lo antes posible.
                        </p>

                        {/* Email */}
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Email</h2>
                            <ul className="mt-3">
                                <li className="flex items-center">
                                    <div className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <img src="img/emailblanco.png" width="20" height="20" alt="Email" />
                                    </div>
                                    <a
                                        target="_blank"
                                        href=""
                                        className="text-[#007bff] text-sm ml-3"
                                    >
                                        <small className="block">Email</small>
                                        <strong>pierofernandezz48@gmail.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Socials */}
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Redes Sociales</h2>
                            <ul className="flex mt-3 space-x-4">
                                <li className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href={instagramUrl} aria-label="Instagram">
                                        <img src="img/instagramblanco.png" width="20" height="20" alt="Instagram" />
                                    </a>
                                </li>
                                <li className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href={linkedinUrl} aria-label="LinkedIn">
                                        <img src="img/linkedinblanco.png" width="20" height="20" alt="LinkedIn" />
                                    </a>
                                </li>
                                <li className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href={whatsappUrl} aria-label="WhatsApp">
                                        <img src="img/wspblanco.png" width="20" height="20" alt="WhatsApp" />
                                    </a>
                                </li>
                            </ul>

                            <button
                                onClick={() => navigate('/')}
                                className="mt-6 flex items-center text-gray-400 font-bold py-2 transition-colors hover:text-gray-200"
                            >
                                <img
                                    src="img/arrow.png"
                                    alt="Flecha"
                                    className="w-5 h-5 mr-2"
                                />
                                Volver
                            </button>
                        </div>
                    </div>

                    {/* Lado Derecho - Formulario */}
                    <div>
                        <form
                            ref={formRef}
                            action="https://formsubmit.co/pierofernandezz48@gmail.com"
                            method="POST"
                            onSubmit={showConfirmation}
                            className="space-y-6"
                        >
                            {/* Evita CAPTCHA */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://piero-fernandez-freelancer.netlify.app/" />



                            <div>
                                <label className="block text-sm font-medium mb-2">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full border border-gray-300 text-black rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full border border-gray-300 text-black rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Mensaje</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full border border-gray-300 text-black rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Escribe tu mensaje..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#007bff] text-white font-bold py-2 px-10 rounded hover:bg-blue-600 transition-colors"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </main >

        </div >
    );
};