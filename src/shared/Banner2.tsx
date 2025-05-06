export const Banner2 = () => {
    return (
        
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


                <h2 className="text-white px-5 font-Poppins text-center mt-20 mb-24 md:text-2xl text-sm">SOBRE MI</h2>

                <div className="flex items-center justify-center bg-black  min-h-32">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start px-5 justify-center max-w-8xl w-full">

                        {/* Círculo azul */}
                        <img src="img/terno.jpg" className="md:min-w-96 md:h-96 w-80 h-80 rounded-full mb-5 sm:mb-5 lg:mr-20"
                        />

                        {/* Contenido de texto */}
                        <div className="text-white text-center sm:text-left">
                            <h1 className="md:text-4xl text-3xl font-Raleway sm:text-center font-bold mt-4 mb-10">
                                Piero Alejandro <br /> Fernández Blas
                            </h1>

                            {/* Texto para pantallas pequeñas */}
                            <p className="mt-5 text-sm font-normal text-gray-200 text-justify  sm:hidden">
                                👋 ¡Hola! Me llamo Piero Alejandro Fernández Blas, pero puedes llamarme simplemente Piero.
                                Tengo más de un año de experiencia trabajando con interfaces en JavaScript, React JS y TypeScript.
                                Actualmente curso el 7mo ciclo de Ingeniería de Sistemas en la Universidad Privada del Norte y
                                me apasiona el desarrollo Front-end con React, React Native, VueJS, así como el Análisis de Datos.
                                ¡Un gusto!
                                <br /><br />
                                🚀 Trato de aprender y mejorar cada día para brindarles el mejor servicio.
                            </p>

                            {/* Texto para pantallas grandes */}
                            <ul className="mt-5 space-y-2 text-sm font-normal text-gray-200  hidden sm:block">
                                <li>👋 Me llamo Piero Alejandro Fernández Blas, pero puedes llamarme simplemente Piero, ¡un gusto!</li>
                                <li>🛠️ Ya más de 1 año desarrollándome en interfaces con JavaScript, ReactJS y TypeScript.</li>
                                <li>📍 Actualmente me encuentro en el 7mo ciclo de la carrera de Ing. Sistemas en la Universidad Privada del Norte.</li>
                                <li>💡 Intereses en desarrollo Front-end con React, React Native y Análisis de Datos.</li>
                                <br /><br />
                                <li>🚀 Trato de aprender y mejorar cada día para brindarles el mejor servicio.</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
    );
};
