import Image from 'next/image';
import '@/app/about/about.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="restaurant-story">
        <h2>Our Story</h2>
        <p>
          Established in 2024, Beanery has become a staple of culinary excellence in the heart of the city. 
          Our menu is a celebration of traditional flavors with a modern twist, carefully crafted by our head chef, Paxton. 
          With a commitment to fresh, local ingredients, we strive to offer a dining experience like no other.
        </p>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <Image src="/images/chef.jpg" alt="Chef paxton" width={250} height={200} />
          <div className="team-info">
            <h3> Paxton </h3>
            <p>
              With over 20 years of culinary experience, Chef Paxton leads the kitchen with passion and creativity. 
              A graduate of Culinary School, Chef Mark has worked in top restaurants across the globe.
            </p>
          </div>
        </div>

        <div className="team-member">
          <Image src="/images/manager.jpg" alt="Manager Mark Ash" width={250} height={200} />
          <div className="team-info">
            <h3> Mark Ash</h3>
            <p>
              The backbone of our operations, Mark Ash ensures every guest has a memorable experience, 
              from the moment they step in until they leave.
            </p>
          </div>
        </div>
      </div>

      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          At Beanery, we believe that great food is the key to bringing people together. 
          Our mission is to provide exceptional dining in a warm and welcoming atmosphere, where every meal is made with love and served with a smile.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
