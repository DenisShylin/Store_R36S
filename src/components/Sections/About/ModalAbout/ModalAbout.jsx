import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import modalMedia from "../../../../constants/modalMedia";
import "./ModalAbout.css";

const ModalAbout = ({ feature = null, onClose }) => {
  const [isVideo, setIsVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const colorImages = modalMedia.images.colors;

  useEffect(() => {
    const checkIsVideo = () => {
      if (!feature?.imageUrl) return false;
      if (modalMedia.videos[feature.imageUrl]) return true;

      const videoExtensions = [".mp4", ".MP4", ".webm", ".ogg", ".gif"];
      return videoExtensions.some((ext) =>
        feature.imageUrl.toLowerCase().endsWith(ext)
      );
    };

    setIsVideo(checkIsVideo());
  }, [feature?.imageUrl]);

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

  useEffect(() => {
    let interval;
    if (feature?.title === "Extensive color selection") {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === colorImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [feature?.title, colorImages.length]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const renderMedia = () => {
    if (!feature) return null;

    if (feature.title === "Extensive color selection") {
      return (
        <img
          src={colorImages[currentImageIndex]}
          alt={`R36S Color Variant ${currentImageIndex + 1}`}
          className="modal-about-image"
          onError={(e) => {
            console.error(
              "Error loading color image:",
              colorImages[currentImageIndex]
            );
            e.target.style.display = "none";
          }}
        />
      );
    }

    if (isVideo) {
      const videoSrc = modalMedia.videos[feature.imageUrl] || feature.imageUrl;

      if (videoSrc.toLowerCase().endsWith(".gif")) {
        return (
          <img
            src={videoSrc}
            alt={feature.imageAlt || "Feature animation"}
            className="modal-about-image"
            onError={(e) => {
              console.error("Error loading GIF:", videoSrc);
              e.target.style.display = "none";
            }}
          />
        );
      }

      return (
        <div className="video-wrapper">
          <video
            className="modal-about-image"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            onError={(e) => {
              console.error("Error loading video:", videoSrc);
              e.target.style.display = "none";
            }}
          >
            <source
              src={videoSrc}
              type={
                videoSrc.toLowerCase().endsWith(".mp4")
                  ? "video/mp4"
                  : "video/webm"
              }
            />
            Your browser does not support the video tag.
          </video>
          <button className="sound-control" onClick={toggleMute}>
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>
      );
    }

    return feature.imageUrl ? (
      <img
        src={modalMedia.images[feature.imageUrl] || feature.imageUrl}
        alt={feature.imageAlt || "Feature image"}
        className="modal-about-image"
        onError={(e) => {
          console.error("Error loading image:", feature.imageUrl);
          e.target.style.display = "none";
        }}
      />
    ) : null;
  };

  if (!feature) {
    return null;
  }

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
                <span className="modal-about-discount-badge">-70%</span>
              </span>
            </div>

            <a
              href="https://www.aliexpress.com/item/1005007171465465.html"
              className="modal-about-button modal-about-button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="modal-about-button-pulse"></span>
              <span className="modal-about-button-text">BUY NOW</span>
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

ModalAbout.propTypes = {
  feature: PropTypes.shape({
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    fullDescription: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ModalAbout;
