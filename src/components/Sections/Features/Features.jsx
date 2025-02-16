import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./Features.css";

const Features = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Автоматическое воспроизведение видео и установка громкости
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Устанавливаем громкость на 50%
      videoRef.current.play().catch((error) => {
        console.log("Автовоспроизведение не удалось:", error);
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current && !isMuted) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (!isVisible) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMuted]);

  const handleBuyClick = () => {
    window.open(
      "https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleMoreInfoClick = () => {
    const aboutSection = document.getElementById("features-r36s");
    if (aboutSection) {
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      // При включении звука убеждаемся, что громкость установлена на 50%
      if (!videoRef.current.muted) {
        videoRef.current.volume = 0.5;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="features__container">
        <div className="features__content">
          <h2 className="features__title">Console R36S</h2>

          <div className="features__description">
            <p>
              The Retro Handheld R36S portable gaming console opens the door to
              the exciting world of retro gaming, offering an impressive
              collection of over 15,000 legendary games from different eras and
              platforms. The heart of the console is a premium 3.5-inch IPS
              screen, which renders images with stunning clarity and color
              saturation. The R36S does not just play old games - it rethinks
              retro gaming for the modern era. Dive into the universe of games
              with the R36S console!
            </p>
          </div>

          <div className="features__buttons">
            <button
              className="features__button"
              onClick={handleBuyClick}
              aria-label="Купить консоль R36S"
            >
              Buy now -68%
            </button>

            <button
              className="features__button-secondary"
              onClick={handleMoreInfoClick}
              aria-label="Узнать больше о R36S"
            >
              Show Details
            </button>
          </div>
        </div>

        <div className="features__image">
          <div className="features__image-wrapper">
            <video
              ref={videoRef}
              className="features__console-img"
              loop
              muted={isMuted}
              playsInline
              autoPlay
            >
              <source src="/src/assets/video/VIDEO_RS36.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="features__sound-toggle"
              onClick={toggleMute}
              aria-label={isMuted ? "Включить звук" : "Выключить звук"}
            >
              {isMuted ? (
                <VolumeX className="features__sound-icon" />
              ) : (
                <Volume2 className="features__sound-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
