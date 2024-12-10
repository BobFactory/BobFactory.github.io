import Image from "next/image"

export default function AboutMe() {
    return (
        <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-16 gap-10">

                <div>
                    <span className="font-bold tracking-wider text-2xl uppercase bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
                        About Me
                    </span>
                    <h2 className="text-5xl text-base-content font-bold mt-4 ">Mastering Mobile and Web Development Over a Decade</h2>
                </div>

                <div className="text-xl font-medium text-base-content">
                    Since 2015, I&lsquo;ve dedicated myself to mastering mobile and web development,
                    turning ideas into reality through innovative, scalable solutions.
                    With 10+ years of experience, I specialize in building apps using both
                    <span className="font-bold underline decoration-accent underline-offset-4"> Native Android/iOS </span>
                    and cross-platform technologies
                    like <span className="font-bold underline decoration-accent underline-offset-4"> React Native </span>
                    and <span className="font-bold underline decoration-accent underline-offset-4">Flutter</span> .
                    <br></br>
                    <br></br>
                    I combine deep technical expertise with a strategic understanding of when to use native or cross-platform approaches, ensuring efficient, high-quality results. From well-architected code to seamless user experiences, I prioritize performance and maintainability at every step.
                    <br></br>
                    <br></br>
                    Let&lsquo;s create impactful digital solutions together!
                </div>
            </div>


            {/* Photos */}
            <ImagesGrid />
        </div>
    );
}

function ImagesGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mx-1 lg:gap-4 lg:mx-4 sm:mx-[4rem] md:mx-[6rem]">
            <div className="grid md:gap-4 gap-1">
                <div>
                    <Image
                        width={958}
                        height={1280}
                        className="h-auto max-w-full rounded-lg"
                        src="/img_1.webp"
                        alt="img 1"
                    />
                </div>
                <div>
                    <Image
                        width={6000}
                        height={4000}
                        className="h-auto max-w-full rounded-lg"
                        src="/img_5.webp"
                        alt="img 5"
                    />
                </div>

            </div>
            <div className="grid md:gap-4 gap-1">
                <div>
                    <Image
                        width={6464}
                        height={4320}
                        className="h-auto max-w-full rounded-lg"
                        src="/img_6.webp" alt="img 6"
                    />
                </div>
                <div>
                    <Image
                        width={2024}
                        height={4032}
                        className="h-auto max-w-full rounded-lg"
                        src="/img_4.webp"
                        alt="img 4"
                    />
                </div>
            </div>

            <div className="grid md:gap-4 gap-1">
                <div>
                    <Image
                        width={4032}
                        height={3024}
                        className="h-auto max-w-full rounded-lg"
                        src="/img_7.webp"
                        alt="img 7"
                    />
                </div>
                <div>
                    <Image
                        width={2448}
                        height={3264}
                        className="h-auto max-w-full rounded-lg"
                        src="/img_3.webp"
                        alt="img 3"
                    />
                </div>
            </div>

            <div className="grid md:gap-4 gap-1">
                <div>
                    <Image
                        width={4032}
                        height={3024}
                        className="h-auto max-w-full rounded-lg"
                        src="/img_2.webp"
                        alt="img 2 "
                    />
                </div>
                <div className="bg-gray-500">
                    <Image
                        width={3024}
                        height={4032}
                        className="h-auto max-w-full rounded-lg"
                        src="/img_8.webp"
                        alt="img 8"
                    />
                </div>
            </div>

        </div>

    )
}