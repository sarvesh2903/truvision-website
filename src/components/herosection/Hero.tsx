import Slider from "react-slick";
import "./HeroSection.scss";

const images = [
  "src/assets/shopimage.jpg",
  "src/assets/shopimage1.png",
  "src/assets/shopimage2.png",
  ,
  "src/assets/shopimage3.png",
];
const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="hero-carousel">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img
              src={img}
              alt={`slide-${index}`}
              className="background-image"
            />
            <div className="overlay">
              <h1 className="tagline">See the world in Tru Style</h1>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroCarousel;
