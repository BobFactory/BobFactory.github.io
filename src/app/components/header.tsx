import Link from 'next/link';

export default function Header() {
    const className = "text-lg text-gray-500 font-semibold decoration-secondary underline-offset-8 hover:underline hover:font-bold hover:text-black transform duration-300";
    return (
        <header>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#000000">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm w-[calc(100svw-1rem)] dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box text-base-content">
                            <li><Link href="#about" className='text-lg p-2'>About</Link></li>
                            <li><Link href="#services" className='text-lg p-2'>My Services</Link></li>
                            <li><Link href="#projects" className='text-lg p-2'>My Projects</Link></li>
                            <li><Link href="#contact_us" className='text-lg p-2'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link
                        href="/"
                        className="lg:ml-16 ml-0 text-xl md:text-3xl font-black text-base-content underline underline-offset-8 decoration-primary">
                        Bawender Y.
                    </Link>
                </div>

                <div className="navbar-end hidden lg:flex text-base-content mr-16">
                    <ul className="flex gap-8 px-1 ">
                        <li><Link href="#about" className={className}>About</Link></li>
                        <li><Link href="#services" className={className}>My Services</Link></li>
                        <li><Link href="#projects" className={className}>My Projects</Link></li>
                        <li><Link href="#contact_us" className={className}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}