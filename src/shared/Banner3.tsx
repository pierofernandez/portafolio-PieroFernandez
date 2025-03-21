export const Banner3 = () => {
    return (
        <>
            <h2 className="text-white px-5 font-Poppins text-center mt-24 mb-16 md:text-2xl text-sm">PROYECTOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center px-5 md:px-20 mx-auto">
                <img src="img/1st Project.png" alt="proyecto1" className="h-60 sm:h-72 md:h-80 mb-5 md:mb-0" />
                <img src="img/2nd Project.png" alt="proyecto2" className="h-60 sm:h-72 md:h-80 mb-5 md:mb-0" />
                <img src="img/2nd Project.png" alt="proyecto3" className="h-60 sm:h-72 md:h-80 mb-5 md:mb-0" />
            </div>


            <h2 className="text-white px-5 font-Poppins text-center mt-24 mb-16 md:text-2xl text-sm">CAMPO LABORAL</h2>

            <div className="bg-black text-white flex flex-col justify-center items-center px-5 sm:px-8 lg:px-16 xl:px-32 mb-56">
                <div className="w-full max-w-5xl p-5">
                    {/* Google */}
                    <div className="flex flex-col space-y-2 mb-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                        c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
                        C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                <h2 className="text-base sm:text-lg font-bold">Lead Software Engineer at Google</h2>
                            </div>
                            <span className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-0">Nov 2019 - Present</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm text-justify">
                            As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for
                            Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the
                            enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
                        </p>
                    </div>

                    {/* Microsoft */}
                    <div className="flex flex-col space-y-2 mb-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                                    <path fill="#F25022" d="M6 6h17v17H6z"></path>
                                    <path fill="#7FBA00" d="M25 6h17v17H25z"></path>
                                    <path fill="#00A4EF" d="M6 25h17v17H6z"></path>
                                    <path fill="#FFB900" d="M25 25h17v17H25z"></path>
                                </svg>
                                <h2 className="text-base sm:text-lg font-bold">Software Engineer at Microsoft</h2>
                            </div>
                            <span className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-0">Jul 2015 - Oct 2019</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm text-justify">
                            At Microsoft, I was involved in developing enterprise-grade software solutions, enhancing security features,
                            and optimizing cloud-based applications. My contributions significantly improved system performance and
                            user accessibility.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

