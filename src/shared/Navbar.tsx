import { useState } from 'react';

export const Navbar = () => {
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
    <nav className="hidden md:flex md:mx-[50px] md:py-[5px] md:px-[20px] md:gap-3 md:rounded-[20px] lg:scale-100 lg:mx-[150px] lg:py-[10px] lg:px-[30px] lg:gap-5 lg:rounded-[30px] lg:shadow-lg bg-gradient-to-r from-[#1e1e1e] to-[#3a3a3a] justify-center items-center">
      <ul className="flex list-none gap-[30px] md:gap-[40px] lg:gap-[60px] p-0 m-0 justify-center items-center text-center">
        {[
          { id: 'home', label: 'Home' },
          { id: 'skills', label: 'Skills' },
          { id: 'sobre-mi', label: 'Sobre mí' },
          { id: 'portafolio', label: 'Portafolio' }
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
