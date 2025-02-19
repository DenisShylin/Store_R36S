import { useEffect, useRef, useState } from "react";
import heroImage1x from "../../../assets/img/hero/herou1_1x_.png";
import heroImage2x from "../../../assets/img/hero/herou1_2x_.png";
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
    "R36S HANDHELD GAME CONSOLE opens the door to the exciting world of retro gaming, offering an impressive collection of over 15,000 legendary games from different eras and platforms. At its heart is a premium 3.5-inch IPS screen, which renders images with stunning clarity and vibrant color saturation. Dive into a universe of gaming nostalgia with the R36S HANDHELD CONSOLE!";
  const mobileDescription =
    "R36S HANDHELD GAME CONSOLE - Gaming legends in the palm of your hand";

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

  const handleMoreDetailsClick = (e) => {
    e.preventDefault();
    const featuresSection = document.getElementById("features");
    const header = document.querySelector(".header");

    if (featuresSection && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = featuresSection.getBoundingClientRect().top;
      const currentScrollY = window.scrollY || window.pageYOffset;
      const offsetPosition = elementPosition + currentScrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Обновляем URL без перезагрузки страницы
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}#features`
      );
    }
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
            <span className="hero__title-line">R36S HANDHELD </span>
            <span className="hero__title-line">GAME CONSOLE</span>
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
            <button
              onClick={handleMoreDetailsClick}
              className="hero__button hero__button--secondary"
            >
              More details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
