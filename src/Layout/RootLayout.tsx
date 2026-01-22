import { Outlet } from "react-router-dom";
import { Footer } from "../shared/Footer";

export const RootLayout = () => {
    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            <main className="w-full">
                <Outlet />
            </main>
            <Footer />
        </div>

    );
};