import Link from 'next/link';
import "@/app/styles/Navbar.css";
import Image from 'next/image';

const Navbar = () => {
    return (
        <section className="navbar-section">
            <div className="navbar-logo">
                <Link href="/">  <Image src="/images/logo.svg" alt="logo" width={100} height={50} /> </Link>
            </div>
            <nav className="navbar-nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/gallery">Gallery </Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
