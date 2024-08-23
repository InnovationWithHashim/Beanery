import "@/app/styles/herosection.css";
import Image from "next/image";
import Link from 'next/link';

const Herosection = () => {
  return (
    <>
      <main className="hero-section">
        <div className="hero-content">
          <h1>Welcome to <span>Beanery</span> Where Taste Meets Elegance</h1>
          <p>Discover exquisite flavors crafted with passion</p>
          <Link href="/menu" className="hero-button">Make a Reservation</Link>
        </div>
        <div className="hero-image">
          <Image
            src="/images/res-main.jpg"
            alt="Picture of Burger"
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      </main>
      
      <section className="special-offers">
        <h2>Special <span>Offers</span></h2>
        <div className="offer-section">
        <div className="offer">
          <h3>Happy Hour</h3>
          <p>Enjoy 2-for-1 cocktails from 4 PM to 6 PM</p>
        </div>
        <div className="offer">
          <h3>Weekend Special</h3>
          <p>20% off on all seafood dishes</p>
        </div>
        <div className="offer">
          <h3>Family Feast</h3>
          <p>Free dessert with every family meal</p>
        </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
