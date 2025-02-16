import { useEffect, useRef, useState } from "react";
import heroImage1x from "../../../assets/img/hero/hero1_1x_.png";
import heroImage2x from "../../../assets/img/hero/hero1_2x_.png";
import "./Hero.css";

const Hero = () => {
  const titleRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 1280;
    }
    return true;
  });

  const desktopDescription =
    "Discover the world of retro gaming with the R36S portable console. 15,000+ classic games, a powerful processor and a bright IPS screen - everything for an unforgettable gaming adventure!";
  const mobileDescription =
    "Relive gaming history in the palm of your hands with the R36S";

  useEffect(() => {
    const preloadImages = () => {
      const img1 = new Image();
      const img2 = new Image();
      img1.src = heroImage1x;
      img2.src = heroImage2x;
      img1.onload = () => setImageLoaded(true);
    };
    preloadImages();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBuyClick = () => {
    window.open(
      "https://www.aliexpress.com/item/1005007171465465.html",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className={`hero ${imageLoaded ? "hero--loaded" : ""}`}>
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__container">
        <div className="hero__image">
          <div className="hero__image-wrapper">
            <div className="hero__image-glow"></div>
            <picture>
              <source
                media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                srcSet={heroImage2x}
                type="image/png"
              />
              <img
                src={heroImage1x}
                srcSet={`${heroImage1x} 1x, ${heroImage2x} 2x`}
                alt="R36S Gaming Console"
                className="hero__console-img"
                width="600"
                height="400"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
            </picture>
          </div>
        </div>

        <div className="hero__content" ref={titleRef}>
          <h1 className="hero__title">
            <span className="hero__title-line">Gaming retro</span>
            <span className="hero__title-line">console R36S</span>
          </h1>
          <p className="hero__description">
            {isDesktop ? desktopDescription : mobileDescription}
          </p>

          {isDesktop && (
            <div className="hero__pricing">
              <div className="hero__price-wrapper">
                <span className="hero__original-price">US $108.06</span>
                <span className="hero__current-price">
                  $35.48
                  <span style={{ fontSize: "24px" }}>US</span>
                </span>
              </div>
              <span className="hero__discount-badge">-68%</span>
            </div>
          )}

          <div className="hero__buttons">
            <button
              className="hero__button hero__button--primary"
              onClick={handleBuyClick}
            >
              <span className="hero__button-pulse"></span>
              <span className="hero__button-text">Shop With Discount</span>
              <span className="hero__button-shine"></span>
            </button>
            <a
              href="#features"
              className="hero__button hero__button--secondary"
            >
              More details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
