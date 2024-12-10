import Image from "next/image";
import Link from "next/link";

interface ProjectData {
    title: string,
    img: string,
    description: string,
    alt: string,
    tags: string[],
    link: string,
}

export default function Projects() {
    const data: ProjectData[] = [
        {
            title: "Shape Channels ",
            description: `Channels is a dedicated messaging app for clear and organised project communication for construction teams. Keep all your conversations, files, photos, issues, and progress updates in one easily accessible location. Track down information quickly and ensure everyone's on the same page. Enhanced Visibility: Gain a clear view of project progress with photos, updates, and discussions in one place`,
            img: "https://play-lh.googleusercontent.com/-wRW0hsXPzspj0geh7pA88ChyM9DmeZNQpcZQ731k9-ZQ53oQadg-wDZ_2chrglz_g=w832-h470-rw",
            alt: "Shape Channels Img",
            tags: ["messaging", "communication"],
            link: "https://play.google.com/store/apps/details?id=shapeconstruction.channels.production",
        },
        {
            title: "Platable",
            description: `Every day, delicious food from your favorite spots goes to waste because it doesn't get sold. With Platable, you can snag Surprise Bags filled with quality eats, save some cash, and do your part to help reduce food waste.`,
            img: "https://play-lh.googleusercontent.com/4-e1yWpcr1nfvtbGnjGJtBtllQE4b-k2lazzvnNMrIHCxd14LN9riFN9TAuiY0KZfHU=w832-h470-rw",
            alt: "Platable Img",
            tags: ["food delivery"],
            link: "https://play.google.com/store/apps/details?id=com.platablenow.platable",
        },
        {
            title: "Kalido: the opportunities app",
            description: `Kalido is an amazing AI powered platform that creates abundant opportunities for individuals in enterprises and communities. Our intuitive tools match your skills to people, teams, projects and jobs to surface economic, professional and social opportunities that would otherwise stay hidden.`,
            img: "/img_kalido.webp",
            alt: "Kalido Img",
            tags: ["talent Management", "HRMS"],
            link: "https://play.google.com/store/apps/details?id=me.kalido.android",
        },
        {
            title: "Habit Tracker : HabitBoard",
            description: "Welcome to HabitBoard the premier habit tracking application meticulously crafted to facilitate your journey towards personal growth and self-improvement!\n\n ",
            img: "https://play-lh.googleusercontent.com/OmyonMLvtjtBL3tgeE3VijnGL5P0mmbJjfglqcMMljvPnJyBml9N_3uWcU1M721tlyQ=w832-h470-rw",
            alt: "HabitBoard Img",
            tags: ["habit tracker", "productivity"],
            link: "https://play.google.com/store/apps/details?id=com.creations.bawender.habitboardnext"
        }
    ]
    return (
        <div className="w-full p-12 flex flex-col">
            <div className="mb-20">
                <span className="font-bold tracking-wider text-2xl uppercase bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
                    My Projects
                </span>
                <h2 className="text-5xl text-base-content font-bold mt-4 capitalize">Some of my best works</h2>
            </div>

            <div className="flex flex-col gap-6">
                {data.map((e, index) =>
                    <ProjectCard key={index} data={e} />
                )}
            </div>
        </div>
    )
}



function ProjectCard(props: { data: ProjectData }) {
    return (
        <Link href={props.data.link} target="blank">
            <div className="w-full border border-accent/20 rounded-lg bg-gray-50 shadow-md px-8 py-6 flex flex-col lg:flex-row gap-12 text-base-content">
                <Image
                    width={416}
                    height={235}
                    className="rounded-xl object-cover "
                    alt={props.data.alt}
                    src={props.data.img}
                />
                <div className="flex flex-col ">
                    <h3 className="text-4xl font-semibold capitalize ">{props.data.title}</h3>
                    <p className="text-gray-500 pt-6">{props.data.description}</p>
                    <div className="flex-1"></div>
                    <div className="w-full flex flex-col gap-1 mt-4 md:gap-4 md:flex-row ">
                        {props.data.tags.map(e => <div key={e} className="font-medium w-fit lowercase border border-primary py-1 px-4 rounded-full text-sm lg:text-base">{e}</div>)}
                    </div>
                </div>
            </div>
        </Link>
    )
}