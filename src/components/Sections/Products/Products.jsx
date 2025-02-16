import { useState } from "react";
import { ChevronRight, Download, FileDown } from "lucide-react";
import "./Products.css";

const Products = () => {
  const [activeSection, setActiveSection] = useState("downloads");

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    {
      id: "preparation",
      title: "Preparation",
      content: {
        text: `Essential Guide: R36S Setup Instructions
        Note: These instructions are specifically for authentic R36S devices. They are not compatible with K36 variants or devices marketed as R36S clones. For detailed hardware identification, visit the official R36S Wiki.
        
        What You'll Need:
        * Your R36S gaming device
        * Computer system
        * Two microSD memory cards:
           * 16GB card for custom firmware
           * 128GB card for game storage (recommended size)
        * Card reader compatible with microSD
        * Important software tools:
           * File flashing utility (like Balena Etcher or Rufus)
           * Archive management software (such as 7-Zip)
           * Partition management tool (e.g., MiniTool Partition Wizard)
        * Optional but helpful: Access to a Linux system or Ubuntu Live USB
        
        Important Disclaimer: This guide is provided for educational purposes only. Users proceed at their own risk and accept full responsibility for any potential hardware or software modifications.
        
        Hardware Version Check: Before proceeding, it's crucial to identify your specific R36S hardware version, as this will determine which firmware version you should use. You can find the detailed screen identification guide on the official R36S Wiki.`,
        images: {
          jpg: "/src/assets/img/products/i_1_1x.jpg",
          webp: "/src/assets/img/products/i_1_1x.webp",
        },
      },
    },
    {
      id: "backup",
      title: "Backing Up Original Firmware",
      content: {
        text: `Creating a Safety Backup
        Before making any modifications, it's highly recommended to create a backup of your original system. This safety measure allows you to restore your device to its factory state if needed.`,
        subsections: [
          {
            id: "win32diskimager",
            title: "Backup Process Using Win32DiskImager",
            content: {
              text: `Step 1: Configure Output Location
              * Launch Win32DiskImager on your computer
              * Navigate to the Image File section
              * Click the folder icon to select your backup destination
              * Important: Make sure to add ".img" at the end of your backup filename
              
              Step 2: Select Source Device
              * From the device dropdown menu, select your R36S drive
              * Critical Warning: Double-check your selection to avoid accidentally backing up the wrong drive
              * Incorrect drive selection could result in unwanted data loss
              
              Step 3: Optimize Backup Settings
              * Locate the "Read Only Allocated Partitions" option
              * Ensure this box is checked/enabled
              * This setting prevents copying empty space and creates a more efficient backup
              
              Step 4: Create Your Backup
              * Press the "Read" button to begin the backup process
              * Wait for the operation to complete
              * Store your backup file in a safe location`,
              images: {
                jpg: "/src/assets/img/products/i_2_1x.jpg",
                webp: "/src/assets/img/products/i_2_1x.webp",
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
        text: `SD Card Setup Guide
        Memory Card Selection High-quality storage is crucial for system stability. The stock SD cards included with your device are not reliable for long-term use and will likely fail. Invest in reputable brand-name microSD cards to prevent data corruption and system failures.
        
        Storage Configuration Options Your R36S features dual microSD card slots, offering two setup approaches:
        * Single Card Setup: All system files and games on one card
        * Dual Card Setup: Separate cards for system files and game storage`,
        subsections: [
          {
            id: "balena",
            title: "Method 1: Using Balena Etcher",
            content: {
              text: `1. Start Balena Etcher and select "Flash From File"
              2. Locate and select your downloaded firmware image
              3. Choose your target SD card under "Select Target"
              4. Begin the flashing process and wait for verification
              
              Important: If verification fails with ArkOS, the installation may still work. Alternative flashing tools are available if needed.`,
              images: {
                jpg: "/src/assets/img/products/i_3_1x.jpg",
                webp: "/src/assets/img/products/i_3_1x.webp",
              },
            },
          },
          {
            id: "win32",
            title: "Method 2: Win32DiskImager Installation",
            content: {
              text: `1. Launch Win32DiskImager
              2. Use the folder icon to browse and select your firmware file
              3. Carefully select your target SD card from the device list
              4. Initiate the writing process with the "Write" button`,
              images: {
                jpg: "/src/assets/img/products/i_4_1x.jpg",
                webp: "/src/assets/img/products/i_4_1x.webp",
              },
            },
          },
          {
            id: "raspberry",
            title: "Method 3: Raspberry Pi Imager Process",
            content: {
              text: `1. Open Raspberry Pi Imager
              2. Select "Choose OS" followed by "Use Custom"
              3. Carefully select your SD card as the target device
              4. Begin the writing process
              
              Critical Note: With any flashing method, always double-check your target device selection to avoid accidental data loss on other drives.`,
              images: {
                jpg: "/src/assets/img/products/i_5_1x.jpg",
                webp: "/src/assets/img/products/i_5_1x.webp",
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
        text: `Available Firmware Options for Your R36S
        Here's a comprehensive guide to the primary custom firmware choices available for your device:`,
        subsections: [
          {
            id: "arkos",
            title: "ArkOS - Community Enhanced Edition",
            content: {
              text: `Source: Find it on the ArkOS GitHub Project Page
              A community-maintained system optimized for the 36S device family, with ongoing support from AeolusUX.
              
              Setup Process:
              1. Get the newest release from the official repository
              2. Extract the firmware file (compatible with 7-Zip or similar tools)
              3. Transfer to your SD card using your preferred imaging software
              4. Check if you need to update the DTB file in boot
              5. Place the card in your device
              6. Boot up and complete the guided setup`,
              images: {
                jpg: "/src/assets/img/products/i_6_1x.jpg",
                webp: "/src/assets/img/products/i_6_1x.webp",
              },
            },
          },
          {
            id: "rocknix",
            title: "ROCKNIX Operating System",
            content: {
              text: `Source: Official ROCKNIX GitHub
              A streamlined alternative firmware with its own unique features.
              
              Setup Process:
              1. Find and download the latest ROCKNIX build
              2. Use your preferred tool to decompress the package
              3. Write the system image to your memory card
              4. Insert into your R36S
              5. Power on and configure your preferences`,
              images: {
                jpg: "/src/assets/img/products/i_7_1x.jpg",
                webp: "/src/assets/img/products/i_7_1x.webp",
              },
            },
          },
          {
            id: "amberelec",
            title: "AmberELEC System",
            content: {
              text: `Source: AmberELEC GitHub Project
              A refined firmware option focused on user experience.
              
              Setup Process:
              1. Obtain the current AmberELEC build from their repository
              2. Use Balena Etcher or similar to flash your card
              3. Install the prepared card in your device
              4. Start up and follow the configuration wizard`,
              images: {
                jpg: "/src/assets/img/products/i_8_1x.jpg",
                webp: "/src/assets/img/products/i_8_1x.webp",
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
        text: `Game Installation Guide
        Storage Preparation For Dual-Card Configurations:
        * Choose the appropriate format for your game storage card:
           * Use FAT32 for cards under 32GB
           * Select exFAT for larger storage capacities
           
        File Transfer Methods
        Option 1: Direct USB Connection
        * Connect your R36S to your computer using a USB cable
        * Device should appear as external storage
        
        Option 2: Card Reader Method
        * Remove the game storage card from your device
        * Insert it into your computer's card reader
        
        Adding Your Games
        1. Navigate to the appropriate system folders on your storage card
        2. Copy your game files directly to these folders
        3. Important Note for American Users: System folders use original console names:
           * Famicom (FC) = Nintendo Entertainment System (NES)
           * Megadrive (MD) = Genesis
           * And so on...
           
        Finalizing Installation
        1. If using card reader method, return the card to your device
        2. Power on your system
        3. Update your game lists to see your newly added titles`,
        images: {
          jpg: "/src/assets/img/products/i_9_1x.jpg",
          webp: "/src/assets/img/products/i_9_1x.webp",
        },
      },
    },
    {
      id: "tips",
      title: "General Tips",
      content: {
        text: `Important System Operation Guidelines
        
        Proper Shutdown Procedure
        * Never force shutdown by holding the power button
        * Your device now operates like a computer that needs proper shutdown
        * Correct method: Press START → QUIT → Shutdown
        * This prevents potential system corruption
        
        Power Management Features
        * Quick Standby: Single tap the power button
        * Device enters low-power mode while preserving your game state
        
        Customization Options
        Button Configuration
        * Access through: START → Advanced Settings → Switch A/B
        * Choose between:
           * Nintendo-style layout (system default)
           * Xbox-style button arrangement
        
        Visual Customization
        * Change system appearance: START → UI Settings → Themes
        * Select from available theme options to match your preferences`,
        images: {
          jpg: "/src/assets/img/products/i_10_1x.jpg",
          webp: "/src/assets/img/products/i_10_1x.webp",
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
              <source
                srcSet={section.content.images.webp}
                type="image/webp"
                media="(min-width: 1024px)"
              />
              <source
                srcSet={section.content.images.webp.replace("1x", "0.75x")}
                type="image/webp"
                media="(min-width: 768px)"
              />
              <source
                srcSet={section.content.images.webp.replace("1x", "0.5x")}
                type="image/webp"
                media="(max-width: 767px)"
              />
              <img
                src={section.content.images.jpg}
                alt={section.title}
                className="section-image"
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
                          media="(min-width: 1024px)"
                        />
                        <source
                          srcSet={subsection.content.images.webp.replace(
                            "1x",
                            "0.75x"
                          )}
                          type="image/webp"
                          media="(min-width: 768px)"
                        />
                        <source
                          srcSet={subsection.content.images.webp.replace(
                            "1x",
                            "0.5x"
                          )}
                          type="image/webp"
                          media="(max-width: 767px)"
                        />
                        <img
                          src={subsection.content.images.jpg}
                          alt={subsection.title}
                          className="subsection-image"
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
          <nav className="nav">
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
