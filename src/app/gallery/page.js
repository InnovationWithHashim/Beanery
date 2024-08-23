import Image from 'next/image';
import '@/app/gallery/media.css';

const MediaSection = () => {
  return (
    <section className="media-section">
      <div className="photo-gallery">
        <h2>Photo <span>Gallery</span></h2>
        <div className="gallery-images">
          <div className="gallery-item">
            <Image src="/images/gallery1.jpg" alt="Our beautifully crafted dishes, bursting with flavor" width={400} height={300} />
            <p>Our beautifully crafted dishes, bursting with flavor</p>
          </div>
          <div className="gallery-item">
            <Image src="/images/gallery2.jpg" alt="The elegant and cozy dining space at [Restaurant Name]" width={400} height={300} />
            <p>The elegant and cozy dining space at <span>Beanery</span></p>
          </div>
          <div className="gallery-item">
            <Image src="/images/gallery3.jpeg" alt="Behind-the-scenes in our bustling kitchen" width={400} height={300} />
            <p>Behind-the-scenes in our bustling kitchen</p>
          </div>
          <div className="gallery-item">
            <Image src="/images/gallery4.jpeg" alt="Perfect setting for private events and celebrations" width={400} height={300} />
            <p>Perfect setting for private events and celebrations</p>
          </div>
        </div>
      </div>

      <div className="video-section">
        <h2>A Glimpse Inside <span>Beanery</span></h2>
        <p>Watch this short video to explore our restaurant's ambiance, meet our team, and see the magic that happens in our kitchen.</p>
       
        <div className="video-placeholder">
          <video controls>
            <source src="/images/restaurant-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
