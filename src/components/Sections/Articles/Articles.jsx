import { useEffect, useRef } from "react";
import "./Articles.css";

const Articles = () => {
  const articlesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    articlesRef.current.forEach((article) => {
      if (article) {
        article.style.opacity = 0;
        article.style.transform = "translateY(20px)";
        article.style.transition = "all 0.6s ease-out";
        observer.observe(article);
      }
    });

    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      id: 1,
      title: "Global Expansion of R36S: A Growing Gaming Empire",
      sections: [
        {
          subtitle: "Global Market Presence",
          content:
            "The R36S Retro Handheld Game Console brand actively expands its presence across global markets through strategic partnerships. As an R36S distributor, companies gain access to a rapidly growing retro gaming market. Moreover, the brand welcomes partnerships in North America, Europe, Asia, and Australia, offering exclusive distribution rights to qualified partners. Currently, R36S cooperation extends to major marketplaces like Amazon, eBay, and regional e-commerce platforms.",
        },
        {
          subtitle: "Distribution Network and Market Opportunities",
          content:
            "Becoming an R36S dealer opens opportunities in both online and offline retail channels. The brand particularly focuses on emerging markets in Southeast Asia, Latin America, and Eastern Europe. Furthermore, R36S maintains strict quality control and provides comprehensive support to its partners. Local distributors receive marketing materials, technical documentation, and dedicated account managers. Additionally, exclusive distributor status comes with territory protection and preferential pricing.",
        },
        {
          subtitle: "Partnership Benefits and Support System",
          content:
            "R36S collaboration offers significant advantages for business growth. Partners receive priority access to new product launches and promotional campaigns. The brand's contact number for R36S ensures direct communication with headquarters. Besides, the company provides extensive training programs and marketing support. Subsequently, partners can leverage the brand's established reputation in the gaming industry.",
        },
        {
          subtitle: "E-commerce Integration and Digital Presence",
          content:
            "The R36S dealer network actively utilizes modern e-commerce solutions. Partners can integrate with popular marketplace platforms or develop dedicated online stores. Meanwhile, the brand provides complete API documentation and inventory management tools. The R36S distributor network spans across 47 countries, with plans for further expansion. Consequently, partners benefit from established logistics and supply chain infrastructure.",
        },
        {
          subtitle: "Quality Assurance and Customer Support",
          content:
            "As an exclusive distributor, partners receive comprehensive warranty and after-sales support. The brand maintains regional service centers and provides technical training. For seamless communication, the R36S contact number connects partners with dedicated support teams. Furthermore, the company implements strict quality control measures throughout the distribution chain. Regular audits and performance reviews ensure consistent service quality.",
        },
        {
          subtitle: "Future Growth and Market Development",
          content:
            "R36S cooperation continues to evolve with market demands. The brand actively develops new product lines and explores emerging markets. Through strategic R36S collaboration, partners participate in product development and market research. Subsequently, distributors gain competitive advantages in their respective regions. The brand maintains flexible partnership models adapted to local market conditions, ensuring sustainable growth for all stakeholders.",
        },
        {
          subtitle: "Global Distribution Opportunities with R36S",
          content:
            "The R36S Distributor network continues to expand across multiple continents. Moreover, this presents an excellent opportunity for entrepreneurs worldwide. Currently, R36S seeks strategic partnerships in key markets including North America, Europe, Asia, and Australia. Furthermore, becoming an R36S dealer opens doors to a rapidly growing retro gaming market.",
        },
        {
          subtitle: "Exclusive Distribution Rights and Territory Protection",
          content:
            "As an Exclusive Distributor for R36S, you'll receive comprehensive territory protection. Additionally, the company provides extensive support for market development. The R36S team understands local market dynamics and helps partners succeed. Therefore, each exclusive territory comes with dedicated marketing support and competitive pricing advantages. Indeed, this partnership model has proven successful across various international markets.",
        },
        {
          subtitle: "Marketplace Integration and E-commerce Solutions",
          content:
            "Collaboration with R36S includes full support for marketplace integration. Subsequently, partners can sell through popular platforms like Amazon, eBay, and regional marketplaces. Meanwhile, R36S dealers receive specialized training for online sales optimization. Thus, whether you choose marketplace integration or your own e-commerce store, R36S provides necessary tools and resources.",
        },
      ],
    },
    {
      id: 2,
      title: "Revolutionizing Retro Gaming: The R36S Story",
      sections: [
        {
          subtitle: "A New Era in Handheld Gaming",
          content:
            "Welcome to the world of R36S, where nostalgia meets innovation. The R36S handheld has quickly become a dominant force in English-speaking markets, captivating gamers from the United States to Australia. Moreover, this revolutionary r36s game console brings together classic gaming charm and modern technology. Initially launched as a passion project, the R36S retro handheld has evolved into a gaming phenomenon that continues to exceed expectations.",
        },
        {
          subtitle: "Superior Design and Build Quality",
          content:
            "The r36s handheld game console stands out with its exceptional build quality and ergonomic design. Furthermore, every component undergoes rigorous testing to ensure durability. The device features a premium-grade aluminum body, responsive buttons, and a crystal-clear IPS display. Additionally, the thoughtful button layout prevents hand fatigue during extended gaming sessions. Thanks to user feedback, we've refined every aspect of the console's design.",
        },
        {
          subtitle: "Powerful Performance for Endless Entertainment",
          content:
            "Under the hood, the R36S packs impressive hardware that delivers smooth performance. Consequently, you can enjoy thousands of classic games without lag or stuttering. The powerful processor handles complex emulation effortlessly. Meanwhile, the optimized software ensures quick load times and stable gameplay. Besides, the r36s handheld review community consistently praises its reliable performance.",
        },
        {
          subtitle: "Expansive Game Library and Compatibility",
          content:
            "One of the most compelling features of the retro r36s is its extensive game compatibility. In fact, the system supports multiple classic gaming platforms. Subsequently, users can access their favorite childhood games all in one device. The intuitive interface makes game management simple and straightforward. Naturally, we regularly update the firmware to expand compatibility even further.",
        },
        {
          subtitle: "Battery Life That Goes the Distance",
          content:
            "The R36S showcases impressive battery longevity, surpassing many competitors in its class. Therefore, you can enjoy extended gaming sessions without constantly searching for a power outlet. The efficient power management system maximizes battery life. Similarly, the quick-charge feature gets you back in the game faster. Indeed, the battery performance sets a new standard for handheld gaming devices.",
        },
        {
          subtitle: "Advanced Display Technology",
          content:
            "Experience your favorite games in stunning clarity on the R36S's advanced display. Hence, every pixel appears sharp and vibrant, bringing classic games to life. The customizable display settings accommodate different lighting conditions. Likewise, the anti-glare coating reduces eye strain during long gaming sessions. Certainly, the visual quality enhances the overall gaming experience.",
        },
        {
          subtitle: "User-Friendly Interface and Controls",
          content:
            "We've designed the r36s handheld game console with user convenience in mind. Thus, navigating menus and configuring settings feels natural and intuitive. The responsive controls provide precise gaming input. Nevertheless, we continue to refine the interface based on community feedback. As a result, both newcomers and experienced gamers feel right at home.",
        },
        {
          subtitle: "Robust Community Support",
          content:
            "Behind every R36S is a thriving community of passionate gamers. Accordingly, users share tips, game recommendations, and troubleshooting advice. Our dedicated support team actively engages with the community. Furthermore, we implement community suggestions in regular updates. Together, we're building more than just a gaming device – we're creating a gaming movement.",
        },
        {
          subtitle: "Value That Exceeds Expectations",
          content:
            "The R36S delivers premium features without the premium price tag. Yet, we never compromise on quality or performance. The comprehensive package includes essential accessories and detailed documentation. In addition, free firmware updates add new features and improvements. Undoubtedly, the R36S offers exceptional value for retro gaming enthusiasts.",
        },
        {
          subtitle: "Future-Proof Investment",
          content:
            "Choosing an R36S means investing in a device that grows with you. Subsequently, regular software updates introduce new features and improvements. The robust hardware ensures long-term reliability. Meanwhile, our commitment to innovation drives continuous development. Finally, the R36S represents not just a gaming console, but a gateway to endless retro gaming possibilities.",
        },
      ],
    },
  ];

  return (
    <section className="articles" id="articles">
      <div className="articles__container">
        <div className="articles__grid">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="article"
              ref={(el) => (articlesRef.current[index] = el)}
            >
              <h2 className="article__title">{article.title}</h2>
              {article.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="article__subtitle">{section.subtitle}</h3>
                  <div className="article__content">
                    <p>{section.content}</p>
                  </div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
