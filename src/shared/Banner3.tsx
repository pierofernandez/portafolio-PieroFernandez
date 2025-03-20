export const Banner3 = () => {
    return (
        <>
            <h2 style={{ color: "white", padding: "20px", fontFamily: "Poppins", textAlign: "center", marginBottom: "80px", marginTop: "80px" }}>PROYECTOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center pl-20 pr-20 mx-auto">
                <img src="img/1st Project.png" alt="proyecto1" className="h-80" /> {/* Altura de 16rem (256px) */}
                <img src="img/2nd Project.png" alt="proyecto2" className="h-80" /> {/* Altura de 16rem (256px) */}
                <img src="img/2nd Project.png" alt="proyecto2" className="h-80" /> {/* Altura de 16rem (256px) */}

            </div>

            <h2 style={{ color: "white", padding: "20px", fontFamily: "Poppins", textAlign: "center", marginBottom: "80px", marginTop: "80px" }}>CAMPO LABORAL</h2>

            <div className="bg-black text-white  flex flex-col justify-center items-center mb-56">
                <div className="max-w-5xl ">

                    {/* Google */}
                    <div className="flex flex-col space-y-2 mb-10">
                        {/* Contenedor flex para el título y la fecha */}
                        <div className="flex items-center justify-between"> {/* Cambiado a justify-between */}
                            <div className="flex items-center space-x-3"> {/* Contenedor para el ícono y el título */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                <h2 className="text-xl font-bold">Lead Software Engineer at Google</h2>
                            </div>
                            {/* Fecha alineada a la derecha */}
                            <span className="text-gray-400 text-sm">Nov 2019 - Present</span>
                        </div>
                        {/* Descripción */}
                        <p className="text-gray-400">
                            As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for
                            Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the
                            enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
                        </p>
                    </div>

                    {/* Apple */}
                    <div className="flex flex-col space-y-2 mb-10">
                        <div className="flex items-center justify-between"> {/* Contenedor flex con justify-between */}
                            <div className="flex items-center space-x-3"> {/* Contenedor para el ícono y el título */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                    <path fill="#42A5F5" d="M40.084,32.613c-0.848,1.835-1.254,2.655-2.342,4.274c-1.521,2.264-3.67,5.089-6.326,5.109c-2.361,0.018-2.971-1.507-6.176-1.482c-3.204,0.016-3.872,1.51-6.237,1.484c-2.654-0.022-4.688-2.568-6.21-4.826c-4.259-6.34-4.707-13.768-2.076-17.721c1.861-2.803,4.807-4.449,7.572-4.449c2.817,0,4.588,1.514,6.916,1.514c2.262,0,3.638-1.517,6.896-1.517c2.464,0,5.07,1.313,6.931,3.575C32.942,21.836,33.931,30.337,40.084,32.613z"></path>
                                    <path fill="#42A5F5" d="M30.046,12.072c1.269-1.577,2.232-3.804,1.882-6.072c-2.069,0.138-4.491,1.418-5.905,3.075c-1.282,1.51-2.345,3.752-1.931,5.922C26.351,15.066,28.689,13.764,30.046,12.072z"></path>
                                    <path fill="#1E88E5" d="M36.736,20.421C28,30.001,20,21.001,9.228,27.842c0.375,3.027,1.53,6.303,3.565,9.331c1.521,2.258,3.556,4.804,6.21,4.826c2.365,0.025,3.033-1.469,6.237-1.484c3.205-0.024,3.814,1.5,6.176,1.482c2.656-0.021,4.805-2.846,6.326-5.109c1.088-1.619,1.494-2.439,2.342-4.274C34.878,30.688,33.389,24.314,36.736,20.421z"></path>
                                </svg>
                                <h2 className="text-xl font-bold">Junior Software Engineer at Apple</h2>
                            </div>
                            {/* Fecha alineada a la derecha */}
                            <span className="text-gray-400 text-sm">Jan 2016 - Dec 2017</span>
                        </div>
                        <p className="text-gray-400">
                            During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping
                            the architecture of mission-critical software projects. Responsible for designing scalable and efficient
                            systems, I provided technical leadership to a cross-functional team.
                        </p>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col space-y-2 mb-10">
                        <div className="flex items-center justify-between"> {/* Contenedor flex con justify-between */}
                            <div className="flex items-center space-x-3"> {/* Contenedor para el ícono y el título */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                    <path fill="#2482fd" d="M42.54,14.018c0.409-0.667,0.869-1.441,1.26-2.058c0.35-0.59,0.162-1.351-0.422-1.712l-8.189-5.034 c-0.577-0.388-1.36-0.236-1.749,0.341c-0.016,0.024-0.032,0.049-0.047,0.075c-0.328,0.547-0.75,1.258-1.209,2.02 c-3.244,5.349-6.507,4.694-12.39,1.888l-8.094-3.838c-0.628-0.299-1.38-0.032-1.679,0.595c-0.005,0.011-0.01,0.022-0.015,0.034 l-3.899,8.809c-0.275,0.629,0.005,1.363,0.63,1.649c1.713,0.805,5.121,2.41,8.189,3.889C25.986,26.024,35.365,25.665,42.54,14.018z"></path>
                                    <path fill="#1d78f2" d="M19.794,9.538l-8.094-3.838c-0.628-0.299-1.38-0.032-1.679,0.595 c-0.005,0.011-0.01,0.022-0.015,0.034l-3.899,8.809c-0.276,0.629,0.005,1.363,0.63,1.649c1.713,0.805,5.121,2.41,8.189,3.889 c0.116,0.056,0.231,0.108,0.346,0.163L20.207,9.73C20.068,9.665,19.935,9.605,19.794,9.538z"></path>
                                    <path fill="#126ae5" d="M18.398,8.876l-6.699-3.177c-0.628-0.299-1.38-0.032-1.679,0.595 c-0.005,0.011-0.01,0.022-0.015,0.034l-3.899,8.809c-0.276,0.629,0.005,1.363,0.63,1.649c1.445,0.679,4.095,1.927,6.73,3.188 L18.398,8.876z"></path>
                                    <path fill="#0b60da" d="M16.591,8.019l-4.891-2.32c-0.628-0.299-1.38-0.032-1.679,0.595 c-0.005,0.011-0.01,0.022-0.015,0.034l-3.899,8.809c-0.276,0.629,0.005,1.363,0.63,1.649c1.112,0.523,2.941,1.384,4.924,2.327 L16.591,8.019z"></path>
                                    <path fill="#0154ce" d="M14.783,7.162l-1.808-0.857l0,0l-1.276-0.605c-0.628-0.299-1.38-0.032-1.679,0.595 c-0.005,0.011-0.01,0.022-0.015,0.034l-3.899,8.809c-0.276,0.629,0.005,1.363,0.63,1.649c0.308,0.145,0.689,0.324,1.097,0.516 c0.598,0.282,1.277,0.602,2.019,0.953L14.783,7.162z"></path>
                                </svg>
                                <h2 className="text-xl font-bold">Software Engineer at Meta</h2>
                            </div>
                            {/* Fecha alineada a la derecha */}
                            <span className="text-gray-400 text-sm">Jan 2017 - Oct 2019</span>
                        </div>
                        <p className="text-gray-400">
                            At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems for
                            the social media giant's dynamic platform. Working on projects that involved large-scale data processing
                            and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

