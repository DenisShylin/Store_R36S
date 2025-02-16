import { useState } from "react";
import "./About.css";
import ModalAbout from "./ModalAbout/ModalAbout";
import { createPortal } from "react-dom";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleOpenModal = (feature, e) => {
    e.stopPropagation();
    setSelectedFeature(feature);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
    document.body.style.overflow = "auto";
  };

  const features = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="6" y1="12" x2="10" y2="12"></line>
          <line x1="8" y1="10" x2="8" y2="14"></line>
          <line x1="15" y1="13" x2="15.01" y2="13"></line>
          <line x1="18" y1="11" x2="18.01" y2="11"></line>
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        </svg>
      ),
      title: "Retro Game Collection",
      description: "Get into the game with the r36s portable gaming console.",
      number: "15K+",
      detail: "classic games",
      fullDescription: `Discover a rich collection of classic games, including over 15,000 titles from different eras. From iconic arcade games to beloved console games, our library spans every significant platform of the past.

The collection includes:
• Classic arcade games from the 80s and 90s
• Complete libraries of NES, SNES, Sega and other consoles
• Exclusive ports and rare releases
• Optimized versions for modern hardware`,
      imageUrl: "/src/assets/img/modal/Display_Controls (2).webp",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Vibrant Display Technologies",
      description:
        "Enjoy vivid games on the 3.5* LCD display with crisp 640x480 resolution.",
      number: '3.5"',
      detail: "IPS display",
      fullDescription: `R36S Console Display Specifications

 Screen & Processing
- Resolution: 640x480 with advanced LCD panel
- Processor: Quad-core 64-bit Cortex-A35 (up to 1.8GHz)
- Memory: 1GB DDR3L RAM

 Display Features
- Wide viewing angle LCD panel
- Adjustable color temperature
- Eye protection:
  - Blue light filter
  - Reduced eye strain technology
- Durable hardened glass screen protection`,
      imageUrl: "/src/assets/video/video.gif",
      imageAlt: "Retro games collection",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
          <line x1="22" y1="11" x2="22" y2="13"></line>
        </svg>
      ),
      title: "Powerful battery",
      description: "Enjoy up to 7-8 hours of continuous gaming with the R36S.",
      number: "7-8",
      detail: "hours of play",
      fullDescription: `**Powerful 3200 mAh Battery**

Experience up to 7-8 hours of extended gaming with the R36S. The high-capacity 3200 mAh battery powers its crisp 3.5-inch IPS display (640x480 resolution), delivering an immersive gaming experience without frequent charging.

Key features:
- Long-lasting gameplay 
- Full-screen IPS display
- Portable design
- Uninterrupted entertainment

Take your gaming anywhere – play more, charge less.`,
      imageUrl: "/src/assets/video/video_batrey.MP4",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: "Extensive color selection",
      description: "Experience our wide selection of stunning console colors.",
      number: "10+",
      detail: "COLORS",
      fullDescription: `Experience the R36S Collection:

The R36S console delivers 12+ captivating color variations in 2024, including our signature Midnight Black and eye-catching Galactic Purple. Each R36S model features recycled plastic finish and scratch-resistant coating. Since its launch, over 2M gamers worldwide chose R36S for its unique design options. Join the 92% of players rating our vibrant color selection 4.9/5.

Available Colors:
- Classic Black
- Vibrant Orange
- Mesmerizing Purple
- Dynamic Red
- Pure White
- Radiant Yellow
- Serene Lake Blue
- Deep Marine Blue
- Natural Olive Green
- Premium Transparent Red`,
      imageUrl: "/src/assets/img/modal/R36S_1x_jpej.jpg",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: "Extensive settings",
      description:
        "Customize controls, brightness, sound and settings for maximum comfort",
      number: "30+",
      detail: "settings",
      fullDescription: `Features & Connectivity:

- Connect to external displays via OTG for large-screen gaming
- Compatible with modern gaming controllers and gamepads
- Multi-language interface support
- Customizable control schemes and button mapping
- Advanced display settings with adjustable brightness and contrast
- Audio optimization with multiple sound profiles
- Screen mirroring capability
- Low latency connection for seamless gameplay
- Expandable storage support
- Quick system updates
- User-friendly interface`,
      imageUrl: "/src/assets/video/Video_option2.MP4",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 6,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Maximum portability",
      description:
        "Portable console with removable battery for gaming on the go.",
      number: "Ultra",
      detail: "Portable",
      fullDescription: `Whether commuting, traveling, or taking a quick break, the R36S is ready for instant entertainment. Its durable design and protected screen ensure worry-free portability, while the long-lasting battery keeps you gaming on the go.

Features:
• Pocket-sized dimensions for ultimate portability
• Rugged construction for daily carry
• Ergonomic grip for extended gaming sessions
• Quick startup for instant gaming access

Never compromise between portability and performance - the R36S delivers both in a perfectly portable package.`,
      imageUrl: "/src/assets/video/video_moda_6.MP4",
      imageAlt: "Коллекция ретро-игр",
    },
  ];

  return (
    <section className="about" id="features-r36s">
      <div className="about__container">
        <div className="about__header">
          <div className="about__labels">
            <span className="about__label">Functionality</span>
            <span className="about__label about__label--outline">R36S</span>
          </div>
          <h2 className="about__title">Your Adventure Starts Here</h2>
          <p className="about__subtitle">
            Discover the world of retro gaming with modern technology.
          </p>
        </div>

        <div className="about__cards">
          {features.map((feature) => (
            <div
              className={`about-card ${
                activeCard === feature.id ? "active" : ""
              }`}
              key={feature.id}
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
              onMouseMove={handleMouseMove}
              style={{
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
              }}
            >
              <div className="card-blur"></div>
              <div className="card-glow"></div>
              <div className="about-card__content">
                <div className="about-card__icon-wrapper">{feature.icon}</div>
                <h3 className="about-card__title">{feature.title}</h3>
                <p className="about-card__description">{feature.description}</p>
                <div className="about-card__stats">
                  <span className="about-card__number">{feature.number}</span>
                  <span className="about-card__detail">{feature.detail}</span>
                </div>
                <button
                  className="about-card__button"
                  onClick={(e) => handleOpenModal(feature, e)}
                >
                  <span className="button-text">More details</span>
                  <span className="button-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="card-indicator"></div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen &&
        selectedFeature &&
        createPortal(
          <ModalAbout feature={selectedFeature} onClose={handleCloseModal} />,
          document.body
        )}
    </section>
  );
};

export default About;
