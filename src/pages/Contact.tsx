import SplashCursor from "../animations/SplashCursor";
import { ContactForm } from "../components/sections/ContactForm";

export const Contact = () => {

    return (
        <div className="w-full overflow-x-hidden bg-black text-white">
            <ContactForm />
            <SplashCursor />
        </div>
    );
};

