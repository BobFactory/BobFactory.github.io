import Link from "next/link"

interface ElevatedButtonProps {
    text: string,
    link: string
}
const ElevatedButton = (props: ElevatedButtonProps) => {

    return (
        <Link
            href={props.link}
            className="group relative inline-block text-sm font-medium text-accent focus:outline-none focus:ring"
        >
            <span
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 transform transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>

            <span className="relative block border border-current bg-black text-white font-bold text-2xl px-8 py-3"> {props.text}</span>
        </Link>
    )
}

export default ElevatedButton