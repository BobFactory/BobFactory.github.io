import { LuBugPlay, LuMonitorDot, LuMonitorSmartphone, LuSmartphone, LuSquareDashedBottomCode, LuTabletSmartphone } from "react-icons/lu"

interface ServiceData {
    type: "mvp" | "refactoring" | "cross-platform" | "website" | "native" | "consult",
    title: string,
    subtitle: string,
    points: string[],
}

export default function Services() {
    const data: ServiceData[] = [
        {
            "type": "mvp",
            "title": "Quick And fast mobile MVP development",
            "subtitle": "Build and launch your mobile app quickly with a focus on core features. Perfect for startups and fast iterations.",
            "points": [
                "Rapid prototyping to bring your idea to life",
                "Core feature implementation with minimal overhead",
                "Cross-platform support using technologies like Flutter and React Native",
                "Scalable architecture to grow with your product",
                "Focus on user-centric design and performance"
            ]
        },

        {
            "type": "refactoring",
            "title": "Code Refactoring, Maintenance, & Bug Resolution",
            "subtitle": "Enhance your app's performance, maintainability, and reliability with clean, optimized code and swift issue resolution.",
            "points": [
                "Refactoring legacy code for better readability and scalability",
                "Resolving critical bugs to ensure seamless functionality",
                "Improving app performance and load times",
                "Ongoing maintenance to keep your app up-to-date",
                "Enhancing code quality to reduce future technical debt"
            ]
        },

        {
            "type": "cross-platform",
            "title": "Cross-Platform App Development",
            "subtitle": "Develop high-performance apps for both Android and iOS using a single codebase with React Native or Flutter.",
            "points": [
                "Efficient development for Android and iOS from a single codebase",
                "Seamless user experiences across both platforms",
                "Cost-effective solutions without compromising quality",
                "Access to native features for enhanced functionality",
                "Faster time-to-market with modern cross-platform technologies"
            ]
        },

        {
            "type": "website",
            "title": "Landing Pages & Websites",
            "subtitle": "Create visually stunning and responsive websites to showcase your brand or product effectively.",
            "points": [
                "Custom-designed landing pages tailored to your needs",
                "SEO-friendly websites for better search engine visibility",
                "Responsive design for flawless performance across devices",
                "Integration with analytics tools for tracking performance",
                "Fast-loading pages optimized for user retention"
            ]
        },
        {
            "type": "native",
            "title": "Native Android & iOS Development",
            "subtitle": "Deliver high-quality, platform-specific mobile applications for the best user experience.",
            "points": [
                "Native app development using Java/Kotlin for Android and Swift/Objective-C for iOS",
                "Performance-optimized apps tailored to platform capabilities",
                "Deep integration with platform-specific APIs and hardware",
                "Scalable architecture for apps designed to grow",
                "Pixel-perfect designs following platform guidelines"
            ]
        },
        {
            "type": "consult",
            "title": "Technical Consultant",
            "subtitle": "Expert guidance to help you make informed technical decisions for your projects.",
            "points": [
                "Technology stack recommendations based on your project goals",
                "Architectural planning for scalable and maintainable solutions",
                "Codebase reviews to improve quality and performance",
                "Performance optimization strategies for existing apps",
                "Tailored advice to align your technology with business objectives"
            ]
        }
    ];
    return (
        <div className="w-full flex flex-col py-10 p-8 lg:p-16 text-base-content">
            <span className="font-bold tracking-wider text-2xl mb-6 uppercase bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
                My Services
            </span>
            <h1 className="font-bold text-5xl text-base-content">Tailored Tech Solutions: <br></br> Services Designed for Your Unique Needs</h1>

            <div className="w-full bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-x divide-y divide-primary/40 p-1 lg:p-6 mt-16">
                {
                    data.map((c, i) => <ServiceCardNew
                        key={i}
                        title={c.title}
                        subtitle={c.subtitle}
                        type={c.type}
                        points={[]}
                    />
                    )
                }
            </div>
        </div>
    )
}

function ServiceCardNew({ title, type }: ServiceData) {
    const className = "text-4xl text-gray-400 group-hover:text-5xl transform duration-300"

    const iconMap = {
        "mvp": <LuMonitorSmartphone className={className} />,
        "refactoring": <LuBugPlay className={className} />,
        "cross-platform": <LuSmartphone className={className} />,
        "website": <LuMonitorDot className={className} />,
        "native": <LuTabletSmartphone className={className} />,
        "consult": <LuSquareDashedBottomCode className={className} />
    }

    return (
        <div className="p-16 flex flex-col items-center group border-primary/40 first:border-l first:border-t">
            {iconMap[type]}
            <div className="my-6"></div>
            <h3 className="text-lg font-bold sm:text-xl uppercase text-base-content text-center">
                {title}
            </h3>
        </div>
    )
}

