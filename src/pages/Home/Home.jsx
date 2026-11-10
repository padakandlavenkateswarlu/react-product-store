import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import laptop from "../../assets/Product1.jpg";
import smartphone from "../../assets/product2.jpg";
import headphones from "../../assets/Product3.jpg";

const storeSlides = [
  {
    eyebrow: "UPGRADE YOUR SETUP",
    title: "Tech you'll love. Prices you'll love more.",
    description: "Find your next laptop and everyday tech essentials.",
    image: laptop,
    alt: "Laptop available in the store",
    theme: "tech",
  },
  {
    eyebrow: "EVERYDAY ESSENTIALS",
    title: "A little upgrade goes a long way.",
    description: "Shop smartphones and accessories picked for you.",
    image: smartphone,
    alt: "Smartphone available in the store",
    theme: "mobile",
  },
  {
    eyebrow: "SOUND GOOD?",
    title: "Make room for your next favorite sound.",
    description: "Explore headphones and more from our collection.",
    image: headphones,
    alt: "Headphones available in the store",
    theme: "audio",
  },
];

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % storeSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>

      {/* Home Heading */}
      <h1 className="text-center my-4">
        Home Page
      </h1>

      <div className="store-carousel" aria-roledescription="carousel">
        {storeSlides.map((slide, index) => (
          <section
            className={`store-slide store-slide--${slide.theme}${activeSlide === index ? " is-active" : ""}`}
            key={slide.theme}
            aria-hidden={activeSlide !== index}
          >
            <div className="store-slide-copy">
              <p className="store-slide-eyebrow">{slide.eyebrow}</p>
              <h2>{slide.title}</h2>
              <p className="store-slide-description">{slide.description}</p>
              <Link to="/products" className="store-slide-button">
                Shop Now
              </Link>
            </div>
            <div className="store-slide-image">
              <img src={slide.image} alt={slide.alt} />
            </div>
          </section>
        ))}

        <div className="store-slide-indicators" aria-label="Choose a slide">
          {storeSlides.map((slide, index) => (
            <button
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={activeSlide === index ? "is-active" : ""}
              key={slide.theme}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>


      {/* ============================= */}
      {/* Highlights Section */}
      {/* ============================= */}

      <section className="highlights-section">

        <h2>
          Why Shop With Us?
        </h2>

        <p className="highlights-subtitle">
          We provide the best shopping experience
          for our customers.
        </p>


        <div className="highlights-container">


          {/* Free Delivery */}
          <div className="highlight-card">

            <div className="highlight-icon">
              🚚
            </div>

            <h3>
              Free Delivery
            </h3>

            <p>
              Enjoy free and fast delivery
              on selected orders.
            </p>

          </div>


          {/* Secure Payment */}
          <div className="highlight-card">

            <div className="highlight-icon">
              🔒
            </div>

            <h3>
              Secure Payment
            </h3>

            <p>
              Your payments are protected
              with secure payment methods.
            </p>

          </div>


          {/* Easy Returns */}
          <div className="highlight-card">

            <div className="highlight-icon">
              🔄
            </div>

            <h3>
              Easy Returns
            </h3>

            <p>
              Easy return options are available
              for eligible products.
            </p>

          </div>


          {/* Customer Support */}
          <div className="highlight-card">

            <div className="highlight-icon">
              📞
            </div>

            <h3>
              24/7 Support
            </h3>

            <p>
              Our support team is available
              to help with your questions.
            </p>

          </div>


        </div>

      </section>

    </div>
  );
};