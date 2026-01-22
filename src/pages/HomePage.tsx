import SplashCursor from "../animations/SplashCursor"
import { Banner } from "../shared/Banner"
import { Banner2 } from "../shared/Banner2"
import { Banner3 } from "../shared/Banner3"
import { Banner4 } from "../shared/Banner4"
import { Banner6 } from "../shared/Banner6"
import { Navbar } from "../shared/Navbar"

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="relative bg-black w-full overflow-hidden">
                <div className="absolute inset-0 via-black to-black pointer-events-none" />
                <Banner4 />
                <Banner2 />
                <Banner3 />
                <Banner6 />
            </div>
            <SplashCursor />
        </div>
    )
}