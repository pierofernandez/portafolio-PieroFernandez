
export const Navbar = () => {
    return (
        <nav className="hidden md:flex justify-center gap-5 mx-[150px] py-[10px] px-[30px] bg-gradient-to-r from-[#1e1e1e] to-[#3a3a3a] rounded-[30px] shadow-lg">
          <ul className="flex list-none gap-[60px] p-0 m-0">
            <li className="font-bold text-white relative">
              Home
              <span className="block w-full h-[2px] bg-white mt-[5px]"></span>
            </li>
            <li className="text-[#ccc]">Sobre mí</li>
            <li className="text-[#ccc]">Portafolio</li>
            <li className="text-[#ccc]">Skills</li>
            <li className="text-[#ccc]">Contacto</li>
          </ul>
        </nav>
      );
    };
    

export default Navbar;