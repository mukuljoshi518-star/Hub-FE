import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import './banner.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Banner = () => {
  const bannerItems = [
    {
      id: 1,
      title: 'Create. Express. Inspire.',
      description: 'Unleash your creativity with tools, ideas, and a vibrant community.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Daily Dose of Design',
      description: 'Discover design patterns, color trends, and UI inspiration.',
      image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Your Mind, Visualized',
      description: 'Turn thoughts into visuals, and visuals into stories.',
      image: 'https://images.unsplash.com/photo-1682965181456-a85555ac6c59?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const carouselRef = useRef(null);

  const options = {
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1200,
    dots: false,
    items: 1,
  };

  const handlePrevClick = () => carouselRef.current.prev();
  const handleNextClick = () => carouselRef.current.next();

  return (
    <div style={{ position: 'relative' }}>
      {/* Nav Buttons */}
      <div
  className="nav-btn nav-left"
  onClick={handlePrevClick}
>
  <FaChevronLeft />
</div>
<div
  className="nav-btn nav-right"
  onClick={handleNextClick}
>
  <FaChevronRight />
</div>

     <OwlCarousel ref={carouselRef} className="owl-theme" {...options}>
  {bannerItems.map((item) => (
    <div className="item" key={item.id}>
      <div className="banner-slide-container">
        {item.image.endsWith('.mp4') ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-style"
          >
            <source src={item.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="image-style"
            style={{ backgroundImage: `url(${item.image})` }}
          />
        )}

        {/* Gradient Overlay */}
        <div className="overlay-style" />

        {/* Content */}
        <div className="content-style">
          <h2 className="banner-content-main">{item.title}</h2>
          <p className="desc-style">{item.description}</p>
        </div>
      </div>
    </div>
  ))}
</OwlCarousel>
    </div>
  );
};

// 💅 Styles
const navBtnStyle = (pos) => ({
  position: 'absolute',
  top: '50%',
  [pos]: '20px',
  transform: 'translateY(-50%)',
  background: 'rgba(0,0,0,0.6)',
  color: '#fff',
  padding: '12px',
  borderRadius: '50%',
  zIndex: 3,
  cursor: 'pointer',
});

const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
};

const imageStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))',
  zIndex: 1,
};

const contentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  zIndex: 2,
  textAlign: 'center',
  maxWidth: '100%',
};

const descStyle = {
  fontSize: '1.5rem',
  marginTop: '1rem',
  lineHeight: 1.6,
};

export default Banner;
