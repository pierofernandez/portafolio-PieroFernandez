import { FaBirthdayCake, FaFigma, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";

export const Banner = () => {
    return (
        <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", padding: "20px" }}>

            {/* Contenedor principal con Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "40px", marginTop: "20px", alignItems: "center" }}>
                {/* Columna izquierda */}
                <div style={{ textAlign: "left", marginLeft: "150px" }}>
                    <button style={{
                        background: "linear-gradient(135deg, #002b63, #007bff)",
                        color: "white",
                        padding: "15px 40px",
                        borderRadius: "50px",
                        border: "none",
                        fontSize: "28px",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                    }}>👋 Saludos!</button>
                    <h1 style={{ fontSize: "3rem", marginTop: "40px", fontWeight: "bold", lineHeight: "1", marginBottom: "30px", fontFamily: "Raleway" }}>Piero <br />Fernández</h1>
                    <p style={{ color: "gray", marginBottom: "30px" }}>Front-end Developer - Data Analyst</p>

                    <div style={{ display: "flex", gap: "10px", margin: "10px 0", color: "gray" }}>
                        <FaLinkedin size={30} />
                        <FaGithub size={30} />
                    </div>
                </div>

                {/* Columna central (Foto, ubicación y fecha) */}
                <div style={{ textAlign: "center" }}>
                    <div style={{
                        position: "relative",
                        display: "inline-block",
                        marginTop: "100px",
                        marginBottom: "50px"
                    }}>
                        {/* Efecto de brillo */}
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, transparent 70%)",
                            boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.6)",
                            animation: "brillo 2s infinite alternate", // Animación de brillo
                        }}></div>

                        {/* Imagen */}
                        <img
                            src="img/pieroanimado.jpg"
                            alt="Profile"
                            style={{
                                borderRadius: "50%",
                                width: "322px",
                                height: "322px",
                                position: "relative",
                                zIndex: 1, // Asegura que la imagen esté por encima del efecto
                            }}
                        />
                    </div>
                    <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", marginTop: "10px", marginBottom: "40px" }}>
                        <FaMapMarkerAlt /> Lima, Perú <FaBirthdayCake className="ml-4" /> Joined on Jun 21, 2004
                    </p>
                </div>

                {/* Columna derecha (Botones) */}
                <div style={{ textAlign: "right" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px", marginRight: "150px" }}>
                        <button style={{ padding: "14px 52px", border: "none", borderRadius: "50px", backgroundColor: "white", color: "black", marginBottom: "20px" }}>
                            Contáctame
                        </button>
                        <button style={{ padding: "14px 45px", border: "2px solid white", borderRadius: "50px", backgroundColor: "black", color: "white" }}>
                            Descargar CV
                        </button>
                    </div>
                </div>
            </div>

            {/* Redes sociales centradas */}
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
                {/* TikTok */}
                <div style={{ textAlign: "center" }}>
                    <div style={{ backgroundColor: "rgba(50, 50, 50, 0.2)", padding: "15px", borderRadius: "20%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                        <FaTiktok size={35} />
                    </div>
                    <p>3.4k</p>
                </div>

                {/* GitHub */}
                <div style={{ textAlign: "center" }}>
                    <div style={{ backgroundColor: "rgba(50, 50, 50, 0.2)", padding: "15px", borderRadius: "20%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                        <FaGithub size={35} />
                    </div>
                    <p>20</p>
                </div>

                {/* Instagram */}
                <div style={{ textAlign: "center" }}>
                    <div style={{ backgroundColor: "rgba(50, 50, 50, 0.2)", padding: "15px", borderRadius: "20%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                        <FaInstagram size={35} />
                    </div>
                    <p>620</p>
                </div>

                {/* LinkedIn */}
                <div style={{ textAlign: "center" }}>
                    <div style={{ backgroundColor: "rgba(50, 50, 50, 0.2)", padding: "15px", borderRadius: "20%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                        <FaLinkedin size={35} />
                    </div>
                    <p>2.6k</p>
                </div>

                {/* Figma */}
                <div style={{ textAlign: "center" }}>
                    <div style={{ backgroundColor: "rgba(50, 50, 50, 0.2)", padding: "15px", borderRadius: "20%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                        <FaFigma size={35} />
                    </div>
                    <p>20</p>
                </div>
            </div>
        </div>
    );
};