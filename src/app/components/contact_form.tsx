

export default function ContactUsForm() {
    return (
        <div className="w-full p-12 flex flex-col">
            <div className="mb-6">
                <span className="font-bold tracking-wider text-2xl uppercase bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
                    Contact Us
                </span>
            </div>

            <section className="mt-3 bg-gradient-to-r from-primary via-secondary/50 to-accent/50 rounded-md p-8 ">
                <div className="bg-gray-50 h-full w-full text-base-content">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-lg text-center flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
                                Get in touch
                            </h2>

                            <p className="text-gray-600 text-xl mt-4">
                                Have a project in mind? Looking to partner or work together? Reach out to me through email and I&lsquo;ll get back to you in the next 48 hours.
                            </p>

                            <div className="bg-white border border-gray-600/40 rounded-full mt-8 p-1 flex items-center w-fit">
                                <div className="avatar placeholder">
                                    <div className="bg-accent text-neutral-content w-8 md:w-12 rounded-full">
                                        <span className="text-base md:text-xl">B</span>
                                    </div>
                                </div>
                                <h1 className="font-semibold mx-4 text-sm md:text-xl flex-1 text-center" >
                                    Bawender.y@gmail.com
                                </h1>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
}