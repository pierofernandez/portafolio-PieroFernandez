export const Banner2 = () => {
    return (
        <>
            <div style={{
                borderTop: "0.5px solid #333333", // Línea blanca de 4px de grosor
                paddingTop: "10px", // Espaciado entre la línea y el texto
                width: "100vw", // Ocupa el 100% del ancho de la pantalla
                marginLeft: "-20px", // Compensa el padding del contenedor principal
            }}>
                <h2 style={{
                    color: "white",
                    padding: "20px",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    marginBottom: "60px",
                    marginTop: "40px"
                }}>
                    SKILLS
                </h2>

                <h1 style={{ color: "gray", fontFamily: "Poppins", textAlign: "center", marginTop: "20px", marginBottom: "40px" }}>Tecnologías que uso día a día</h1>

                <div style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "20px" }}>
                    <img src="img/WorkingTechs.png" alt="tec" />
                </div>

                <h1 style={{ color: "gray", fontFamily: "Poppins", textAlign: "center", marginTop: "50px", marginBottom: "40px" }}>Algunas otras que utilice en algunos proyectos</h1>

                <div style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "50px" }}>
                    <img src="img/ProjectsTechs.png" alt="tec" />
                </div>

                <h2 style={{ color: "white", padding: "20px", fontFamily: "Poppins", textAlign: "center", marginBottom: "80px", marginTop: "80px" }}>SOBRE MI</h2>

                <div className="flex items-center justify-center bg-black px-5 min-h-32">
                    <div className="flex items-start justify-center max-w-8xl w-full">

                        {/* Círculo azul */}
                        <div className="min-w-96 h-96 bg-gray-900 rounded-full mr-20"></div>

                        {/* Contenido de texto */}
                        <div className="text-white ml-10">
                            <h1 className="text-4xl font-Raleway font-bold mt-4">
                                Piero Alejandro <br /> Fernández Blas
                            </h1>

                            <ul  className="mt-5 space-y-2 text-sm font-normal text-gray-200">
                                <li>👋 Me llamo Piero Alejandro Fernández Blas, pero puedes llamarme simplemente Piero, ¡un gusto!</li>
                                <li>🛠️ Ya más de 1 año desarrollándome en interfaces con JavaScript, ReactJS y TypeScript.</li>
                                <li>📍 Actualmente me encuentro en el 7mo ciclo de la carrera de Ing. Sistemas en la Universidad Privada del Norte.</li>
                                <li>💡 Intereses en desarrollo Front-end con React, React Native y Análisis de Datos.</li> <br /><br />
                                <li>🚀 Trato de aprender y mejorar cada día para brindarles el mejor servicio.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};