import SplashCursor from "../animations/SplashCursor"
import { Banner } from "../shared/Banner"
import { Banner2 } from "../shared/Banner2"
import { Banner3 } from "../shared/Banner3"
import { Banner4 } from "../shared/Banner4"
import { Navbar } from "../shared/Navbar"

export const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Banner4/>
            <Banner2/>
            <Banner3/>
            <SplashCursor />
        </div>
    
    )
        
}