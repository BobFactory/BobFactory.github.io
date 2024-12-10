import { LuMail, LuTwitter, LuLinkedin, } from 'react-icons/lu'
import Image from 'next/image'
import Link from 'next/link'

export default function ProfileAside() {
    const linkedinUrl = "https://www.linkedin.com/in/bawender"
    const twitterUrl = "https://x.com/BawenderY58"

    return (
        <aside className="card w-full border-accent/15 border-2 bg-base-200 shadow-xl text-base-content ">

            <figure>
                <div className='pt-8 pb-8 flex items-center flex-col'>
                    <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden">
                        <Image
                            fill
                            className="rounded-full object-cover saturate"
                            src="https://i.ibb.co/pQPYBdT/PXL-20211113-122803985-MP-2.jpg"
                            alt="Bawender Yandra Image"
                        />
                    </div>

                    <h1 className=" font-title mt-4 text-center text-[clamp(2rem,6vw,1.2rem)] font-black [word-break:auto-phrase] xl:w-[115%] [:root[dir=rtl]_&amp;]:leading-[1.35]">
                        Bawender Yandra
                    </h1>

                </div>
            </figure>
            <div className="card-body items-center pt-0 ">
                <p className='text-gray-500 font-medium text-lg text-center'>React-Native | Flutter | Android | iOS <br></br> ReactJS | NextJs</p>
                <div className=' card-actions justify-evenly w-full px-10 mt-6'>

                    <Link href={linkedinUrl} target='_blank' className="text-blue-500 hover:text-accent transition-colors">
                        <LuLinkedin className="w-6 h-6 hover:w-7 hover:h-7 duration-300 transform" />
                        <span className="sr-only">Linkedin</span>
                    </Link>

                    <Link href={twitterUrl} target='_blank' className="text-sky-400 hover:text-accent transition-colors">
                        <LuTwitter className="w-6 h-6 hover:w-7 hover:h-7 duration-300 transform" />
                        <span className="sr-only">Twitter</span>
                    </Link>

                    <Link href="#contact_us" className="text-red-600 hover:text-accent transition-colors ">
                        <LuMail className="w-6 h-6 hover:w-7 hover:h-7 duration-300 transform" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>

        </aside >
    )
}

