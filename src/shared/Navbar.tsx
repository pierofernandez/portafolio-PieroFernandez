export const Navbar = () => {
  return (
      <nav className="hidden md:flex md:mx-[50px] md:py-[5px] md:px-[20px] md:gap-3 md:rounded-[20px] lg:scale-100 lg:mx-[150px] lg:py-[10px] lg:px-[30px] lg:gap-5 lg:rounded-[30px] lg:shadow-lg bg-gradient-to-r from-[#1e1e1e] to-[#3a3a3a] justify-center items-center">
        <ul className="flex list-none gap-[30px] md:gap-[40px] lg:gap-[60px] p-0 m-0 justify-center items-center text-center">
          <li className="font-bold text-white relative text-sm md:text-base lg:text-lg flex flex-col items-center">
            Home
            <span className="block w-full h-[2px] bg-white mt-[5px]"></span>
          </li>
          <li className="text-[#ccc] text-sm md:text-base flex items-center">Sobre mí</li>
          <li className="text-[#ccc] text-sm md:text-base flex items-center">Portafolio</li>
          <li className="text-[#ccc] text-sm md:text-base flex items-center">Skills</li>
          <li className="text-[#ccc] text-sm md:text-base flex items-center">Contacto</li>
        </ul>
      </nav>
  );
};

export default Navbar;