export const Banner4 = () => {
    return (
        <section id="skills" >
            <div className=" border-gray-800 pt-2  px-5">
                <h2 className="text-white px-5 font-Poppins text-center mt-10 mb-14 md:text-2xl text-sm">SKILLS</h2>

                <h1 className="text-gray-400 font-Poppins text-center mt-5 mb-10 md:text-lg text-sm">Tecnologías que uso día a día</h1>
                <div className="h-20 flex justify-center items-center mt-5 mx-auto relative">
                    <img src="img/WorkingTechs.png" alt="tec" className="h-8 sm:h-10 " />
                </div>

                <h1 className="text-gray-400 font-Poppins text-center mt-5 mb-10 md:text-lg text-sm">Algunas otras que utilicé en algunos proyectos</h1>
                <div className="overflow-hidden mt-5 mx-auto flex justify-center">
                    <img src="img/ProjectsTechs.png" alt="tec" className="h-8 sm:h-10 " />
                </div>
            </div>
        </section>
    )
}