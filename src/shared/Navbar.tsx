import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


export const Navbar = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeSection, setActiveSection] = useState('home');




  return (
    <nav className="hidden md:flex fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-10 py-4 gap-6 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl bg-white/5 border border-white/10 justify-center items-center transition-all duration-300 hover:bg-white/10">
      <ul className="flex list-none gap-8 lg:gap-12 p-0 m-0 justify-center items-center text-center">
        {[
          { id: 'home', label: 'Home' },
          { id: 'skills', label: 'Skills' },
          { id: 'sobre-mi', label: 'Sobre mí' },
          { id: 'portafolio', label: 'Portafolio' },
          { id: 'experience', label: 'Experience' },
        ].map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`text-sm lg:text-base transition-colors duration-300 relative group ${activeSection === id ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection(id)}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
