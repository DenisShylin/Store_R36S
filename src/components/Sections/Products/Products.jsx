import { useState, useEffect } from "react";
import { ChevronRight, Download, FileDown } from "lucide-react";
import productImages from "../../../constants/images";
import "./Products.css";

const Products = () => {
  const [activeSection, setActiveSection] = useState("downloads");
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);

    // Add a small delay to ensure the DOM has updated
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = isMobile ? 80 : 20; // Larger offset for mobile
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const sections = [
    {
      id: "preparation",
      title: "Preparation",
      content: {
        text: `Essential Guide: R36S Setup Instructions
        Note: These instructions are specifically for authentic R36S devices...`,
        images: {
          jpg: productImages.i1.jpg,
          webp: productImages.i1.webp,
        },
      },
    },
    {
      id: "backup",
      title: "Backing Up Original Firmware",
      content: {
        text: `Creating a Safety Backup...`,
        subsections: [
          {
            id: "win32diskimager",
            title: "Backup Process Using Win32DiskImager",
            content: {
              text: `Step 1: Configure Output Location...`,
              images: {
                jpg: productImages.i2.jpg,
                webp: productImages.i2.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: "flashing",
      title: "Flashing Custom Firmware",
      content: {
        text: `SD Card Setup Guide...`,
        subsections: [
          {
            id: "balena",
            title: "Method 1: Using Balena Etcher",
            content: {
              text: `1. Start Balena Etcher...`,
              images: {
                jpg: productImages.i3.jpg,
                webp: productImages.i3.webp,
              },
            },
          },
          {
            id: "win32",
            title: "Method 2: Win32DiskImager Installation",
            content: {
              text: `1. Launch Win32DiskImager...`,
              images: {
                jpg: productImages.i4.jpg,
                webp: productImages.i4.webp,
              },
            },
          },
          {
            id: "raspberry",
            title: "Method 3: Raspberry Pi Imager Process",
            content: {
              text: `1. Open Raspberry Pi Imager...`,
              images: {
                jpg: productImages.i5.jpg,
                webp: productImages.i5.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: "firmware",
      title: "Custom Firmware for R36S",
      content: {
        text: `Available Firmware Options for Your R36S...`,
        subsections: [
          {
            id: "arkos",
            title: "ArkOS - Community Enhanced Edition",
            content: {
              text: `Source: Find it on the ArkOS GitHub Project Page...`,
              images: {
                jpg: productImages.i6.jpg,
                webp: productImages.i6.webp,
              },
            },
          },
          {
            id: "rocknix",
            title: "ROCKNIX Operating System",
            content: {
              text: `Source: Official ROCKNIX GitHub...`,
              images: {
                jpg: productImages.i7.jpg,
                webp: productImages.i7.webp,
              },
            },
          },
          {
            id: "amberelec",
            title: "AmberELEC System",
            content: {
              text: `Source: AmberELEC GitHub Project...`,
              images: {
                jpg: productImages.i8.jpg,
                webp: productImages.i8.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: "roms",
      title: "Setting Up ROMs and BIOS",
      content: {
        text: `Game Installation Guide...`,
        images: {
          jpg: productImages.i9.jpg,
          webp: productImages.i9.webp,
        },
      },
    },
    {
      id: "tips",
      title: "General Tips",
      content: {
        text: `Important System Operation Guidelines...`,
        images: {
          jpg: productImages.i10.jpg,
          webp: productImages.i10.webp,
        },
      },
    },
    {
      id: "downloads",
      title: "Available Downloads",
      content: {
        downloads: [
          {
            file: "R36S_tg5040_20240413_v1.0.4_hotfix6.7z",
            date: "2024.04.13",
            version: "v1.0.4",
          },
          {
            file: "R36S_tg5040_20231222_v1.0.3.7z",
            date: "2023.12.22",
            version: "v1.0.3",
          },
          {
            file: "R36S_tg5040_20231116_1539_v1.0.2.7z",
            date: "2023.11.16",
            version: "v1.0.2",
          },
          {
            file: "R36S_tg5040_20231105_v1.0.0.7z",
            date: "2023.11.05",
            version: "v1.0.0",
          },
        ],
      },
    },
  ];

  const renderSectionContent = (section) => {
    if (section.id === "downloads") {
      return (
        <div className="download-list">
          {section.content.downloads.map((item) => (
            <div key={item.file} className="download-card">
              <div className="download-info">
                <FileDown className="download-icon" />
                <div>
                  <div className="download-filename">{item.file}</div>
                  <div className="download-meta">
                    Update: {item.date} • {item.version}
                  </div>
                </div>
              </div>
              <button className="download-button">
                <Download className="button-icon" />
              </button>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="section-content">
        <div className="text-content">
          {section.content.text.split("\n").map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {section.content.images && (
          <div className="image-container">
            <picture>
              <source srcSet={section.content.images.webp} type="image/webp" />
              <img
                src={section.content.images.jpg}
                alt={section.title}
                className="section-image"
                loading="lazy"
              />
            </picture>
          </div>
        )}

        {section.content.subsections && (
          <div className="subsections">
            {section.content.subsections.map((subsection) => (
              <div key={subsection.id} className="subsection">
                <h3 className="subsection-title">{subsection.title}</h3>
                <div className="subsection-content">
                  <div className="text-content">
                    {subsection.content.text
                      .split("\n")
                      .map((paragraph, idx) => (
                        <p key={idx} className="mb-4">
                          {paragraph.trim()}
                        </p>
                      ))}
                  </div>
                  {subsection.content.images && (
                    <div className="image-container">
                      <picture>
                        <source
                          srcSet={subsection.content.images.webp}
                          type="image/webp"
                        />
                        <img
                          src={subsection.content.images.jpg}
                          alt={subsection.title}
                          className="subsection-image"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="guide">
      <div className="guide-background"></div>
      <div className="container">
        <div className="content">
          <nav className={`nav ${isMobile ? "nav-mobile" : ""}`}>
            <h2 className="nav-title">Contents</h2>
            <div className="nav-list">
              {sections.map(({ id, title }) => (
                <button
                  key={id}
                  className={`nav-item ${
                    activeSection === id ? "nav-item-active" : ""
                  }`}
                  onClick={() => handleSectionClick(id)}
                >
                  <ChevronRight className="nav-icon" />
                  <span>{title}</span>
                </button>
              ))}
            </div>
          </nav>

          <main className="main">
            <h1 className="title">R36S Console Firmware Guide</h1>
            <div className="dynamic-sections">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`section ${
                    activeSection === section.id ? "section-active" : ""
                  }`}
                >
                  <h2 className="section-title">{section.title}</h2>
                  {renderSectionContent(section)}
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Products;
