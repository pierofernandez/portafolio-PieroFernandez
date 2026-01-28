import SplashCursor from "../animations/SplashCursor"
import { Hero } from "../components/sections/Hero"
import { AboutMe } from "../components/sections/AboutMe"
import { Projects } from "../components/sections/Projects"
import { Skills } from "../components/sections/Skills"
import { Experience } from "../components/sections/Experience"
import { Navbar } from "../shared/Navbar"

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="relative bg-black w-full overflow-hidden">
                <div className="absolute inset-0 via-black to-black pointer-events-none" />
                <Skills />
                <AboutMe />
                <Projects />
                <Experience />
            </div>
            <SplashCursor />
        </div>
    )
}