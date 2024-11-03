import React, { useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import './Hero.css';
import hero_img1 from '../../assets/images/hero1.png';
import hero_img2 from '../../assets/images/hero4.png';
import hero_img3 from '../../assets/images/hero3.png';
import maha_kumb_mela from '../../assets/images/maha_kumb_mela.png';

const Navbar = lazy(() => import('../Navbar/Navbar'));

const Hero = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  
  let timeAutoNext = 7000;
  let runNextAuto;
  let runTimeOut;

  const lazyLoadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.loading = 'lazy'; 
    });
  };

  const imagesToPreload = [hero_img1, hero_img2, hero_img3, maha_kumb_mela];
  lazyLoadImages(imagesToPreload);

  // Optimized slider function with useCallback
  const showSlider = useCallback((type) => {
    const sliderItems = sliderRef.current.querySelectorAll('.item');
    const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');

    if (type === 'next') {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add('next');
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, 1000);
    // Reduced timeout for better UX

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);
  }, [timeAutoNext]);

  useEffect(() => {
        nextRef.current.onclick = () => showSlider('next');
    prevRef.current.onclick = () => showSlider('prev');
  }, [showSlider])
  
  const windowScroll = () => {
    window.scrollTo(0,3000)
}

  return (
    <div>
      <header>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </header>
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          <div className="item">
            <img src={maha_kumb_mela} alt="hero4" loading="lazy" />
            <div className="content">
              <div className="author">WELCOME ABOARD!</div>
              <div className="title">The Greatest Festival Awaits <span className='hero-title-span'>Maha Kumbh Mela 2025</span></div>
              <div className="des">The world’s most sacred gathering, Maha Kumbh Mela, is here! Embrace this unparalleled chance to witness spiritual harmony, and the transformative power of India’s holiest celebration.</div>
              <div className="buttons">
                <button onClick={windowScroll}>SEE DETAILS</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={hero_img1} alt="hero1" loading="lazy" />
            <div className="content">
              <div className="author">WELCOME ABOARD!</div>
              <div className="title">Discover the Sacred Essence of India’s <span className='hero-title-span'>Divine Destinations</span></div>
              <div className="des">Experience the spiritual charm of Kedarnath, Badrinath, Prayagraj, Mathura, Ayodhya,  Varanasi, Chardham , Tungnath.</div>
              {/* <div className="buttons">
                <button>SEE DETAILS</button>
                <button>CONTACT</button>
              </div> */}
            </div>
          </div>
          <div className="item">
            <img src={hero_img2} alt="hero2" loading="lazy" />
            <div className="content">
              <div className="author">WELCOME ABOARD!</div>
              <div className="title">Reconnect with Divinity at India’s Most Revered<span className='hero-title-span'> Spiritual</span> Sites.</div>
              <div className="des">Discover the sacred heritage of India’s holy destinations on a journey of faith and self-discovery.</div>
              {/* <div className="buttons">
                <button>SEE DETAILS</button>
                <button>CONTACT</button>
              </div> */}
            </div>
          </div>
          <div className="item">
            <img src={hero_img3} alt="hero3" loading="lazy" />
            <div className="content">
              <div className="author">WELCOME ABOARD!</div>
              <div className="title">Unveil the Mystical Beauty of India’s Divine <span className='hero-title-span'>Pilgrimage</span></div>
              <div className="des">From the banks of the Yamuna to the peaks of the Himalayas, a spiritual awakening awaits.</div>
              {/* <div className="buttons">
                <button>SEE DETAILS</button>
                <button>CONTACT</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
            <img src={hero_img1} alt="thumbnail4" loading="lazy" />
            <div className="content">
              <div className="title">Varanasi</div>
              <div className="description">Uttar Pradesh</div>
            </div>
          </div>
          <div className="item">
            <img src={hero_img2} alt="thumbnail1" loading="lazy" />
            <div className="content">
              <div className="title">Kedarnath</div>
              <div className="description">Uttarkhand</div>
            </div>
          </div>
          <div className="item">
            <img src={hero_img3} alt="thumbnail2" loading="lazy" />
            <div className="content">
              <div className="title">Golden Temple</div>
              <div className="description">Punjab</div>
            </div>
          </div>
          <div className="item">
            <img src={maha_kumb_mela} alt="thumbnail3" loading="lazy" />
            <div className="content">
              <div className="title">Maha Kubm Mela</div>
              <div className="description">Prayagraj</div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button id="prev" ref={prevRef}>{'<'}</button>
          <button id="next" ref={nextRef}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
