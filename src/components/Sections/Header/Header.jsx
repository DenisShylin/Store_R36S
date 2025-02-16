import { useState, useEffect } from "react";
import MobileMenu from "../../MobileMenu/MobileMenu";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Only hide header after scrolling down 100px
      if (currentScrollPos > 100) {
        setIsVisible(!isScrolledDown);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 0);

      // Set new timeout
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

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setIsVisible(true);

        // Получаем высоту хедера
        const headerHeight = document.querySelector(".header").offsetHeight;

        // Получаем позицию элемента относительно верха страницы
        const elementPosition = element.getBoundingClientRect().top;

        // Текущая позиция скролла
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        // Скролл к элементу с учетом высоты хедера
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        if (isMenuOpen) {
          setIsMenuOpen(false);
        }

        setTimeout(() => {
          const currentScrollPos = window.pageYOffset;
          setPrevScrollPos(currentScrollPos);
        }, 1000);
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`header ${isScrolled ? "scrolled" : ""} ${
          isMenuOpen ? "menu-open" : ""
        } ${isVisible ? "visible" : "hidden"}`}
      >
        <nav className="nav">
          <a href="/" className="logo">
            R36S
          </a>

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
      />
    </>
  );
};

export default Header;
