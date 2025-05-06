import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {

    const linkedinUrl = 'https://www.linkedin.com/in/piero-fern%C3%A1ndez/';
    const githubUrl = 'https://github.com/pierofernandez';

    return (
        <footer className="w-full p-4 bg-[#000513] text-gray-400 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center">
            {/* Texto de Copyright */}
            <div className="text-center text-sm md:text-left md:pl-6">
                <p>Copyright © Piero Fernández · 2025</p>
            </div>

            {/* Iconos de Redes Sociales */}
            <div className="flex space-x-4 md:pr-6">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity duration-200" />
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity duration-200" />
                </a>
            </div>
        </footer>
    );
};
