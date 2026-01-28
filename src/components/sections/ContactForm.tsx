import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IoMailOutline, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoArrowBack, IoSend } from "react-icons/io5";

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const showConfirmation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        Swal.fire({
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarme. Te responderé enseguida.",
            icon: "success",
            confirmButtonText: "Cerrar",
            customClass: {
                popup: 'bg-black/90 text-white border border-white/10 rounded-[32px] backdrop-blur-xl',
                confirmButton: 'bg-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-500 transition-colors',
                title: 'font-Poppins text-2xl font-bold',
                htmlContainer: 'text-gray-300'
            },
            background: 'rgba(10, 10, 10, 0.95)',
            buttonsStyling: false
        }).then(() => {
            if (formRef.current) {
                formRef.current.submit();
                formRef.current.reset();
            }
        });
    };

    const navigate = useNavigate();
    const phoneNumber = '+51992431858';
    const defaultMessage = '👋 ¡Hola! Gracias por contactarme. Soy Piero Fernández, Desarrollador Full Stack Jr. y Analista de Datos Jr. 🚀';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    const linkedinUrl = 'https://www.linkedin.com/in/piero-fern%C3%A1ndez/';
    const instagramUrl = 'https://www.instagram.com/pierof.dev';

    return (
        <section id="contacto" className="w-full relative z-10 py-16 md:py-32 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2 opacity-60"></div>

            <div className="max-w-screen-xl mx-auto px-6 md:px-8">

                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] md:rounded-[48px] p-6 sm:p-8 md:p-16 shadow-2xl relative overflow-hidden">

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
                        {/* Left Side: Info */}
                        <div className="flex flex-col justify-center space-y-8 md:space-y-12">
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-Poppins text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 drop-shadow-sm tracking-tight">
                                    Hablemos
                                </h1>
                                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                    ¿Tienes una idea innovadora o un proyecto en mente?
                                    <br className="hidden md:block" />
                                    <span className="text-white font-medium"> Hagámoslo realidad juntos.</span>
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <a href="mailto:pierofernandezz48@gmail.com" className="group flex items-center gap-5 p-4 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300">
                                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-full group-hover:scale-110 transition-transform">
                                        <IoMailOutline size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Email</p>
                                        <span className="text-white text-lg md:text-xl font-medium">
                                            pierofernandezz48@gmail.com
                                        </span>
                                    </div>
                                </a>
                            </div>

                            {/* Social Buttons */}
                            <div>
                                <h3 className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-5">Sígueme</h3>
                                <div className="flex gap-4">
                                    {[
                                        { icon: IoLogoInstagram, url: instagramUrl, label: "Instagram", color: "hover:text-pink-400" },
                                        { icon: IoLogoLinkedin, url: linkedinUrl, label: "LinkedIn", color: "hover:text-blue-400" },
                                        { icon: IoLogoWhatsapp, url: whatsappUrl, label: "WhatsApp", color: "hover:text-green-400" }
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 ${social.color} hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg`}
                                        >
                                            <social.icon size={26} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    onClick={() => navigate('/')}
                                    className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm font-medium group/back py-2"
                                >
                                    <IoArrowBack className="group-hover/back:-translate-x-1 transition-transform text-lg" />
                                    <span>Volver al inicio</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="bg-black/40 backdrop-blur-md p-6 md:p-10 rounded-[32px] border border-white/10 shadow-inner">
                            <form
                                ref={formRef}
                                action="https://formsubmit.co/pierofernandezz48@gmail.com"
                                method="POST"
                                onSubmit={showConfirmation}
                                className="space-y-6"
                            >
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value="https://piero-fernandez-freelancer.netlify.app/" />

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300 ml-1">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 font-light"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300 ml-1">Correo electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 font-light"
                                        placeholder="ejemplo@correo.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300 ml-1">Mensaje</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 font-light resize-none"
                                        placeholder="Cuéntame los detalles de tu proyecto..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    <span>Enviar Mensaje</span>
                                    <IoSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};