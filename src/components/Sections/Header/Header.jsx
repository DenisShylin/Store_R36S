import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import MobileMenu from "../../MobileMenu/MobileMenu";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      if (currentScrollPos > 100) {
        setIsVisible(!isScrolledDown);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 0);

      const timeout = setTimeout(() => {
        // После прекращения скролла можно добавить дополнительную логику
      }, 150);

      setScrollTimeout(timeout);
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [prevScrollPos, isMenuOpen, scrollTimeout]);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        setTimeout(() => {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      setIsVisible(true);

      setTimeout(() => {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        if (isMenuOpen) {
          setIsMenuOpen(false);
          document.body.style.overflow = "unset";
        }

        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${href}`
        );

        setTimeout(() => {
          setPrevScrollPos(window.scrollY);
        }, 100);
      }, 50);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Блокируем/разблокируем скролл при открытии/закрытии меню
    document.body.style.overflow = isMenuOpen ? "unset" : "hidden";
  };

  return (
    <>
      <header
        className={`header ${isScrolled ? "scrolled" : ""} ${
          isMenuOpen ? "menu-open" : ""
        } ${isVisible ? "visible" : "hidden"}`}
      >
        <nav className="nav">
          <Link to="/" className="logo">
            R36S
          </Link>

          <ul className="desktop-menu">
            <li>
              <a
                className="our-menu-link"
                href="#features-r36s"
                onClick={handleNavClick}
              >
                Functionality
              </a>
            </li>
            <li>
              <a
                className="our-menu-link"
                href="#features"
                onClick={handleNavClick}
              >
                About R36S
              </a>
            </li>
            <li>
              <a
                className="our-menu-link"
                href="#categories"
                onClick={handleNavClick}
              >
                Video
              </a>
            </li>
            <li>
              <a
                className="our-menu-link"
                href="#reviews"
                onClick={handleNavClick}
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                className="our-menu-link"
                href="#contact"
                onClick={handleNavClick}
              >
                Contacts
              </a>
            </li>
          </ul>

          <button
            className="burger-btn"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        isMobile={isMobile}
        handleNavClick={handleNavClick}
      />
    </>
  );
};

export default Header;
