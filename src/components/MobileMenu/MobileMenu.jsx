import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Gamepad2,
  Laptop2,
  PlayCircle,
  MessageCircle,
  PhoneCall,
  X,
} from "lucide-react";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen = false, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("mobile-menu")) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const menuItems = [
    {
      id: 1,
      icon: <Gamepad2 size={24} />,
      text: "Functionality",
      href: "#features-r36s",
    },
    {
      id: 2,
      icon: <Laptop2 size={24} />,
      text: "About R36S",
      href: "#features",
    },
    {
      id: 3,
      icon: <PlayCircle size={24} />,
      text: "Video",
      href: "#categories",
    },
    {
      id: 4,
      icon: <MessageCircle size={24} />,
      text: "Reviews",
      href: "#reviews",
    },
    {
      id: 5,
      icon: <PhoneCall size={24} />,
      text: "Contacts",
      href: "#contact",
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      className={`mobile-menu ${isOpen ? "open" : ""}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="mobile-menu__background" />
      <div className="mobile-menu__container">
        <button
          className="mobile-menu__close-btn"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            {menuItems.map((item) => (
              <li key={item.id} className="mobile-menu__item">
                <a
                  href={item.href}
                  className="mobile-menu__link"
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      document.body.style.overflow = "";
                    }, 300);
                  }}
                >
                  <span className="mobile-menu__icon">{item.icon}</span>
                  <span className="mobile-menu__text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__footer">© 2025 R36S. Official website</div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
