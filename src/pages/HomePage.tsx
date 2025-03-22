import SplashCursor from "../animations/SplashCursor"
import { Banner } from "../shared/Banner"
import { Banner2 } from "../shared/Banner2"
import { Banner3 } from "../shared/Banner3"
import { Footer } from "../shared/Footer"
import { Navbar } from "../shared/Navbar"

export const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Banner2/>
            <Banner3/>
            <Footer/>
            <SplashCursor />

        </div>
    
    )
        
}