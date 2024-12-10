import ElevatedButton from "./elevated_button";
import ProfileAside from "./profile_aside";
import { BsArrowRight as ArrowRight } from "react-icons/bs"


export default function Hero() {
    return (
        <div className="flex flex-col items-center lg:flex-row gap-10 w-full bg-base-100 p-8 lg:p-16">
            <div className="flex-1 w-full">
                <ProfileAside />
            </div>
            <div className="flex-1 lg:px-12">
                <div className="w-full">
                    <h1 className="text-4xl font-bold leading-[110%] md:text-6xl text-base-content">
                        Crafting
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent mx-3 bg-clip-text text-transparent">
                            mobile & web
                        </span>
                        solutions that delight and inspire users.
                    </h1>
                    <p className="text-gray-500 text-2xl mt-10 ">
                        From Concept to Code, Let&lsquo;s Build Something Extraordinary.
                    </p>

                    <div className="w-full flex items-center gap-4 mt-10">
                        <ElevatedButton
                            text="Book a call"
                            link="#contact_us"
                        />
                        <a
                            className="inline-flex group items-center gap-2 px-8 py-3 text-base-content"
                            download
                            href="/resume.pdf"
                        >
                            <span className="text-xl font-bold"> Download CV </span>
                            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-3" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}