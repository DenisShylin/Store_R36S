import { useEffect, useState } from "react";
import "./ModalAbout.css";

const ModalAbout = ({ feature, onClose }) => {
  const [isVideo, setIsVideo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Массив изображений для карусели (только для карточки с цветами)
  const colorImages = [
    "/src/assets/img/modal/Untitled_1_1x.jpg",
    "/src/assets/img/modal/Untitled_2_1x.jpg",
    "/src/assets/img/modal/Untitled_3_1x.jpg",
    "/src/assets/img/modal/Untitled_4_1x.jpg",
  ];

  useEffect(() => {
    // Проверяем, является ли источник видео файлом
    const checkIsVideo = () => {
      const videoExtensions = [".mp4", ".MP4", ".webm", ".ogg"];
      return videoExtensions.some((ext) =>
        feature.imageUrl.toLowerCase().endsWith(ext)
      );
    };

    setIsVideo(checkIsVideo());
  }, [feature.imageUrl]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  // Эффект для автоматической смены изображений
  useEffect(() => {
    let interval;
    if (feature.title === "Extensive color selection") {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === colorImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [feature.title]);

  const renderMedia = () => {
    if (feature.title === "Extensive color selection") {
      return (
        <img
          src={colorImages[currentImageIndex]}
          alt={`R36S Color Variant ${currentImageIndex + 1}`}
          className="modal-about-image"
        />
      );
    }

    if (isVideo) {
      return (
        <video
          className="modal-about-image"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={feature.imageUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <img
        src={feature.imageUrl}
        alt={feature.imageAlt}
        className="modal-about-image"
      />
    );
  };

  return (
    <div className="modal-about-overlay" onClick={onClose}>
      <div className="modal-about-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-about-close" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-about-header">
          <div className="modal-about-icon-wrapper">{feature.icon}</div>
          <h3 className="modal-about-title">{feature.title}</h3>
        </div>

        <div className="modal-about-body">
          {renderMedia()}

          <div className="modal-about-stats">
            <div className="modal-about-price-wrapper">
              <span className="modal-about-original-price">US $108.06</span>
              <span className="modal-about-current-price">
                $35.48
                <span style={{ fontSize: "24px" }}>US</span>
              </span>
            </div>
            <a
              href="https://www.aliexpress.com/item/1005007171465465.html"
              className="modal-about-button modal-about-button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="modal-about-button-pulse"></span>
              <span className="modal-about-button-text">BUY NOW -70%</span>
              <span className="modal-about-button-shine"></span>
            </a>
          </div>

          <div className="modal-about-description">
            {feature.fullDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAbout;
