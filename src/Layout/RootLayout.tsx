import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <>
            <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", paddingTop: "20px" }}>

                <main className=' '>
                    <Outlet />
                </main>

            </div>
        </>
    );
};