import { useEffect, useRef, useState } from "react";
import "./Categories.css";

const Categories = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          // Выключаем звук при уходе с секции
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    const contentRef = document.querySelector(".categories__content");
    if (contentRef) {
      observer.observe(contentRef);
    }

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", () => {
        setDuration(videoRef.current.duration);
      });

      videoRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(videoRef.current.currentTime);
      });
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = (e) => {
    // Проверяем, что клик был не по элементам управления
    if (!e.target.closest(".categories__video-controls")) {
      togglePlay();
    }
  };

  const handleTimeUpdate = (e) => {
    const time = e.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="categories" id="categories" ref={sectionRef}>
      <div className="categories__container">
        <div className="categories__content">
          <div className="categories__info">
            <div className="categories__labels">
              <span className="categories__label">Demonstration</span>
              <span className="categories__label categories__label--outline">
                Gameplay
              </span>
            </div>
            <h2 className="categories__title">R36S Video</h2>
            <p className="categories__description">
              Immerse yourself in the world of classic games with improved
              graphics and smooth gameplay. Enjoy your favorite games in high
              quality on a bright IPS screen.
            </p>
          </div>

          <div className="categories__video-wrapper">
            <div
              className="categories__video-container"
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                className="categories__video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/src/assets/video/videoRS.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="categories__video-overlay"></div>

              <div className="categories__video-controls">
                <button
                  className="categories__video-play"
                  onClick={(e) => {
                    e.stopPropagation(); // Предотвращаем всплытие события
                    togglePlay();
                  }}
                  aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </button>

                <button
                  className="categories__video-mute"
                  onClick={(e) => {
                    e.stopPropagation(); // Предотвращаем всплытие события
                    setIsMuted(!isMuted);
                    if (videoRef.current) {
                      videoRef.current.muted = !isMuted;
                    }
                  }}
                  aria-label={isMuted ? "Включить звук" : "Выключить звук"}
                >
                  {isMuted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  )}
                </button>

                <div
                  className="categories__video-progress"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleTimeUpdate}
                    className="categories__video-slider"
                  />
                  <div className="categories__video-time">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="categories__video-info">
              <div className="categories__video-stats">
                <div className="categories__stat">
                  <span className="categories__stat-number">60</span>
                  <span className="categories__stat-label">FPS</span>
                </div>
                <div className="categories__stat">
                  <span className="categories__stat-number">HD</span>
                  <span className="categories__stat-label">Quality</span>
                </div>
                <div className="categories__stat">
                  <span className="categories__stat-number">3.5*</span>
                  <span className="categories__stat-label">IPS Screen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
