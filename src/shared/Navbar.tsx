import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


export const Navbar = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeSection, setActiveSection] = useState('home');

  const linkClass = (section: string) =>
    `text-sm md:text-base flex flex-col items-center ${activeSection === section
      ? 'text-white font-bold'
      : 'text-[#ccc]'
    }`;

  const underline = (section: string) =>
    activeSection === section
      ? <span className="block w-full h-[2px] bg-white mt-[5px]"></span>
      : null;


  return (
    <nav  className=" hidden md:flex md:mx-[80px] md:py-[10px] md:px-[20px] md:gap-3 md:rounded-[20px] lg:rounded-[30px] lg:shadow-lg bg-gradient-to-r from-[#1e1e1e] to-[#575353] justify-center items-center">
      <ul  className="flex list-none gap-[30px] md:gap-[40px] lg:gap-[60px] p-0 m-0 justify-center items-center text-center">
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
              className={linkClass(id)}
              onClick={() => setActiveSection(id)}
            >
              {label}
              {underline(id)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
