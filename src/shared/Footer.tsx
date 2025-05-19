import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {

    const linkedinUrl = 'https://www.linkedin.com/in/piero-fern%C3%A1ndez/';
    const githubUrl = 'https://github.com/pierofernandez';

    return (
        <footer className="bg-[#000513] text-gray-400 mt-10">
            <div className="max-w-screen-2xl mx-auto px-4 py-6 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">

                {/* Texto de Copyright */}
                <div className="text-center text-sm md:text-left">
                    <p>© 2025 Piero Fernández. Todos los derechos reservados.</p>
                </div>

                {/* Iconos de Redes Sociales */}
                <div className="flex space-x-4">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity duration-200" />
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity duration-200" />
                    </a>
                </div>

            </div>
        </footer>

    );
};
